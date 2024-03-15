import { app } from "../../../../../app";
import { Callback } from "../../../../../core/dispatcher";
import * as ecs from "../../../../../core/ecs";
import proto from "../../../../../def/proto";
import { opcode } from "../../../../../def/protocol";
import { WorldConf } from "../../../../../def/world";
import { PvpContext } from "../../pvp-context";
import { TransformComponent } from "../components/movement-component";
import { OwnerComponent } from "../components/owner-component";
import { BoardComponent, ElementComponent } from "../components/render-component";

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

    private _notifyActions(notify: proto.world.notify_actions) {}

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

        if (entity.etype === ETYPE.CITY) {
            const board = entity.addComponent(BoardComponent);
            // board.element = new TMDynamicElement();
        }
    }

    private _delEntity(eid: number) {}
}
