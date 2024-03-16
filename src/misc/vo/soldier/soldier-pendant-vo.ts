import { app } from "../../../app";
import { ItemTable, SoldierPendantRow } from "../../../def/table";
import { soldier } from "../../../def/proto";
import { VO } from "../vo-base/vo";
import { GoodsVo } from "../goods/goods-vo";

/**
 * Item
 * 道具
 */
export class SoldierPendantVo extends GoodsVo<SoldierPendantRow, soldier.PendantInfo> {
    public override refTable!: ItemTable;

    public override get iconUrl(): string {
        return this._ref ? `resources/atlas/head/${"icon_main_role_1"}.png` : ""; //icon_main_role_1
    }

    public override get quality(): number {
        return 1;
    }

    public override get qualitySkin(): string {
        return `resources/atlas/imgFrame/img_icon_frame_${this.quality}.png`;
    }

    //#region 重载
    public get refId(): number {
        return this._ref ? this._ref.id : 0;
    }

    public override get id(): number {
        if (this._cmd) {
            return Number(this._cmd.id);
        }
        return 0;
    }

    public getTableRowByCmd(cmd: soldier.PendantInfo): SoldierPendantRow | undefined {
        return app.service.table.soldier.pendant[cmd.id];
    }

    public get goodsType(): number {
        return 0; //this.ref.type;
    }

    public get desc(): string {
        return ""; //this.ref.desc;
    }

    public get name(): string {
        return "";
    }

    protected override onGetNumber(): number {
        return app.service.bag.itemBag.get(this.id)?.goodsNumber || 0;
    }

    public get level(): number {
        return this._cmd ? this._cmd.lv : 1;
    }
    //#endregion
}
