import { Constructor } from "../../core/dispatcher";
import { Service } from "../../core/service";
import proto from "../../def/proto.js";
import { errcode, opcode } from "../../def/protocol";
import { NetworkService } from "../network/network-service";

export class GmService extends Service<NetworkService> {
    constructor(network: NetworkService) {
        super(network);
        this.handle(opcode.user.s2c_gm, this._onGm);
    }
    private _onGm(data: proto.user.Is2c_gm){
        if(data.err){
            console.log(data.err);
            return;
        }
        console.log(data.msg);
    }
    public callGm(data:proto.user.Ic2s_gm){
        this._network.call(proto.user.c2s_gm.create(data),proto.user.c2s_gm);
    }

}
