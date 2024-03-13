import { app } from "../../../app";
import { ItemRow, ItemTable } from "../../../def/table";
import { bag } from "../../../def/proto";
import { TableUtil } from "../../../system/table/table-util";
import { GoodsVo } from "./goods-vo";

/**
 * Item
 * 道具
 */
export class ItemVo extends GoodsVo<ItemRow, bag.Item> {
    public declare refTable: ItemTable;

    //#region 重载
    public get refId(): number {
        return this._ref ? this._ref.id : 0;
    }

    public get id(): number {
        if (this._cmd) {
            if (this._cmd.uid) {
                return this._cmd.uid;
            } else {
                return this.refId;
            }
        }
        return 0;
    }

    public getTableRowByCmd(cmd: bag.Item): ItemRow | undefined {
        const id = cmd.uid ? cmd.uid : cmd.id;
        return TableUtil.getRow<ItemRow>(app.service.table.item, { id: id });
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

    public get iconUrl() {
        return this._ref ? `resources/atlas/icon/${this._ref.icon}.png` : ""; // "atlas/icon/" + this._ref.icon : "";
    }

    public get quality(): number {
        return this._ref ? this._ref.quality : 1;
    }

    public get qualitySkin(): string {
        return `resources/atlas/imgFrame/img_icon_frame_${this.quality}.png`;
    }

    public override onGetNumber(): number {
        if (this._cmd) {
            return this._cmd.num ? this._cmd.num : 0;
        }
        return 0;
    }
    //#endregion
}
