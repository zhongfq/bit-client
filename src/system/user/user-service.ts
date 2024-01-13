import { Service } from "../../core/service";
import { errcode, opcode } from "../../def/protocol";
import proto from "../../def/proto.js";
import { NetworkService } from "../network/network-service";

const LOGIN_USERNAME = "login:username";

export class UserService extends Service<NetworkService> {
    uid: number = 0;
    rid: number = 0;

    constructor(network: NetworkService) {
        super(network);
        this.handle(opcode.connection.connected, this.onConnected);
        this.handle(opcode.user.s2c_login, this._onLogin);
    }

    private _onLogin(data: proto.user.s2c_login) {
        if (data.err === errcode.OK) {
            if (!data.role) {
                console.log("response error for request 'c2s_login'");
                return;
            }
            const role = data.role as proto.user.RoleInfo;
            this.rid = role.rid as number;
        }
    }

    private async onConnected() {
        const data = await this.login(this.username);
        if (data.err === errcode.ROLE_NOT_EXIST) {
        //     // app.ui.toast(errmsg[data.err]);
        }
        
    }

    get username() {
        return Laya.LocalStorage.getItem(LOGIN_USERNAME) || "";
    }

    set username(value: string) {
        Laya.LocalStorage.setItem(LOGIN_USERNAME, value);
    }

    // ------------------------------------------------------------------------
    // rpc call
    // ------------------------------------------------------------------------
    async login(username: string) {
        return await this._network.call(
            proto.user.c2s_login.create({
                uid: username,
            }),
            proto.user.s2c_login
        );
    }
}
