const { regClass } = Laya;
import { MailInfoUIBase } from "./MailInfoUI.generated";
import proto from "../../../def/proto";
import { TableUtil } from "../../../system/table/table-util";
import { app } from "../../../app";
import { Util } from "../../../core/utils/util";
import { GeneratedMailRow } from "../../../def/table.generated";

@regClass()
export class MailInfoUI extends MailInfoUIBase {
    public oepnData!: proto.mail.MailInfo; //界面打开数据
    public refData!: GeneratedMailRow; //配置表数据
    public rewards!: proto.bag.IItem[]; //奖励数据

    public override open(closeOther?: boolean | undefined, param?: any): void {
        this.oepnData = param;
        if (this.oepnData.id) {
            this.refData = TableUtil.getRow(app.service.table.mail, {
                id: this.oepnData.id,
            }) as GeneratedMailRow;
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
