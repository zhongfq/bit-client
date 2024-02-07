import { Service } from "../../core/service";
import { errcode, opcode } from "../../def/protocol";
import proto from "../../def/proto";
import { NetworkService } from "../network/network-service";
import { app } from "../../app";
import { ui } from "../../misc/ui";
import { MoneyVo } from "../../misc/vo/money/money-vo";
export class UserService extends Service<NetworkService> {
    static readonly PROFILE_UPDATE = "profile-update";
    static readonly MONEY_UPDATE = "money-update";
    uid: number = 0;
    rid: number = 0;
    monye: Map<number, MoneyVo> = new Map<number, MoneyVo>();
    profileInfo!: proto.profile.ProfileInfo;

    constructor(network: NetworkService) {
        super(network);
        this.handle(opcode.user.s2c_login, this._onLogin);
        this.handle(opcode.money.s2c_load, this._onLoadMonye);
        this.handle(opcode.profile.s2c_load, this._onLoadProfile);
        this.handle(opcode.money.notify_items, this._onMoneyNotify); //资源信息广播
        this.handle(opcode.profile.notify_profile, this._onProfileNotify);
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
            for (const item of data.items) {
                const vo = new MoneyVo();
                vo.initByCmd(item as proto.money.MoneyItem);
                this.monye.set(item.id!, vo);
            }
            this.event(UserService.MONEY_UPDATE);
        }
    }

    private _onLoadProfile(data: proto.profile.s2c_load) {
        if (data.err === errcode.OK) {
            this.profileInfo = data.profile as proto.profile.ProfileInfo;
        }
    }

    private _onMoneyNotify(data: proto.money.notify_items) {
        for (const item of data.items) {
            const vo = new MoneyVo();
            vo.initByCmd(item as proto.money.MoneyItem);
            this.monye.set(item.id!, vo);
        }
    }

    private _onProfileNotify(data: proto.profile.notify_profile) {
        this.profileInfo = data.profile as proto.profile.ProfileInfo;

        this.event(UserService.PROFILE_UPDATE);
    }

    private async _goMainScen() {
        app.ui.replace(ui.LOADING_SCENE);
    }

    async loadMonye() {
        return await this._network.call(proto.money.c2s_load.create(), proto.money.s2c_load);
    }

    async loadProfile() {
        return await this._network.call(proto.profile.c2s_load.create(), proto.profile.s2c_load);
    }
}
