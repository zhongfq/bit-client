import { app } from "../../../../app";
import { Callback } from "../../../../core/dispatcher";
import { ecs } from "../../../../core/ecs";
import { IVector3Like, Pool } from "../../../../core/laya";
import { MathUtil } from "../../../../core/utils/math-util";
import proto from "../../../../def/proto";
import { opcode } from "../../../../def/protocol";
import { WorldConf } from "../../../../def/world";
import { IBehaviorContext } from "../../behavior3/behavior-context";
import { WorldContext } from "../../world-context";
import { BattleComponent } from "../components/battle-component";
import { CameraComponent } from "../components/camera-component";
import {
    InterpolationRate,
    MovementComponent,
    MovementType,
    TrackVector3,
    TransformComponent,
} from "../components/movement-component";
import { AnimationComponent } from "../components/render-component";
import { Tilemap } from "../components/tilemap-component";
import {
    OwnerComponent,
    SoldierComponent,
    SoliderOrder,
    TroopComponent,
} from "../components/troop-component";

enum AnimatorTrigger {
    IDLE = "idle",
    RUN = "run",
    ATTACK = "attack",
}

const formation: IVector3Like[] = [
    { x: -0.7, y: 0, z: 0 },
    { x: -0.7, y: 0, z: 0.6 },
    { x: -0.7, y: 0, z: -0.6 },
    { x: -1.4, y: 0, z: 0 },
    { x: -1.4, y: 0, z: 0.6 },
    { x: -1.4, y: 0, z: -0.6 },
    { x: -2.1, y: 0, z: 0 },
    { x: -2.1, y: 0, z: 0.6 },
    { x: -2.1, y: 0, z: -0.6 },
    { x: -2.8, y: 0, z: 0 },
    { x: -2.8, y: 0, z: 0.6 },
    { x: -2.8, y: 0, z: -0.6 },
];

const PREFAB_SOLDIER = "resources/prefab/battle/roles/mc03.lh";

export class CommandSystem extends ecs.System implements IBehaviorContext {
    constructor(readonly context: WorldContext) {
        super();

        app.service.network.ignoreLog(opcode.world.c2s_troop_move_by);
        app.service.network.ignoreLog(opcode.world.s2c_troop_move_by);

        this.handle(opcode.world.notify_roles, this._onNotifyRoles);
        this.handle(opcode.world.notify_entities, this._onNotifyEntities);
        this.handle(opcode.world.notify_actions, this._onNotifyActions);
    }

    update(dt: number): void {}

    private handle(op: number, callback: Callback) {
        this.context.on(app.service.network, op, callback, this);
    }

    private _onNotifyRoles(notify: proto.world.notify_roles) {}

    private _onNotifyEntities(notify: proto.world.notify_entities) {
        for (const cmd of notify.enterList) {
            this._addEntity(cmd as proto.world.Entity);
        }
        for (const eid of notify.leaveList) {
            this._delEntity(eid);
        }
    }

    private _onNotifyActions(notify: proto.world.notify_actions) {
        const ACTION = WorldConf.ENTITY_ACTION;
        for (const cmd of notify.actions) {
            switch (cmd.action) {
                case ACTION.ADD_ENTITY:
                    this._addEntity(cmd.addEntity?.entity as proto.world.Entity);
                    break;
                case ACTION.DEL_ENTITY:
                    this._delEntity(cmd.delEntity?.eid as number);
                    break;
                case ACTION.MOVE:
                    this._moveEntity(cmd.move as proto.world.MoveAction);
                    break;
                case ACTION.BATTLE_SKILL:
                    this._startAttack(cmd.battleSkill as proto.world.BattleSkillAction);
                    break;
                case ACTION.BATTLE_STOP:
                    this._stopAttack(cmd.battleStop!.eid!);
                    break;
                case ACTION.BATTLE_SUB_HP:
                    break;
            }
        }
    }

