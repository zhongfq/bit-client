import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import proto, { troop } from "../../def/proto";
import { SoldierIconUI } from "../../ui-runtime/prefab/icon/SoldierIconUI";
import { ItemConf } from "../../def/item";
import { TroopPendantUI } from "../../ui-runtime/prefab/troop/TroopPendantUI";
import { SoldierPendantVo } from "../../misc/vo/soldier/soldier-pendant-vo";

const { regClass, property } = Laya;

@regClass()
export class TroopPendantMediator extends Mediator {
    public declare owner: TroopPendantUI;

    public override onAwake(): void {
        this.initUIEvent();
        this.initServiceEvent();
    }

    public override onStart(): void {
        this._updateTroopPendantList();
    }

    private initUIEvent() {
        this.owner.listPendant.mouseHandler = new Laya.Handler(
            this,
            (e: Laya.Event, index: number) => {
                if (e.type == Laya.Event.CLICK) {
                    const editingTroop = app.service.troop.getEditingTroop();

                    editingTroop.updatePendants(
                        this.owner.listTroopPendant.selectedIndex + 1,
                        this.owner.listPendant.array[index].vo.id
                    );
                    this._updateTroopPendantList();
                }
            }
        );
        this.owner.listPendant.renderHandler = new Laya.Handler(this, this.updatePendantBag);
        this.owner.listTroopPendant.renderHandler = new Laya.Handler(this, this.updateTroopPendant);
    }

    private initServiceEvent() {}

    //渲染挂件背包LIstCell
    public updatePendantBag(cell: SoldierIconUI, index: number) {
        const editingTroop = app.service.troop.getEditingTroop();
        cell.updateGoods(cell.dataSource.vo, ItemConf.ITEM_SUB_TYPE.SOLDIER_PENDANT);
        const pendant = editingTroop.pendants.find((val: troop.IPendant) => {
            return val.id == cell.dataSource.vo.id;
        });
        if (pendant) {
            cell.gray = true;
        } else {
            cell.gray = false;
        }
    }

    //渲染上阵挂件ListCell
    public updateTroopPendant(cell: Laya.Box, index: number) {
        const btn = cell.getChildByName("btn") as Laya.Button;
        const _pendant = cell.dataSource.pendant as proto.troop.IPendant;
        if (_pendant) {
            const pendantRow = app.service.table.soldier.pendant[Number(_pendant.id)];
            btn.label = pendantRow.name;
        } else {
            const soldierRow = app.service.table.item[this.owner.oepnData.soldierId];
            btn.label = soldierRow.name;
        }
    }

    //刷新上阵挂件列表
    private _updateTroopPendantList() {
        const listData = [];
        const soldierRow = app.service.table.soldier.soldier[this.owner.oepnData.soldierId];
        for (let i = 1; i < 5; i++) {
            const pendant = app.service.troop
                .getEditingTroop()
                .getPendantByPos(soldierRow.position, i);
            listData.push({ pendant: pendant });
        }
        this.owner.listTroopPendant.array = listData;
        if (this.owner.listTroopPendant.selectedIndex == -1) {
            this.owner.listTroopPendant.selectedIndex = this.owner.oepnData.idx - 1;
        }
        // this.owner.oepnData.pos;
        this._updatePendant();
    }

    //刷新挂件背包列表
    private _updatePendant() {
        const listData = [];
        const soldierRow = app.service.table.soldier.soldier[this.owner.oepnData.soldierId];
        const pendants = app.service.soldier.soldierPendantBag.filter((vo: SoldierPendantVo) => {
            if (vo.ref.position == soldierRow.position) {
                return true;
            } else {
                return false;
            }
        });
        for (const pendant of pendants) {
            listData.push({ vo: pendant });
        }
        this.owner.listPendant.array = listData;
    }
}
