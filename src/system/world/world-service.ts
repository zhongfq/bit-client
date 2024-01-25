import { LayaExt } from "../../core/laya";
import { Service } from "../../core/service";
import proto from "../../def/proto";
import { NetworkService } from "../network/network-service";

export class WorldService extends Service<NetworkService> {
    constructor(network: NetworkService) {
        super(network);
    }

    // ------------------------------------------------------------------------
    // RPC
    // ------------------------------------------------------------------------
    async requestTroopLoad() {
        return await this._network.call(proto.troop.c2s_load.create({}), proto.troop.s2c_load);
    }

    async requestTroopMoveTo(eid: number, dest: LayaExt.IVector2Like) {
        return await this._network.call(
            proto.world.c2s_troop_move_to.create({ troopEid: eid, dstPos: dest }),
            proto.world.s2c_troop_move_to
        );
    }

    async requestTroopMoveBy(eid: number, degree: number) {
        return await this._network.call(
            proto.world.c2s_troop_move_by.create({ troopEid: eid, degree: degree }),
            proto.world.s2c_troop_move_by
        );
    }

    async requestTroopMoveStop(eid: number) {
        return await this._network.call(
            proto.world.c2s_troop_move_stop.create({ troopEid: eid }),
            proto.world.s2c_troop_move_stop
        );
    }

    async requestChangeViewport(pos: LayaExt.IVector2Like) {
        return await this._network.call(
            proto.world.c2s_change_viewport.create({ pos: pos }),
            proto.world.s2c_change_viewport
        );
    }
}
