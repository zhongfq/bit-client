import { Service } from "../../core/service";
import { user } from "../../def/proto";
import { errcode, opcode } from "../../def/protocol";
import { NetworkService } from "../network/network-service";

export const LOGIN_USERNAME = "login:username";
export const LOGIN_URL = "login:url";

export class LoginService extends Service<NetworkService> {
    constructor(network: NetworkService) {
        super(network);

        this.handle(opcode.connection.connected, this.onConnected);
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

    get url() {
        return Laya.LocalStorage.getItem(LOGIN_URL) || "";
    }

    set url(value: string) {
        Laya.LocalStorage.setItem(LOGIN_URL, value);
    }

    // ------------------------------------------------------------------------
    // rpc call
    // ------------------------------------------------------------------------
    async login(username: string) {
        return await this._network.call(
            user.c2s_login.create({
                uid: username,
            }),
            user.s2c_login
        );
    }
}