    private _addEntity(cmd: proto.world.Entity) {
        const entity = this.ecs.createEntity(cmd.eid);
        const etype = cmd.etype;
        const ENTITY_TYPE = WorldConf.ENTITY_TYPE;

        entity.etype = etype;

        if (cmd.pos) {
            const transform = entity.addComponent(TransformComponent);
            const data = cmd.pos as proto.world.Position;
            Tilemap.grid2Pixel(data.x, data.y, transform.position);
            transform.flag |= TransformComponent.POSITION;
        }

        if (cmd.owner) {
            const owner = entity.addComponent(OwnerComponent);
            const data = cmd.owner as proto.world.OwnerComponent;
            owner.rid = data.rid;
            owner.name = data.roleName;
        }

        if (cmd.building) {
            console.log("TODO: add building component");
        }

        if (cmd.move) {
            const movement = entity.addComponent(MovementComponent);
            movement.positionInterpolation.rate = InterpolationRate.POSITION;
            movement.rotationInterpolation.rate = InterpolationRate.ROTATION;
            this._updateMovement(cmd.eid, cmd.move as proto.world.MoveComponent);
        }

        if (cmd.troop) {
            const data = cmd.troop as proto.world.TroopComponent;
            const animation = entity.addComponent(AnimationComponent);
            const heroProp = app.service.table.hero[data.heroId];
            const modelProp = app.service.table.worldEntity.models[heroProp.model];
            animation.path = modelProp.res;

            if (this.context.troop.eid === cmd.eid) {
                const camera = this.ecs.getSingletonComponent(CameraComponent)!;
                camera.focus = cmd.eid;
            }

            const troop = entity.addComponent(TroopComponent);
            const transform = entity.getComponent(TransformComponent)!;
            const position = transform.position;
            for (let i = 0; i < 40; i++) {
                const dis = 0.1 * i;
                troop.positions.push(
                    new TrackVector3(position.x - dis, position.y, position.z, 0.1)
                );
            }
            troop.latestIndex = 0;
            this._loadSoldiers(troop);
        }

        if (cmd.battle) {
            const data = cmd.battle as proto.world.BattleComponent;
            const battle = entity.addComponent(BattleComponent);
            battle.battleUid = data.battleUid;
            battle.fighterEids = data.fighterEids;
            battle.startTime = data.startTs;
        }

        if (cmd.etype === ENTITY_TYPE.TROOP) {
            // const prop = app.service.data.worldEntityTable.models[cmd.]
        } else {
            console.log(`unhandle entity type: ${cmd.etype}`);
        }
    }

    private _delEntity(eid: number) {
        this.ecs.removeEntity(eid);
    }

    private _moveEntity(cmd: proto.world.MoveAction) {
        const entity = this.ecs.getEntity(cmd.eid as number);
        if (!entity) {
            console.warn(`entity not found: eid=${cmd.eid}`);
            return;
        }
        if (cmd.curPos) {
            const transform = entity.getComponent(TransformComponent)!;
            const movement = entity.getComponent(MovementComponent)!;
            const current = cmd.curPos as proto.world.Position;
            const positionInterpolation = movement.positionInterpolation;
            positionInterpolation.percent = 0;
            Tilemap.grid2Pixel(current.x, current.y, positionInterpolation);
            positionInterpolation.vsub(transform.position, positionInterpolation);
        }
        this._updateMovement(
            cmd.eid as number,
            proto.world.MoveComponent.create({
                path: cmd.path,
                speed: cmd.speed,
                startMs: cmd.startMs,
                degree: cmd.degree,
            })
        );
    }

    private _updateMovement(eid: number, data: proto.world.MoveComponent) {
        const entity = this.ecs.getEntity(eid);
        if (!entity) {
            console.warn(`entity not found: eid=${eid}`);
            return;
        }

        const movement = entity.getComponent(MovementComponent)!;
        const troop = entity.getComponent(TroopComponent)!;
        if (data.speed === 0 && data.path.length === 0) {
            this.stopMove(movement);
            if (troop) {
                this._stopMoveSoldiers(troop);
            }
        } else if (data.path.length > 0) {
        } else if (data.speed > 0) {
            this.startMove(movement, MathUtil.toDegree(data.degree), data.speed);
            if (troop) {
                this._startMoveSoldiers(troop);
            }
        }
    }

