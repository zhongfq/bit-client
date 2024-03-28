import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { TroopUI } from "../../ui-runtime/prefab/troop/TroopUI";
import { SoldierVo } from "../../misc/vo/soldier/soldier-vo";
import { SoldierConf } from "../../def/soldier";
import { TroopItemUI } from "../../ui-runtime/prefab/troop/TroopItemUI";
import { SoldierIconUI } from "../../ui-runtime/prefab/icon/SoldierIconUI";
import { ItemConf } from "../../def/item";
import { TroopVo } from "../../misc/vo/troop/troop-vo";

const { regClass, property } = Laya;

interface TroopCellData {
    soldierId: number;
}

interface SoldierCellData {
    soldierVo: SoldierVo;
}
@regClass()
export class TroopMediator extends Mediator {
    public declare owner: TroopUI;

    public override onAwake(): void {
        app.service.troop.setEditingTroop(1); // = app.service.troop.troopBag.get(1) as TroopVo;
        this.initUIEvent();
        this.initServiceEvent();
    }

    public override onStart(): void {
        this._updateTroopSoldierList();
    }

    private initUIEvent() {
        this.owner.listTroop.renderHandler = new Laya.Handler(this, this._updateTroopSoldierItem);
        this.owner.listTroop.selectCheck = () => {
            return false;
        };
        this.owner.listSoldier.mouseHandler = new Laya.Handler(
            this,
            (e: Laya.Event, index: number) => {
                if (e.type == Laya.Event.CLICK) {
                    const editingTroopVo = app.service.troop.getEditingTroop();
                    const cellData = this.owner.listSoldier.getItem(index) as SoldierCellData;
                    editingTroopVo.updateSoldiers(cellData.soldierVo.pos, cellData.soldierVo.id);
                    this._updateTroopSoldierList();
                }
            }
        );
        this.owner.listSoldier.renderHandler = new Laya.Handler(this, this._updateSoldierItem);
    }

    private initServiceEvent() {}

    //渲染上阵士兵ListCell
    private _updateTroopSoldierItem(item: TroopItemUI, index: number) {
        item.updateInfo(this.owner.listTroop.getItem(index) as TroopCellData);
    }

    //渲染士兵背包ListCell
    private _updateSoldierItem(cell: SoldierIconUI, index: number) {
        const editingTroop = app.service.troop.getEditingTroop() as TroopVo;
        cell.updateGoods(cell.dataSource.soldierVo, ItemConf.ITEM_SUB_TYPE.SOLDIER);
        if (editingTroop.soldierIds.indexOf(cell.dataSource.soldierVo.id) != -1) {
            cell.gray = true;
        } else {
            cell.gray = false;
        }
    }

    //刷新上阵士兵列表
    private _updateTroopSoldierList() {
        const curTroop = app.service.troop.getEditingTroop();
        const listData = [];
        let index = -1;
        for (let i = 1; i < 4; i++) {
            const soldierId = curTroop.getSoldierIdByPos(i);
            listData.push({ soldierId: soldierId });
            if (!soldierId && index == -1) {
                index = this._getIndex(i);
            }
        }
        this.owner.listTroop.array = listData;
        this.owner.listTroop.selectedIndex = index;
        if (index == -1) {
            this.owner.listTroop.selectEnable = false;
        } else {
            this.owner.listTroop.selectEnable = true;
        }
        this.owner.listTroop.selectedIndex = index;
        this._updateSoldierBagList();
    }

    //刷新士兵背包列表
    private _updateSoldierBagList() {
        this.owner.listSoldier.selectedIndex = -1;
        const soldiers = app.service.soldier.soldierBag.filter((vo: SoldierVo) => {
            if (this.owner.listTroop.selectedIndex != -1) {
                if (vo.ref.position == this._getPos(this.owner.listTroop.selectedIndex)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        });
        const listData: SoldierCellData[] = [];
        for (const vo of soldiers) {
            listData.push({ soldierVo: vo });
        }
        this.owner.listSoldier.array = listData;
        this.owner.listSoldier.refresh();
    }

    private _getIndex(idx: number): number {
        switch (idx) {
            case SoldierConf.SOLDIER_STATION.FRONT:
                return 0;
            case SoldierConf.SOLDIER_STATION.MIDDLE:
                return 1;
            case SoldierConf.SOLDIER_STATION.BACK:
                return 2;
        }
        return -1;
    }

    private _getPos(idx: number): number {
        switch (idx) {
            case 0:
                return SoldierConf.SOLDIER_STATION.FRONT;
            case 1:
                return SoldierConf.SOLDIER_STATION.MIDDLE;
            case 2:
                return SoldierConf.SOLDIER_STATION.BACK;
        }
        return -1;
    }
}
