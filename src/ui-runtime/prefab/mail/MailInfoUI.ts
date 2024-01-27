const { regClass } = Laya;
import { MailInfoUIBase } from "./MailInfoUI.generated";
import proto from "../../../def/proto";
import { MailRow } from "../../../def/table";
import { TableUtil } from "../../../system/table/table-util";
import { app } from "../../../app";
import { Util } from "../../../core/utils/util";

@regClass()
export class MailInfoUI extends MailInfoUIBase {
    oepnData!: proto.mail.MailInfo; //界面打开数据
    refData!: MailRow; //配置表数据
    rewards!: proto.bag.IItem[]; //奖励数据
    open(closeOther?: boolean | undefined, param?: any): void {
        this.oepnData = param;
        if (this.oepnData.id) {
            this.refData = TableUtil.getRef(app.service.table.mail, {
                id: this.oepnData.id,
            }) as MailRow;
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
