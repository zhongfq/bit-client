import { Service } from "../../core/service";
import { errcode, opcode } from "../../def/protocol";
import proto from "../../def/proto.js";
import { NetworkService } from "../network/network-service";

export const LOGIN_USERNAME = "login:username";

export class MailService extends Service<NetworkService> {
    private _mail: Map<number, proto.mail.IMailInfo> = new Map<number, proto.mail.IMailInfo>();
    constructor(network: NetworkService) {
        super(network);
        this.handle(opcode.mail.s2c_load, this._onLoad);
        this.handle(opcode.mail.s2c_delete_mails, this._onDeleteMails);
        this.handle(opcode.mail.s2c_receive_reward, this._onReceiveReward);
        this.handle(opcode.mail.s2c_read, this._onRead);
        this.handle(opcode.mail.notify_new_mails, this._onNotifyNewMails);
    }
    private _onNotifyNewMails(data: proto.mail.notify_new_mails) {}
    private _onLoad(data: proto.mail.s2c_load) {
        if (data.err === errcode.OK) {
            for (let item of data.mails) {
                this._mail.set(item.id!, item as proto.mail.IMailInfo);
            }
        }
    }
    private _onDeleteMails(data: proto.mail.s2c_delete_mails) {
        if (data.err === errcode.OK) {
        }
    }
    private _onReceiveReward(data: proto.mail.s2c_receive_reward) {
        if (data.err === errcode.OK) {
        }
    }
    private _onRead(data: proto.mail.s2c_read) {
        if (data.err === errcode.OK) {
        }
    }
    public get mails() {
        return this._mail;
    }
    // ------------------------------------------------------------------------
    // rpc call
    // ------------------------------------------------------------------------
    async load() {
        return await this._network.call(proto.mail.c2s_load.create(), proto.mail.s2c_load);
    }
    async requestDeleteMails(data: proto.mail.Ic2s_delete_mails) {
        return await this._network.call(
            proto.mail.c2s_delete_mails.create(data),
            proto.mail.s2c_delete_mails
        );
    }
    async requestRead(data: proto.mail.Ic2s_read) {
        return await this._network.call(proto.mail.c2s_read.create(data), proto.mail.s2c_read);
    }
    async requestReceiveReward(data: proto.mail.Ic2s_receive_reward) {
        return await this._network.call(
            proto.mail.c2s_receive_reward.create(data),
            proto.mail.s2c_receive_reward
        );
    }
}
