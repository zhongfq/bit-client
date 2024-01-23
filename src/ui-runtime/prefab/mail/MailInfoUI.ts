const { regClass } = Laya;
import { MailInfoUIBase } from "./MailInfoUI.generated";
import proto from "../../../def/proto.js";
import { Mail } from "../../../def/data";
import { DataUtil } from "../../../system/data/data-util";
import { app } from "../../../app";
import { Util } from "../../../core/untils/Util";

@regClass()
export class MailInfoUI extends MailInfoUIBase {
    oepnData!: proto.mail.MailInfo; //界面打开数据
    refData!: Mail; //配置表数据
    rewards!: proto.bag.IItem[]; //奖励数据
    open(closeOther?: boolean | undefined, param?: any): void {
        this.oepnData = param;
        if (this.oepnData.id) {
            this.refData = DataUtil.getRef(app.service.data.mailTable, {
                id: this.oepnData.id,
            }) as Mail;
            if (this.refData.reward) {
                this.rewards = Util.toBagItemArray(this.refData.reward);
            }
        } else {
            if (this.oepnData.reward && this.oepnData.reward?.length > 0) {
                this.rewards = this.oepnData.reward;
            }
        }
        super.open(closeOther, param);
    }
}
