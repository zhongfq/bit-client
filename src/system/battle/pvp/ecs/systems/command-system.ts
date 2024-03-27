import { app } from "../../../../../app";
import { Callback } from "../../../../../core/dispatcher";
import * as ecs from "../../../../../core/ecs";
import { Pool } from "../../../../../core/pool";
import { formation } from "../../../../../def/formation";
import proto from "../../../../../def/proto";
import { opcode } from "../../../../../def/protocol";
import { WorldConf } from "../../../../../def/world";
import { PvpContext } from "../../pvp-context";
import { MovementComponent, TransformComponent } from "../components/movement-component";
import { OwnerComponent } from "../components/owner-component";
import {
    BoardComponent,
    ElementAnimation,
    ElementComponent,
    TroopComponent,
} from "../components/render-component";

export class CommandSystem extends ecs.System {
    public declare context: PvpContext;

    public override onCreate() {
        this.handle(opcode.world.notify_actions, this._notifyActions);
        this.handle(opcode.world.notify_roles, this._notifyRoles);
        this.handle(opcode.world.notify_alliances, this._notifyAlliances);
    }

    private handle(op: number, callback: Callback) {
        this.context.on(app.service.network, op, callback, this);
    }

    public override update(dt: number) {}

    private _notifyActions(notify: proto.world.notify_actions) {
        const ACTION = WorldConf.ENTITY_ACTION;
        for (const cmd of notify.actions) {
            if (cmd.action === ACTION.ADD_ENTITY) {
                this._addEntity(cmd.addEntity!.entity as proto.world.Entity);
            } else if (cmd.action === ACTION.DEL_ENTITY) {
                this._delEntity(cmd.delEntity!.eid as number);
            } else if (cmd.action === ACTION.MOVE) {
                this._moveAction(cmd.move as proto.world.MoveAction);
            }
        }
    }

    private _notifyRoles(notify: proto.world.notify_roles) {}

    private _notifyAlliances(notify: proto.world.notify_alliances) {}

    private _addEntity(cmd: proto.world.Entity) {
        if (this.ecs.getEntity(cmd.eid)) {
            console.error(`duplicate add entity: eid=${cmd.eid} etype=${cmd.etype}`);
            return;
        }

        const ETYPE = WorldConf.ENTITY_TYPE;

        const entity = this.ecs.createEntity(cmd.eid);
        entity.etype = cmd.etype;

        const element = entity.addComponent(ElementComponent);
        element.tableId = 10001;
        // element.entityId =

        if (cmd.pos) {
            const data = cmd.pos as proto.world.Position;
            const transform = entity.addComponent(TransformComponent);
            transform.position.x = data.x;
            transform.position.z = data.y;
            transform.flag |= TransformComponent.POSITION;

            if (entity.etype === ETYPE.TROOP) {
                this._adjustOffset(transform.position);
            }
        }

        if (cmd.owner) {
            const data = cmd.owner as proto.world.OwnerComponent;
            const owner = entity.addComponent(OwnerComponent);
            owner.aid = data.aid;
            owner.rid = data.rid;
            owner.isRobot = data.isRobot;
            owner.roleName = data.roleName;
            owner.allianceName = data.allianceName;
        }

        if (cmd.troop) {
            const data = cmd.troop as proto.world.TroopComponent;
            const troop = entity.addComponent(TroopComponent);
            troop.formation = formation;
            troop.heroId = data.heroId;
            entity.addComponent(MovementComponent);
        }

        if (cmd.move) {
            this._moveAction(
                proto.world.MoveAction.create({
                    eid: entity.eid,
                    path: cmd.move.path,
                    speed: cmd.move.speed,
                    curPos: cmd.pos,
                    startMs: cmd.move.startMs,
                })
            );
        }

        if (entity.etype === ETYPE.CITY) {
            const board = entity.addComponent(BoardComponent);
            board.textureKey = "map_biulding_castle01";
        } else if (entity.etype === ETYPE.TROOP) {
            //
        }
    }

    private _delEntity(eid: number) {
        this.ecs.removeEntity(eid);
    }

    private _moveAction(cmd: proto.world.MoveAction) {
        const element = this._findElement(cmd.eid);
        if (element && cmd.path.length > 1) {
            const transform = element.transform;
            const movement = element.movement;
            transform.position.x = cmd.curPos?.x ?? 0;
            transform.position.z = cmd.curPos?.y ?? 0;
            this._adjustOffset(transform.position);
            transform.flag |= TransformComponent.POSITION;
            movement.speed = cmd.speed;
            movement.startTime = cmd.startMs / 1000;
            Pool.free(movement.paths);
            cmd.path.forEach((p) => {
                const pos = Pool.obtain(Laya.Vector3);
                this._adjustOffset(pos.set(p.x ?? 0, 0, p.y ?? 0));
                movement.paths.push(pos);
            });
            movement.index = 0;
            movement.flag |= MovementComponent.UPDATE;

            this.playAnim(cmd.eid, ElementAnimation.RUN);
        }
    }

    private _adjustOffset(pos: Laya.Vector3): Laya.Vector3 {
        pos.x -= 0.5;
        pos.z -= 0.5;
        return pos;
    }

    private _findElement(eid: number) {
        const element = this.ecs.getComponent(eid, ElementComponent);
        if (!element) {
            console.warn(`not found entity: ${eid}`);
        }
        return element;
    }

    public playAnim(eid: number, name: ElementAnimation) {
        const element = this._findElement(eid);
        if (!element) {
            return;
        }

        const troop = element.getComponent(TroopComponent);
        if (troop) {
            for (const animator of troop.animators) {
                switch (name) {
                    case ElementAnimation.ATTACK: {
                        console.log("TODO: play attack");
                        break;
                    }
                    case ElementAnimation.IDLE:
                        animator.play("idle");
                        break;
                    case ElementAnimation.RUN: {
                        animator.play("run");
                        break;
                    }
                }
            }
        }
    }
}
