import { app } from "../../../app";
import { ItemTable, SoldierRow } from "../../../def/table";
import { soldier } from "../../../def/proto";
import { GoodsVo } from "../goods/goods-vo";

/**
 * Item
 * 道具
 */
export class SoldierVo extends GoodsVo<SoldierRow, soldier.SoldierInfo> {
    public override refTable!: SoldierRow;
    private _troopId: number | null = null;

    public override get iconUrl(): string {
        // throw new Error("Method not implemented.");
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

    public getTableRowByCmd(cmd: soldier.SoldierInfo): SoldierRow | undefined {
        return app.service.table.soldier.soldier[cmd.id];
    }

    public get goodsType(): number {
        return 0; //this.ref.type;
    }

    public get desc(): string {
        return ""; //this.ref.desc;
    }

    public get level(): number {
        return this._cmd ? this._cmd.lv : 1;
    }

    public get name(): string {
        return app.service.table.item[this.refId].name;
    }

    protected override onGetNumber(): number {
        return app.service.bag.itemBag.get(this.id)?.goodsNumber || 0;
    }

    public set troopId(id: number | null) {
        this._troopId = id;
    }

    public get troopId() {
        return this._troopId;
    }

    public get pos() {
        return this.ref.position;
    }
    //#endregion
}