    private _startAttack(cmd: proto.world.BattleSkillAction) {
        const entity = this.ecs.getEntity(cmd.srcEid);
        if (!entity) {
            console.warn(`entity not found: eid=${cmd.srcEid}`);
            return;
        }
        const animation = entity.getComponent(AnimationComponent);
        if (animation?.animator) {
            this._setTrigger(animation.animator, AnimatorTrigger.ATTACK);
            const movement = entity.getComponent(MovementComponent)!;
            if (movement.type === MovementType.NONE) {
                this._clearTrigger(animation.animator, AnimatorTrigger.RUN);
                this._setTrigger(animation.animator, AnimatorTrigger.IDLE);
            } else {
                this._clearTrigger(animation.animator, AnimatorTrigger.IDLE);
                this._setTrigger(animation.animator, AnimatorTrigger.RUN);
            }
        }
        this._towardToTarget(cmd.srcEid, cmd.dstEid);
    }

    private _towardToTarget(eid1: number, eid2: number) {
        const transform1 = this.ecs.getEntity(eid1)?.getComponent(TransformComponent);
        const transform2 = this.ecs.getEntity(eid2)?.getComponent(TransformComponent);
        if (transform1 && transform2) {
            const p1 = transform1.position;
            const p2 = transform2.position;
            this._setRotation(transform1, p2.x - p1.x, p2.z - p1.z, true);
        }
    }

    private _stopAttack(eid: number) {
        const entity = this.ecs.getEntity(eid);
        if (!entity) {
            console.warn(`entity not found: eid=${eid}`);
            return;
        }
        const animation = entity.getComponent(AnimationComponent);
        if (animation?.animator) {
            const movement = entity.getComponent(MovementComponent)!;
            this._clearTrigger(animation.animator, AnimatorTrigger.ATTACK);
            if (movement.type === MovementType.NONE) {
                this._clearTrigger(animation.animator, AnimatorTrigger.RUN);
                this._setTrigger(animation.animator, AnimatorTrigger.IDLE);
            } else {
                this._clearTrigger(animation.animator, AnimatorTrigger.IDLE);
                this._setTrigger(animation.animator, AnimatorTrigger.RUN);
            }
        }
    }

    private _setRotation(
        transform: TransformComponent,
        x: number,
        z: number,
        shouldInterpolate?: boolean
    ) {
        const rad = Math.atan2(-z, x);
        let dest = (rad * 180) / Math.PI;
        if (shouldInterpolate) {
            const movement = transform.getComponent(MovementComponent)!;
            let offset = dest - transform.rotation;
            if (offset > 180) {
                offset -= 360;
            } else if (offset < -180) {
                offset += 360;
            }
            movement.rotationInterpolation.percent = 0;
            movement.rotationInterpolation.rotation = offset;
        } else {
            transform.rotation = dest;
            transform.flag |= TransformComponent.ROTATION;
        }
    }

    private _setTrigger(animator: Laya.Animator, name: AnimatorTrigger) {
        animator.setParamsTrigger(name);
    }

    private _clearTrigger(animator: Laya.Animator, name: AnimatorTrigger) {
        const id = Laya.AnimatorStateCondition.conditionNameToID(name);
        animator.animatorParams[id] = false;
    }

