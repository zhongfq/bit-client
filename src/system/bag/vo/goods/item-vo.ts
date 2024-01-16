import { app } from "../../../../app";
import { Item, ItemTable } from "../../../../def/data";
import { bag } from "../../../../def/proto";
import { DataUtil } from "../../../data/data-util";
import { GoodsVo } from "./goods-vo";

/**
 * Item
 * 道具
 */
export class ItemVo extends GoodsVo<Item, bag.Item> {
    __cname: string = "ItemVo";
    refTable!: ItemTable;

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

    getRefByCmd(cmd: bag.Item): Item | undefined {
        let id = cmd.uid ? cmd.uid : cmd.id;
        return DataUtil.getRef<Item>(app.service.data.itemTable, { id: id });
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

    get iconUrl() {
        return this._ref ? `resources/atlas/icon/${this._ref.icon}.png` : ""; // "atlas/icon/" + this._ref.icon : "";
    }

    get quality(): number {
        return this._ref ? this._ref.quality : 1;
    }
    get qualitySkin(): string {
        return `resources/atlas/imgFrame/img_icon_frame_${this.quality}.png`;
    }
    protected onGetNumber(): number {
        if (this._cmd) {
            return this._cmd.num ? this._cmd.num : 0;
        }
        return 0;
    }
    //#endregion
}
