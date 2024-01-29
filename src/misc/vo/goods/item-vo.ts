import { app } from "../../../app";
import { ItemTable } from "../../../def/table";
import { bag } from "../../../def/proto";
import { TableUtil } from "../../../system/table/table-util";
import { GoodsVo } from "./goods-vo";
import { GeneratedItemRow } from "../../../def/table.generated";

/**
 * Item
 * 道具
 */
export class ItemVo extends GoodsVo<GeneratedItemRow, bag.Item> {
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

    getRefByCmd(cmd: bag.Item): GeneratedItemRow | undefined {
        let id = cmd.uid ? cmd.uid : cmd.id;
        return TableUtil.getRef<GeneratedItemRow>(app.service.table.item, { id: id });
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
    onGetNumber(): number {
        if (this._cmd) {
            return this._cmd.num ? this._cmd.num : 0;
        }
        return 0;
    }
    //#endregion
}