    // 加载小兵
    private _loadSoldiers(troop: TroopComponent) {
        const leaderTransform = troop.getComponent(TransformComponent)!;
        for (let i = 0; i < formation.length; i++) {
            const offset = formation[i];
            const entity = this.ecs.createEntity();
            const transform = entity.addComponent(TransformComponent);
            transform.position.x = leaderTransform.position.x + offset.x;
            transform.position.y = leaderTransform.position.y + offset.y;
            transform.position.z = leaderTransform.position.z + offset.z;
            transform.flag |= TransformComponent.POSITION;

            const animation = entity.addComponent(AnimationComponent);
            animation.path = PREFAB_SOLDIER;

            const movement = entity.addComponent(MovementComponent);
            movement.positionInterpolation.rate = InterpolationRate.SOLDIER_POSITION;
            movement.rotationInterpolation.rate = InterpolationRate.SOLDIER_ROTATION;

            const soldier = entity.addComponent(SoldierComponent);
            soldier.leader = troop.eid;
            soldier.offset = offset;
            transform.position.cloneTo(soldier.destination);
            troop.soldiers.set(entity.eid, soldier);
        }
    }

    private _startMoveSoldiers(troop: TroopComponent) {
        const leaderMovement = troop.getComponent(MovementComponent)!;
        troop.soldiers.forEach((soldier) => {
            soldier.order = SoliderOrder.MOVE;
        });
    }

    private _stopMoveSoldiers(troop: TroopComponent) {
        troop.soldiers.forEach((soldier) => {
            soldier.order = SoliderOrder.IDLE;
        });
    }

    calcSoldierPosition(troop: TroopComponent, solider: SoldierComponent, out: Laya.Vector3) {
        const offset = solider.offset;

        // 在主角路径上查找合适的点
        const len = troop.positions.length;
        const latestIndex = troop.latestIndex;
        let dis = Math.abs(offset.x);
        let p0: TrackVector3 = troop.positions[latestIndex];
        let p1!: TrackVector3;
        for (let i = 1; i < len; i++) {
            p0 = troop.positions[(i + latestIndex - 1) % len];
            p1 = troop.positions[(i + latestIndex) % len];
            dis -= Math.abs(p0.offset);
            if (dis <= 0) {
                break;
            }
        }

        // 二维空间中, 一个向量(x, y)的垂直向量是(-y, x)
        const dir = Pool.obtain(Laya.Vector3);
        dir.set(-(p0.z - p1.z), 0, p0.x - p1.x);
        dir.normalize();
        out.x = p1.x + dir.x * offset.z;
        out.y = p1.y;
        out.z = p1.z + dir.z * offset.z;
        Pool.free(dir);

        // 检查
        const transform = solider.getComponent(TransformComponent)!;
        const leaderDir = Pool.obtain(Laya.Vector3);
        const soldierDir = Pool.obtain(Laya.Vector3);
        p0.vsub(p1, leaderDir);
        out.vsub(transform.position, soldierDir);
        if (leaderDir.dot(soldierDir) < 0) {
            transform.position.cloneTo(out);
        }
        Pool.free(leaderDir);
        Pool.free(soldierDir);
    }

    startMove(movement: MovementComponent, degree: number, velocity: number) {
        const transform = movement.getComponent(TransformComponent)!;
        const animation = movement.getComponent(AnimationComponent);
        movement.type = MovementType.WHEEL;
        movement.velocity = velocity;
        Tilemap.degree2Speed(degree, velocity, movement.speed);
        this._setRotation(transform, movement.speed.x, movement.speed.z, true);
        if (animation?.animator) {
            this._clearTrigger(animation.animator, AnimatorTrigger.IDLE);
            this._setTrigger(animation.animator, AnimatorTrigger.RUN);
        }
    }

    stopMove(movement: MovementComponent) {
        const animation = movement.getComponent(AnimationComponent);
        movement.type = MovementType.NONE;
        movement.speed.x = 0;
        movement.speed.y = 0;
        movement.speed.z = 0;
        movement.track = null;
        movement.target = null;
        if (animation?.animator) {
            this._clearTrigger(animation.animator, AnimatorTrigger.RUN);
            this._setTrigger(animation.animator, AnimatorTrigger.IDLE);
        }
    }
}
