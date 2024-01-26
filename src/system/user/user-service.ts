import { Service } from "../../core/service";
import { errcode, opcode } from "../../def/protocol";
import proto from "../../def/proto";
import { NetworkService } from "../network/network-service";
import { app } from "../../app";
import { ui } from "../../misc/ui";

export class UserService extends Service<NetworkService> {
    uid: number = 0;
    rid: number = 0;
    monye: Map<number, proto.money.MoneyItem> = new Map<number, proto.money.MoneyItem>();
    profileInfo!: proto.profile.ProfileInfo;

    constructor(network: NetworkService) {
        super(network);
        this.handle(opcode.user.s2c_login, this._onLogin);
        this.handle(opcode.money.s2c_load, this._onLoadMonye);
        this.handle(opcode.money.s2c_load, this._onLoadProfile);
    }

    private _onLogin(data: proto.user.s2c_login) {
        if (data.err === errcode.OK) {
            if (!data.role) {
                console.log("response error for request 'c2s_login'");
                return;
            }
            const role = data.role as proto.user.RoleInfo;
            this.rid = role.rid as number;
            this._goMainScen();
        }
    }

    private _onLoadMonye(data: proto.money.s2c_load) {
        if (data.err === errcode.OK) {
            for (let item of data.items) {
                this.monye.set(item.id!, item as proto.money.MoneyItem);
            }
        }
    }

    private _onLoadProfile(data: proto.profile.s2c_load) {
        if (data.err === errcode.OK) {
            this.profileInfo = data.profile as proto.profile.ProfileInfo;
        }
    }

    private async _goMainScen() {
        await app.service.bag.load({ bagId: 1 });
        await app.service.task.load({ taskType: 2 });
        await app.service.mail.load();
        app.ui.replace(ui.HOME_SCENE);
    }

    async loadMonye() {
        return await this._network.call(proto.money.c2s_load.create(), proto.money.s2c_load);
    }

    async loadProfile() {
        return await this._network.call(proto.profile.c2s_load.create(), proto.profile.s2c_load);
    }
}
