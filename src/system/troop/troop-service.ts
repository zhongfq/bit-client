import { Service } from "../../core/service";
import proto from "../../def/proto";
import { errcode, opcode } from "../../def/protocol";
import { NetworkService } from "../network/network-service";

export class TroopService extends Service<NetworkService> {
    public readonly list: proto.troop.ITroop[] = [];

    public constructor(network: NetworkService) {
        super(network);

        this.handle(opcode.troop.s2c_load, this._onLoad);
    }

    private _onLoad(data: proto.troop.s2c_load) {
        if (data.err === errcode.OK) {
            this.list.length = 0;
            data.troopList.forEach((v) => {
                this.list.push(v);
            });
        }
    }

    // ------------------------------------------------------------------------
    // rpc call
    // ------------------------------------------------------------------------
    public async requestLoad() {
        return await this._network.call(proto.troop.c2s_load.create(), proto.troop.s2c_load);
    }
}
