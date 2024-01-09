import { Service } from "../../core/service";
import proto from "../../def/proto.js";
import { opcode } from "../../def/protocol";
import { Network } from "../network/network";

export class WarService extends Service<Network> {
    constructor(network: Network) {
        super(network);
    }

    // ------------------------------------------------------------------------
    // rpc call(war.proto)
    // ------------------------------------------------------------------------
    async load(warUid: number) {
        return await this._network.call(
            proto.war.c2s_load.create({ warUid: warUid }),
            proto.war.s2c_load
        );
    }

    async ready(warUid: number) {
        return await this._network.call(
            proto.war.c2s_ready.create({ warUid: warUid }),
            proto.war.s2c_ready
        );
    }
}
