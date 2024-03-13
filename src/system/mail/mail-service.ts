import { app } from "../../app";
import { Service } from "../../core/service";
import { Util } from "../../core/utils/util";
import { MailConf } from "../../def/mail";
import proto from "../../def/proto";
import { errcode, opcode } from "../../def/protocol";
import { TableUtil } from "../table/table-util";
import { NetworkService } from "../network/network-service";
import { GeneratedMailRow } from "../../def/table.generated";

interface UpdateMailData {
    type: "add" | "update" | "delete";
    addData?: proto.mail.IMailInfo[];
    updateData?: number[];
    deleteData?: number[];
    mailState?: number;
}
/**
 * @receivedOrRead 已领||没有奖励的已读
 * @readNoReceived 已读未领
 * @unread 未读
 */
export class MailService extends Service<NetworkService> {
    public static readonly MAIL_UPDATE = "mail-update";
    private _mail: Map<number, proto.mail.MailInfo> = new Map<number, proto.mail.MailInfo>();

    public constructor(network: NetworkService) {
        super(network);
        this.handle(opcode.mail.s2c_load, this._onLoad);
        this.handle(opcode.mail.s2c_delete_mails, this._onDeleteMails);
        this.handle(opcode.mail.s2c_receive_reward, this._onReceiveReward);
        this.handle(opcode.mail.s2c_read, this._onRead);
        this.handle(opcode.mail.notify_new_mails, this._onNotifyNewMails);
    }

    //邮件加载回调
    private _onLoad(response: proto.mail.s2c_load) {
        if (response.err === errcode.OK) {
            for (const item of response.mails) {
                this._mail.set(item.uid!, this.creatorMailInfo(item as proto.mail.MailInfo));
            }
        }
    }

    //新增邮件监听
    private _onNotifyNewMails(response: proto.mail.notify_new_mails) {
        this.updateMail({ type: "add", addData: response.mails });
    }

    //创建邮件数据
    private creatorMailInfo(cmdData: proto.mail.MailInfo): proto.mail.MailInfo {
        let cmdMail = new proto.mail.MailInfo();
        let refData!: GeneratedMailRow;
        cmdMail = cmdData;
        if (cmdData.id) {
            refData = TableUtil.getRow(app.service.table.mail, {
                id: Number(cmdData.id),
            }) as GeneratedMailRow;
        }

        if (cmdMail.reward && cmdMail.reward.length > 0) {
            cmdMail.reward = cmdMail.reward as proto.bag.IItem[];
        } else {
            cmdMail.reward = refData.reward ? Util.toBagItemArray(refData.reward) : [];
        }
        cmdMail.content = cmdData.content || refData!.content;
        cmdMail.title = cmdData.title || refData!.title;
        return cmdMail;
    }

    //删除邮件回调
    private _onDeleteMails(
        response: proto.mail.s2c_delete_mails,
        reqest: proto.mail.c2s_delete_mails
    ) {
        if (response.err === errcode.OK) {
            this.updateMail({ type: "delete", deleteData: reqest.mailUids });
        }
    }

    //领取奖励回调
    private _onReceiveReward(
        response: proto.mail.s2c_receive_reward,
        reqest: proto.mail.c2s_receive_reward
    ) {
        if (response.err === errcode.OK) {
            this.updateMail({
                type: "update",
                updateData: reqest.mailUids,
                mailState: 1 << MailConf.MAIL_STATE_BIT.REWARD,
            });
        }
    }

    //读取邮件回调
    private _onRead(response: proto.mail.s2c_read, reqest: proto.mail.c2s_read) {
        if (response.err === errcode.OK) {
            this.updateMail({
                type: "update",
                updateData: reqest.mailUids,
                mailState: 1 << MailConf.MAIL_STATE_BIT.NEW,
            });
        }
    }

    //邮件更新
    private updateMail(data: UpdateMailData) {
        switch (data.type) {
            case "add":
                if (data.addData) {
                    for (const mail of data.addData) {
                        this._mail.set(
                            Number(mail.uid),
                            this.creatorMailInfo(mail as proto.mail.MailInfo)
                        );
                    }
                }
                break;
            case "update":
                if (data.updateData) {
                    for (const id of data.updateData) {
                        const mailData = this._mail.get(id);
                        if (mailData) {
                            mailData.state = Number(mailData.state) ^ Number(data.mailState);
                            this._mail.set(id, mailData);
                        }
                    }
                }
                break;
            case "delete":
                if (data.deleteData) {
                    for (const id of data.deleteData) {
                        this._mail.delete(id);
                    }
                }
                break;
        }
        this.event(MailService.MAIL_UPDATE);
    }

    //获取邮件列表
    public get mails() {
        return this._mail;
    }

    //获取邮件是否已读true:未读
    public getMailIsRead(mailState: number): boolean {
        return (mailState & (1 << MailConf.MAIL_STATE_BIT.NEW)) > 0;
    }

    //获取邮件是否已领取true:未领取
    public getMailIsReward(mailState: number): boolean {
        return (mailState & (1 << MailConf.MAIL_STATE_BIT.REWARD)) > 0;
    }

    // ------------------------------------------------------------------------
    // rpc call
    // ------------------------------------------------------------------------
    //一键领取邮件
    public async oneClickReward() {
        const ids: number[] = [];
        for (const [k, mail] of this._mail) {
            if (
                (mail.reward.length > 0 && this.getMailIsReward(mail.state)) ||
                (mail.reward.length == 0 && this.getMailIsRead(mail.state))
            ) {
                ids.push(Number(mail.uid));
            }
        }
        return await this.requestReceiveReward({ mailUids: ids });
    }

    //一键删除邮件
    public async oneClickDelete() {
        const ids: number[] = [];
        for (const [k, mail] of this._mail) {
            if (
                (mail.reward.length == 0 && !this.getMailIsRead(mail.state)) ||
                (mail.reward.length > 0 && !this.getMailIsReward(mail.state))
            ) {
                ids.push(Number(mail.uid));
            }
        }
        return await this.requestDeleteMails({ mailUids: ids });
    }

    public async load() {
        return await this._network.call(proto.mail.c2s_load.create(), proto.mail.s2c_load);
    }

    public async requestDeleteMails(data: proto.mail.Ic2s_delete_mails) {
        return await this._network.call(
            proto.mail.c2s_delete_mails.create(data),
            proto.mail.s2c_delete_mails
        );
    }

    public async requestRead(data: proto.mail.Ic2s_read) {
        return await this._network.call(proto.mail.c2s_read.create(data), proto.mail.s2c_read);
    }

    public async requestReceiveReward(data: proto.mail.Ic2s_receive_reward) {
        return await this._network.call(
            proto.mail.c2s_receive_reward.create(data),
            proto.mail.s2c_receive_reward
        );
    }
}
