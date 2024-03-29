import { app } from "../../../app";
import { ItemTable } from "../../../def/table";
import { chat, task } from "../../../def/proto";
import { TableUtil } from "../../../system/table/table-util";
import { GoodsVo } from "../goods/goods-vo";
import { VO } from "../vo-base/vo";
import { MoneyRow } from "../../../def/table";

/**
 * Item
 * 道具
 */
export class ChatRoleVo extends VO<any, chat.ChatRole> {
    public override get id(): number {
        if (this._cmd) {
            return Number(this._cmd.rid);
        }
        return 0;
    }

    public getTableRowByCmd(cmd: chat.ChatRole): undefined {
        return undefined;
    }

    protected onGetNumber(): number {
        return 0;
    }
    //#endregion
}
