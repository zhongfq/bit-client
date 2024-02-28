import { app } from "../../../app";
import proto from "../../../def/proto";
import { ItemTable, MoneyRow } from "../../../def/table";
import { TableUtil } from "../../../system/table/table-util";
import { GoodsVo } from "../goods/goods-vo";

/**
 * Item
 * 道具
 */
export class MoneyVo extends GoodsVo<MoneyRow, proto.money.MoneyItem> {
    declare refTable: ItemTable;

    //#region 重载
    get refId(): number {
        return this._ref ? this._ref.id : 0;
    }

    get id(): number {
        if (this._cmd) {
            return Number(this._cmd.id);
        }
        return 0;
    }

    getTableRowByCmd(cmd: proto.money.MoneyItem): MoneyRow | undefined {
        return TableUtil.getRow<MoneyRow>(app.service.table.money, { id: cmd.id });
    }

    get goodsType(): number {
        return 0; //this.ref.type;
    }

    get desc(): string {
        return ""; //this.ref.desc;
    }

    get name(): string {
        return this._ref ? this._ref.name : "";
    }

    protected override onGetNumber(): number {
        if (this._cmd) {
            return this._cmd.num ? this._cmd.num : 0;
        }
        return 0;
    }

    get iconUrl(): string {
        return this._ref ? `resources/atlas/iconSmall/${this._ref.icon}.png` : "";
    }

    get quality(): number {
        throw new Error("Method not implemented.");
    }

    get qualitySkin(): string {
        throw new Error("Method not implemented.");
    }
    //#endregion
}
