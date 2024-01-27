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
    __cname: string = "ItemVo";
    refTable!: ItemTable;

    //#region 重载
    get refId(): number {
        return this._ref ? this._ref.id : 0;
    }

    get id(): number {
        if (this._cmd) {
            if (this._cmd.uid) {
                return this._cmd.uid;
            } else {
                return this.refId;
            }
        }
        return 0;
    }

    getRefByCmd(cmd: bag.Item): ItemRow | undefined {
        let id = cmd.uid ? cmd.uid : cmd.id;
        return TableUtil.getRef<ItemRow>(app.service.table.item, { id: id });
    }

    initByRefId(id: number) {
        let ref = TableUtil.getRef(app.service.table.item, { id: id });
        if (ref) {
            this.initByRef(ref);
        } else {
            console.log("没有找到该道具");
        }
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
