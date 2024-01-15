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
        return DataUtil.getRef<Item>(app.service.data.itemTable, {});
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
        return this._ref ? "cards/g_not_compress/" + this._ref.icon : "";
    }

    get quality() {
        return 1; //this.ref.quality;
    }

    onGetNumber(): number {
        if (this._cmd) {
            return this._cmd.num ? this._cmd.num : 0;
        }
        return 0;
    }
    //#endregion

    //#region 道具接口
    get order(): number {
        return 1; //this.ref.order;
    }

    get price(): number {
        return 1; //this.ref.price;
    }
}
