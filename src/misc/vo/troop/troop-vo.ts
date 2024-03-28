import { app } from "../../../app";
import { ItemTable, SoldierPendantRow } from "../../../def/table";
import { soldier, troop } from "../../../def/proto";
import { VO } from "../vo-base/vo";
import { GoodsVo } from "../goods/goods-vo";

/**
 * Item
 * 道具
 */
export class TroopVo extends VO<any, troop.Troop> {
    //#region 重载
    public get refId(): number {
        return this._ref ? this._ref.id : 0;
    }

    public override initByCmd(cmdData: troop.ITroop) {
        if (!cmdData.soldierIds) {
            cmdData.soldierIds = [];
        }
        if (!cmdData.pendants) {
            cmdData.pendants = [];
        }
        this._cmd = cmdData as troop.Troop;
    }

    public override get id(): number {
        if (this._cmd) {
            return Number(this._cmd.idx);
        }
        return 0;
    }

    public getTableRowByCmd(cmd: troop.ITroop): any | undefined {
        return undefined;
    }

    public updateSoldiers(pos: number, soldierId: number) {
        let index = 0;
        for (const id of (this._cmd as troop.Troop).soldierIds) {
            const soldierRow = app.service.table.soldier.soldier[id];
            if (soldierRow.position == pos) {
                this._cmd?.soldierIds.splice(index, 1);
                break;
            }
            index++;
        }

        this._cmd?.soldierIds.push(soldierId);
    }

    public getSoldierIdByPos(pos: number) {
        for (const id of (this._cmd as troop.Troop).soldierIds) {
            const soldierRow = app.service.table.soldier.soldier[id];
            if (soldierRow.position == pos) {
                return id;
            }
        }
        return null;
    }

    public getPendantByPos(soldierPos: number, pendantPos: number) {
        let pendantInfos!: troop.IPendant;
        for (const pendantInfo of (this._cmd as troop.Troop).pendants) {
            const pendantRow = app.service.table.soldier.pendant[Number(pendantInfo.id)];
            if (pendantRow.position == soldierPos && pendantInfo.station == pendantPos) {
                pendantInfos = pendantInfo;
            }
        }
        return pendantInfos;
    }

    public get soldierIds() {
        return this._cmd ? this._cmd.soldierIds : [];
    }

    public updatePendants(pos: number, pendantId: number) {
        let index = 0;
        for (const pendantInfo of (this._cmd as troop.Troop).pendants) {
            const pendantRow = app.service.table.soldier.pendant[Number(pendantInfo.id)];
            if (pendantRow.position == pos) {
                this._cmd?.pendants.splice(index, 1);
                break;
            }
            index++;
        }

        this._cmd?.pendants.push({ id: pendantId, station: pos });
    }

    public get pendants() {
        return this._cmd ? this._cmd.pendants : [];
    }

    public get idx() {
        return this._cmd?.idx || 0;
    }
    //#endregion
}
