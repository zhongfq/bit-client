import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { TaskItemBox } from "../../ui-runtime/prefab/task/TaskItemBox";
import { TaskUI } from "../../ui-runtime/prefab/task/TaskUI";
import { TaskVo } from "../../misc/vo/task/task-vo";
import { TaskConf } from "../../def/task";
import { TroopUI } from "../../ui-runtime/prefab/troop/TroopUI";
import { util } from "protobufjs";
import { SoldierVo } from "../../misc/vo/soldier/soldier-vo";
import { SoldierConf } from "../../def/soldier";
import { TroopItemUI } from "../../ui-runtime/prefab/troop/TroopItemUI";
import proto from "../../def/proto";
import { SoldierIconUI } from "../../ui-runtime/prefab/icon/SoldierIconUI";
import { ItemConf } from "../../def/item";

const { regClass, property } = Laya;

interface TroopCellData {
    soldierId: number;
    pos: number;
}

@regClass()
export class TroopMediator extends Mediator {
    public declare owner: TroopUI;

    private _curTroop!: proto.troop.ITroop;

    public override onAwake(): void {
        this._curTroop = app.service.troop.mapTroop.get(0) || {};
        this.initUIEvent();
        this.initServiceEvent();
    }

    public override onStart(): void {
        this._updateTroopList();
    }

    private initUIEvent() {
        this.owner.listTroop.selectHandler = new Laya.Handler(this, () => {
            // this._updateSoldierList();
        });
        this.owner.listTroop.renderHandler = new Laya.Handler(this, this.updateTroopItem);

        this.owner.listSoldier.mouseHandler = new Laya.Handler(
            this,
            (e: Laya.Event, index: number) => {
                if (e.type == Laya.Event.CLICK) {
                    let troop = this.owner.listTroop.selectedItem as TroopCellData;
                    const soldier = this.owner.listSoldier.getItem(index) as SoldierVo;
                    if (troop.soldierId) {
                        troop.soldierId = soldier.id;
                    } else {
                        troop = { soldierId: soldier.id, pos: soldier.ref.position };
                    }
                    if (!this._curTroop.soldierIds) {
                        this._curTroop.soldierIds = [];
                    }

                    this._curTroop.soldierIds.push(soldier.id);
                    this.owner.listTroop.array[index] = troop;
                    this._updateTroopList();
                }
            }
        );
        this.owner.listSoldier.renderHandler = new Laya.Handler(this, this.updateItem);
    }

    private initServiceEvent() {}

    private updateTroopItem(item: TroopItemUI, index: number) {
        if (!this.owner.listTroop.getItem(index).soldierId) {
            item.VBox.visible = false;
        } else {
            item.VBox.visible = true;
        }
        // item.updateInfo(item.dataSource);
    }

    public updateItem(cell: SoldierIconUI, index: number) {
        // cell.updateGoods(cell.dataSource.soldierVo, ItemConf.ITEM_SUB_TYPE.SOLDIER);
    }

    private _updateTroopList() {
        const listData = [];
        let index = -1;
        for (let i = 1; i < 4; i++) {
            const soldierId = app.service.troop.getSoldierByTroopIdx(this._curTroop, i);
            listData.push({ soldierId: soldierId });
            if (!soldierId && index == -1) {
                index = this._getIndex(i);
            }
        }
        this.owner.listTroop.array = listData;

        this.owner.listTroop.selectedIndex = index;
        if (index == -1) {
            this.owner.listTroop.selectEnable = false;
            this.owner.listTroop.mouseEnabled = true;
        } else {
            this.owner.listTroop.selectEnable = true;
            this.owner.listTroop.mouseEnabled = false;
        }
        this.owner.listTroop.selectedIndex = index;

        this._updateSoldierList();
    }

    private _updateSoldierList() {
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
        const listData = [];
        for (const vo of soldiers) {
            listData.push(vo);
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
