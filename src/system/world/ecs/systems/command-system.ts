import { app } from "../../../../app";
import { Callback } from "../../../../core/dispatcher";
import { ecs } from "../../../../core/ecs";
import proto from "../../../../def/proto";
import { opcode } from "../../../../def/protocol";
import { WorldConf } from "../../../../def/world";
import { WorldContext } from "../../world-context";
import { BattleComponent } from "../components/battle-component";
import { CameraComponent } from "../components/camera-component";
import {
    MovementComponent,
    MovementType,
    TransformComponent,
} from "../components/movement-component";
import { AnimationComponent } from "../components/render-component";
import { Tilemap } from "../components/tilemap-component";
import { OwnerComponent } from "../components/troop-component";

enum AnimatorTrigger {
    IDLE = "idle",
    RUN = "run",
    ATTACK = "attack",
}

export class CommandSystem extends ecs.System {
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
                    // this._stopAttack(cmd.battleStop!.srcEid!);
                    // this._stopAttack(cmd.battleStop!.dstEid!);
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
            entity.addComponent(MovementComponent);
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
            positionInterpolation.ratio = 0;
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
        const transform = entity.getComponent(TransformComponent)!;
        const animation = entity.getComponent(AnimationComponent);
        if (data.speed === 0 && data.path.length === 0) {
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
        } else if (data.path.length > 0) {
        } else if (data.speed > 0) {
            movement.type = MovementType.WHEEL;
            movement.velocity = data.speed;

            Tilemap.degree2Speed(data.degree, data.speed, movement.speed);
            this._setRotation(transform, movement.speed.x, movement.speed.z, true);
            // const rad = Math.atan2(-movement.speed.z, movement.speed.x);
            // transform.rotation = (rad * 180) / Math.PI;
            // transform.flag |= TransformComponent.ROTATION;
            // movement.rotation.to = data.degree;
            // movement.rotation.ration = 1;

            if (animation?.animator) {
                this._clearTrigger(animation.animator, AnimatorTrigger.IDLE);
                this._setTrigger(animation.animator, AnimatorTrigger.RUN);
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
            movement.rotationInterpolation.ratio = 0;
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
}
