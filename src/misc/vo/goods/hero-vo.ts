import { app } from "../../../app";
import { HeroRow, HeroTable, ItemRow } from "../../../def/table";
import { bag, hero } from "../../../def/proto";
import { TableUtil } from "../../../system/table/table-util";
import { GoodsVo } from "./goods-vo";

/**
 * Item
 * 道具
 */
export class HeroVo extends GoodsVo<HeroRow, hero.IHero> {
    declare refTable: HeroTable;

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

    getTableRowByCmd(cmd: bag.Item): HeroRow | undefined {
        const id = cmd.uid ? cmd.uid : cmd.id;
        return TableUtil.getRow<HeroRow>(app.service.table.hero, { id: id });
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
        return this._ref ? `resources/atlas/hero/h/${this._ref.id}.png` : ""; // "atlas/icon/" + this._ref.icon : "";
    }

    get quality(): number {
        return 1;
        // return this._ref ? this._ref.quality : 1;
    }

    get qualitySkin(): string {
        return `resources/atlas/imgFrame/img_icon_frame_${this.quality}.png`;
    }

    override onGetNumber(): number {
        return 1;
    }
    //#endregion
}
