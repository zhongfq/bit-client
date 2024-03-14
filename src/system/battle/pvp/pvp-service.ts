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
}
