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
    public declare refTable: HeroTable;

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

    public getTableRowByCmd(cmd: bag.Item): HeroRow | undefined {
        const id = cmd.uid ? cmd.uid : cmd.id;
        return TableUtil.getRow<HeroRow>(app.service.table.hero, { id: id });
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
        return this._ref ? `resources/atlas/hero/h/${this._ref.id}.png` : ""; // "atlas/icon/" + this._ref.icon : "";
    }

    public get quality(): number {
        return 1;
        // return this._ref ? this._ref.quality : 1;
    }

    public get qualitySkin(): string {
        return `resources/atlas/imgFrame/img_icon_frame_${this.quality}.png`;
    }

    public override onGetNumber(): number {
        return 1;
    }
    //#endregion
}
