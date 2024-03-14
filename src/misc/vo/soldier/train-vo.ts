import { app } from "../../../app";
import { ItemTable, RoleTrainRow } from "../../../def/table";
import { soldier } from "../../../def/proto";
import { VO } from "../vo-base/vo";

/**
 * Item
 * 道具
 */
export class TrainVo extends VO<RoleTrainRow, soldier.TrainInfo> {
    public refTable!: ItemTable;

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

    public getTableRowByCmd(cmd: soldier.TrainInfo): RoleTrainRow | undefined {
        return app.service.table.role.train[cmd.id];
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

    protected onGetNumber(): number {
        return 0;
    }
    //#endregion
}
