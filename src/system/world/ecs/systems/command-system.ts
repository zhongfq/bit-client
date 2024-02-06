import { app } from "../../../../app";
import { Callback } from "../../../../core/dispatcher";
import { ecs } from "../../../../core/ecs";
import { IVector3Like } from "../../../../core/laya";
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

enum AnimatorParam {
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

const attackFormation: IVector3Like[] = [];

const PREFAB_SOLDIERS = [
    "resources/prefab/battle/roles/mc03.lh",
    "resources/prefab/battle/roles/mc04.lh",
];

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
        notify.enterList.sort((a, b) => a.eid! - b.eid!);
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
                case ACTION.BATTLE_START:
                    this._startBattle(cmd.battleStart as proto.world.BattleStartAction);
                    break;
                case ACTION.BATTLE_STOP:
                    this._stopBattle(cmd.battleStop as proto.world.BattleStopAction);
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
            owner.aid = data.aid;
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
            this._loadSoldiers(troop);
        }

        if (cmd.battle) {
            const data = cmd.battle as proto.world.BattleComponent;
            const battle = entity.addComponent(BattleComponent);
            battle.battleUid = data.battleUid;
            battle.startTime = data.startTs;
            data.fighterEids.forEach((fightEid) => {
                this._joinBattle(battle.eid, fightEid);
            });
        }

        if (cmd.etype === ENTITY_TYPE.TROOP) {
            // const prop = app.service.data.worldEntityTable.models[cmd.]
        } else {
            console.log(`unhandle entity type: ${cmd.etype}`);
        }
    }

    private _delEntity(eid: number) {
        const entity = this.ecs.getEntity(eid);
        if (entity) {
            const troop = entity.getComponent(TroopComponent);
            if (troop) {
                troop.soldiers.forEach((solider) => {
                    this.ecs.removeEntity(solider.eid);
                });
            }
            this.ecs.removeEntity(eid);
        }
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
            animation.animator.setParamsTrigger(AnimatorParam.ATTACK);
            const movement = animation.getComponent(MovementComponent)!;
            if (movement.type === MovementType.NONE) {
                animation.animator.setParamsBool(AnimatorParam.IDLE, true);
                animation.animator.setParamsBool(AnimatorParam.RUN, false);
            } else {
                animation.animator.setParamsBool(AnimatorParam.IDLE, false);
                animation.animator.setParamsBool(AnimatorParam.RUN, true);
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

    private _startBattle(action: proto.world.BattleStartAction) {
        this._joinBattle(action.battleEid, action.fighterEid);
    }

    private _stopBattle(action: proto.world.BattleStopAction) {
        const entity = this.ecs.getEntity(action.fighterEid);
        if (entity) {
            const animation = entity.getComponent(AnimationComponent)!;
            const troop = entity.getComponent(TroopComponent)!;
            troop.attackTarget = 0;
            troop.soldiers.forEach((soldier) => {
                soldier.attackInfo.target = null;
                soldier.order = SoliderOrder.RETURN;
            });
            const movement = entity.getComponent(MovementComponent)!;
            if (movement.type === MovementType.WHEEL) {
                const transform = animation.getComponent(TransformComponent)!;
                transform.rotation = MathUtil.toDegree(
                    Math.atan2(-movement.speed.z, movement.speed.x)
                );
                transform.flag |= TransformComponent.ROTATION;
            }
        } else {
            console.warn(`entity not found in 'stop battle': ${action.fighterEid}`);
        }

        const battle = this.ecs.getComponent(action.battleEid, BattleComponent);
        if (battle) {
            const idx = battle.fighterEids.indexOf(action.fighterEid);
            if (idx >= 0) {
                battle.fighterEids.splice(idx, 1);
            }
        } else {
            console.warn(`battle not found in 'stop battle': ${action.battleEid}`);
        }
    }

    private _findAttackTarget(battle: BattleComponent, fightEid: number) {
        const fighterOwner = this.ecs.getComponent(fightEid, OwnerComponent);
        if (fighterOwner) {
            for (let i = 0; i < battle.fighterEids.length - 1; i++) {
                const target = this.ecs.getComponent(battle.fighterEids[i], OwnerComponent);
                if (target && target.aid !== fighterOwner.aid) {
                    return target.getComponent(TroopComponent)!;
                }
            }
        }
        return null;
    }

    private _joinBattle(battleEid: number, fighterEid: number) {
        const battle = this.ecs.getComponent(battleEid, BattleComponent);
        const fighter = this.ecs.getComponent(fighterEid, TroopComponent);

        if (!battle) {
            console.warn(`join battle: battle not found: ${battleEid}`);
            return;
        }

        if (!fighter) {
            console.warn(`join battle: entity not found: ${fighterEid}`);
            return;
        }

        if (battle.fighterEids.indexOf(fighterEid) >= 0) {
            console.warn(`join battle: fighter alread exist: ${fighterEid}`);
            return;
        }

        battle.fighterEids.push(fighterEid);
        if (battle.fighterEids.length > 1) {
            const target = this._findAttackTarget(battle, fighterEid);
            if (target && target.soldiers.length && fighter.soldiers.length) {
                this._fight(fighter, target);
            }
        }
    }

    private _fight(troop1: TroopComponent, troop2: TroopComponent) {
        if (troop2.attackTarget) {
        } else {
            troop1.attackTarget = troop2.eid;
            troop2.attackTarget = troop1.eid;
            const transform1 = troop1.getComponent(TransformComponent)!;
            const transform2 = troop2.getComponent(TransformComponent)!;
            const x = (transform1.position.x + transform2.position.x) / 2;
            const z = (transform1.position.z + transform2.position.z) / 2;
            const count = Math.max(troop1.soldiers.length, troop2.soldiers.length);
            for (let i = 0; i < count; i++) {
                const sx = x + (Math.random() - 0.5) * Tilemap.RATE * 1.2;
                const sz = z + (Math.random() - 0.5) * Tilemap.RATE * 1.2;
                const solider1 = troop1.soldiers[i] || troop1.soldiers[0];
                const solider2 = troop2.soldiers[i] || troop2.soldiers[0];
                const rad = Math.random() * Math.PI;
                const px = Math.cos(rad) * 0.3 * Tilemap.RATE;
                const pz = Math.sin(rad) * 0.3 * Tilemap.RATE;
                if (!solider1.attackInfo.target) {
                    solider1.attackInfo.target = solider2.eid;
                    solider1.attackInfo.position.x = sx + px;
                    solider1.attackInfo.position.z = sz + pz;
                    solider1.order = SoliderOrder.RUSH;
                }
                if (!solider2.attackInfo.target) {
                    solider2.attackInfo.target = solider1.eid;
                    solider2.attackInfo.position.x = sx - px;
                    solider2.attackInfo.position.z = sz - pz;
                    solider2.order = SoliderOrder.RUSH;
                }
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

    private _clearTrigger(animator: Laya.Animator, name: AnimatorParam) {
        const id = Laya.AnimatorStateCondition.conditionNameToID(name);
        animator.animatorParams[id] = false;
    }

    // 加载小兵
    private _loadSoldiers(troop: TroopComponent) {
        const leaderTransform = troop.getComponent(TransformComponent)!;
        const aid = troop.getComponent(OwnerComponent)!.aid;
        for (let i = 0; i < formation.length; i++) {
            const offset = formation[i];
            const entity = this.ecs.createEntity();
            const transform = entity.addComponent(TransformComponent);
            transform.position.x = leaderTransform.position.x + offset.x;
            transform.position.y = leaderTransform.position.y + offset.y;
            transform.position.z = leaderTransform.position.z + offset.z;
            transform.flag |= TransformComponent.POSITION;

            const animation = entity.addComponent(AnimationComponent);
            animation.path = PREFAB_SOLDIERS[aid % PREFAB_SOLDIERS.length];

            const movement = entity.addComponent(MovementComponent);
            movement.positionInterpolation.rate = InterpolationRate.SOLDIER_POSITION;
            movement.rotationInterpolation.rate = InterpolationRate.SOLDIER_ROTATION;

            const soldier = entity.addComponent(SoldierComponent);
            soldier.leader = troop.eid;
            soldier.offset = offset;
            troop.soldiers.push(soldier);
        }
    }

    private _startMoveSoldiers(troop: TroopComponent) {
        const leaderMovement = troop.getComponent(MovementComponent)!;
        troop.soldiers.forEach((soldier) => {
            if (soldier.order == SoliderOrder.IDLE) {
                soldier.order = SoliderOrder.MOVE;
            }
        });
    }

    private _stopMoveSoldiers(troop: TroopComponent) {
        troop.soldiers.forEach((soldier) => {
            if (soldier.order == SoliderOrder.MOVE) {
                soldier.order = SoliderOrder.IDLE;
            }
        });
    }

    soldierFight(soldier: SoldierComponent) {
        if (soldier.attackInfo.target) {
            this._towardToTarget(soldier.eid, soldier.attackInfo.target);
            const animation = soldier.animation;
            const movement = soldier.movement;
            if (animation.animator) {
                animation.animator.setParamsTrigger(AnimatorParam.ATTACK);
                if (movement.type === MovementType.NONE) {
                    animation.animator.setParamsBool(AnimatorParam.IDLE, true);
                    animation.animator.setParamsBool(AnimatorParam.RUN, false);
                } else {
                    animation.animator.setParamsBool(AnimatorParam.IDLE, true);
                    animation.animator.setParamsBool(AnimatorParam.RUN, false);
                }
            }
        }
    }

    calcSoldierPosition(troop: TroopComponent, solider: SoldierComponent, out: Laya.Vector3) {
        const animation = troop.animation;
        const transform = troop.transform;
        if (animation.view) {
            out.x = solider.offset.x;
            out.y = solider.offset.y;
            out.z = solider.offset.z;
            animation.view.transform.localToGlobal(out, out);
        } else {
            out.x = transform.position.x + solider.offset.x;
            out.y = transform.position.y + solider.offset.y;
            out.z = transform.position.z + solider.offset.z;
        }
    }

    startMove(movement: MovementComponent, degree: number, velocity: number) {
        const transform = movement.getComponent(TransformComponent)!;
        const animation = movement.getComponent(AnimationComponent);
        movement.type = MovementType.WHEEL;
        movement.velocity = velocity;
        Tilemap.degree2Speed(degree, velocity, movement.speed);
        this._setRotation(transform, movement.speed.x, movement.speed.z, true);
        if (animation?.animator) {
            animation.animator.setParamsBool(AnimatorParam.IDLE, false);
            animation.animator.setParamsBool(AnimatorParam.RUN, true);
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
        Laya.Pool.free(movement.target);
        if (animation?.animator) {
            animation.animator.setParamsBool(AnimatorParam.IDLE, true);
            animation.animator.setParamsBool(AnimatorParam.RUN, false);
        }
    }
}
