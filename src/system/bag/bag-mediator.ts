import { app } from "../../app";
import { toEventType } from "../../core/dispatcher";
import { Mediator } from "../../core/ui-mediator";
import { BagUI } from "../../ui-runtime/prefab/bag/BagUI";
import { IconUI } from "../../ui-runtime/prefab/icon/IconUI";
import { DataUtil } from "../data/data-util";
import { IconNodeMediator } from "../icon/icon-node-mediator";
import { ItemVo } from "../../misc/vo/goods/item-vo";
import { BagService } from "./bag-service";

const { regClass, property } = Laya;

@regClass()
export class BagMediator extends Mediator {
    owner!: BagUI;
    itemListData!: ItemVo[];

    onAwake(): void {
        this.owner.itemList.renderHandler = new Laya.Handler(this, this.updateItem);
        this.owner.itemList.mouseHandler = new Laya.Handler(this, this.onListClick);
        this.owner.menuTab.selectHandler = new Laya.Handler(this, this.onTabSelect);
        this.updateList();
        this.on(app.service.bag, BagService.ITEM_UPDATE, () => {
            this.updateList();
        });
    }
    onListClick(evn: Laya.Event, index: number) {
        if (evn.type == Laya.Event.CLICK) {
        }
    }
    onTabSelect(index: number) {
        this.updateList();
    }
    updateItem(cell: IconUI, index: number) {
        let cellData = this.itemListData[index];
        cell.updateGoods(cellData);
    }
    updateList() {
        const bag = app.service.bag.itemBag;
        this.itemListData = [];
        if (this.owner.menuTab.selectedIndex == 0) {
            this.itemListData = bag.toArray();
        } else {
            let tlItem = DataUtil.getArrayRef(app.service.data.itemTable, { composite: 1 });
            for (let refItem of tlItem) {
                let itemvo = bag.createByRef(refItem.id);
                this.itemListData.push(itemvo);
            }
        }
        this.owner.itemList.array = this.itemListData;
    }
}
