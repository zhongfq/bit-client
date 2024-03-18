import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ItemConf } from "../../def/item";
import { SoldierPendantVo } from "../../misc/vo/soldier/soldier-pendant-vo";
import { SoldierIconUI } from "../../ui-runtime/prefab/icon/SoldierIconUI";
import { SoldierPendantUI } from "../../ui-runtime/prefab/soldier/SoldierPendantUI";
import { SoldierUI } from "../../ui-runtime/prefab/soldier/SoldierUI";
import { BagService } from "../bag/bag-service";
import { TableUtil } from "../table/table-util";
import { SoldierService } from "./soldier-service";

const { regClass, property } = Laya;

@regClass()
export class SoldierPendantMediator extends Mediator {
    public declare owner: SoldierPendantUI;

    public override onAwake(): void {
        this.initUIEvent();
        this.updateList();
    }

    //初始化UI
    private initInfo() {
        const vo = this.owner.listPendant.selectedItem.vo as SoldierPendantVo;
        this.owner.labelName.text = vo.name;

        this.owner.labelLv.text = "Lv." + vo.level;

        const skillRow = app.service.table.skill[vo.ref.skill2];
        this.owner.labelSkillName.text = skillRow.name;
        this.owner.labelSkillDesc.text = skillRow.desc;
    }

    //初始化UI事件监听
    private initUIEvent() {
        this.on(app.service.soldier, SoldierService.SOLDIER_PENDANT_UPDATE, () => {
            this.updateList();
        });
        this.owner.btnUpLv.on(Laya.Event.CLICK, () => {
            //升级
            app.service.soldier.requestPendantUpgrade({
                id: this.owner.listPendant.selectedItem.vo.id,
            });
        });

        this.owner.listPendant.renderHandler = new Laya.Handler(this, this.updateItem);
        this.on(app.service.bag, BagService.ITEM_UPDATE, () => {
            this.updateList();
        });
    }

    public updateItem(cell: SoldierIconUI, index: number) {
        cell.updateGoods(cell.dataSource.vo, ItemConf.ITEM_SUB_TYPE.SOLDIER_PENDANT);
    }

    private updateList() {
        const pendantList = [];

        for (const pendantRow of TableUtil.getRows(app.service.table.soldier.pendant, {})) {
            let vo = new SoldierPendantVo();
            const soldierVo = app.service.soldier.soldierPendantBag.get(pendantRow.id);
            if (soldierVo) {
                vo = soldierVo;
            } else {
                vo.initByTableRow(pendantRow);
            }
            pendantList.push({
                vo: vo,
            });
        }
        this.owner.listPendant.array = pendantList;
        this.initInfo();
    }
}
