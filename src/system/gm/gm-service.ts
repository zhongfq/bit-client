import { Service } from "../../core/service";
import proto from "../../def/proto.js";
import { opcode } from "../../def/protocol";
import { NetworkService } from "../network/network-service";

export class GmService extends Service<NetworkService> {
    constructor(network: NetworkService) {
        super(network);
        this.handle(opcode.user.s2c_gm, this._onGm);
    }

    private _onGm(data: proto.user.Is2c_gm) {
        if (data.err) {
            console.log(data.err);
            return;
        }
        console.log(data.msg);
    }

    //-------------------------------------------------------------------------
    // RPC
    //-------------------------------------------------------------------------
    async requestGM(cmd: string) {
        return await this._network.call(proto.user.c2s_gm.create({ cmd: cmd }), proto.user.s2c_gm);
    }
}
