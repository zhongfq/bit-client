import { IVector2Like, IVector3Like } from "../../../core/laya";
import { Service } from "../../../core/service";
import proto from "../../../def/proto";
import { NetworkService } from "../../network/network-service";

export class PvpService extends Service<NetworkService> {
    public constructor(network: NetworkService) {
        super(network);
    }

    // ------------------------------------------------------------------------
    // rpc call
    // ------------------------------------------------------------------------
    public async requestLoad() {
        return await this._network.call(proto.world.c2s_load.create(), proto.world.s2c_load);
    }

    public async requestChangeViewport(viewport: IVector3Like) {
        return await this._network.call(
            proto.world.c2s_change_viewport.create({
                pos: { x: viewport.x, y: viewport.z },
            }),
            proto.world.s2c_change_viewport
        );
    }

    public async requestTroopMoveTo(troopEid: number, dest: IVector2Like) {
        return await this._network.call(
            proto.world.c2s_troop_move_to.create({
                troopEid: troopEid,
                dstPos: dest,
            }),
            proto.world.s2c_troop_move_to
        );
    }
}
