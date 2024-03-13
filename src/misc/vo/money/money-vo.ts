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
    public declare refTable: ItemTable;

    //#region 重载
    public get refId(): number {
        return this._ref ? this._ref.id : 0;
    }

    public get id(): number {
        if (this._cmd) {
            return Number(this._cmd.id);
        }
        return 0;
    }

    public getTableRowByCmd(cmd: proto.money.MoneyItem): MoneyRow | undefined {
        return TableUtil.getRow<MoneyRow>(app.service.table.money, { id: cmd.id });
    }

    public get goodsType(): number {
        return 0; //this.ref.type;
    }

    public get desc(): string {
        return ""; //this.ref.desc;
    }

    public get name(): string {
        return this._ref ? this._ref.name : "";
    }

    protected override onGetNumber(): number {
        if (this._cmd) {
            return this._cmd.num ? this._cmd.num : 0;
        }
        return 0;
    }

    public get iconUrl(): string {
        return this._ref ? `resources/atlas/iconSmall/${this._ref.icon}.png` : "";
    }

    public get quality(): number {
        throw new Error("Method not implemented.");
    }

    public get qualitySkin(): string {
        throw new Error("Method not implemented.");
    }
    //#endregion
}
