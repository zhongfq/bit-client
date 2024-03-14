import { app } from "../../../../../app";
import { Callback } from "../../../../../core/dispatcher";
import * as ecs from "../../../../../core/ecs";
import proto from "../../../../../def/proto";
import { opcode } from "../../../../../def/protocol";
import { PvpContext } from "../../pvp-context";

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

    private _addEntity(data: proto.world.Entity) {}

    private _delEntity(eid: number) {}
}
