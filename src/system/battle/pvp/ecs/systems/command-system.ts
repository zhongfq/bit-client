import { app } from "../../../../../app";
import { Callback } from "../../../../../core/dispatcher";
import * as ecs from "../../../../../core/ecs";
import { formation } from "../../../../../def/formation";
import proto from "../../../../../def/proto";
import { opcode } from "../../../../../def/protocol";
import { WorldConf } from "../../../../../def/world";
import { PvpContext } from "../../pvp-context";
import { MovementComponent, TransformComponent } from "../components/movement-component";
import { OwnerComponent } from "../components/owner-component";
import { BoardComponent, ElementComponent, TroopComponent } from "../components/render-component";

export class CommandSystem extends ecs.System {
    public declare context: PvpContext;

    public override onCreate() {
        this.handle(opcode.world.notify_actions, this._notifyActions);
        this.handle(opcode.world.notify_entities, this._notifyEntities);
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

    private _notifyEntities(notify: proto.world.notify_entities) {
        for (const eid of notify.leaveList) {
            this._delEntity(eid);
        }
        for (const entity of notify.enterList) {
            this._addEntity(entity as proto.world.Entity);
        }
    }

    private _notifyRoles(notify: proto.world.notify_roles) {}

    private _notifyAlliances(notify: proto.world.notify_alliances) {}

    private _addEntity(cmd: proto.world.Entity) {
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
        if (element) {
            const transform = element.transform;
            const movement = element.movement;
            transform.position.x = cmd.curPos?.x ?? 0;
            transform.position.z = cmd.curPos?.y ?? 0;
            movement.speed = cmd.speed;
            movement.startTime = cmd.startMs / 1000;
            movement.next.cursor = 0;
            movement.current.cursor = 0;
            cmd.path.forEach((p) => {
                const pos = Laya.Pool.obtain(Laya.Vector3);
                pos.set(p.x ?? 0, 0, p.y ?? 0);
                movement.paths.push(pos);
            });
        }
    }

    private _findElement(eid: number) {
        const element = this.ecs.getComponent(eid, ElementComponent);
        if (!element) {
            console.warn(`not found entity: ${eid}`);
        }
        return element;
    }
}
