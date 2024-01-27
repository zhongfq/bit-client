import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ItemVo } from "../../misc/vo/goods/item-vo";
import { BagUI } from "../../ui-runtime/prefab/bag/BagUI";
import { IconUI } from "../../ui-runtime/prefab/icon/IconUI";
import { DataUtil } from "../table/table-util";
import { BagService } from "./bag-service";

const { regClass, property } = Laya;

@regClass()
export class BagMediator extends Mediator {
    owner!: BagUI;
    itemListData!: ItemVo[];

    onAwake(): void {
        this.initEvent();
        this.bind();
        this.updateList();
    }
    initEvent() {
        this.owner.listItem.renderHandler = new Laya.Handler(this, this.updateItem);
        this.owner.listItem.mouseHandler = new Laya.Handler(this, this.onListClick);
        this.owner.tabMenu.selectHandler = new Laya.Handler(this, this.onTabSelect);
    }
    bind() {
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
        if (this.owner.tabMenu.selectedIndex == 0) {
            this.itemListData = bag.toArray();
        } else {
            let tlItem = DataUtil.getArrayRef(app.service.table.item, { composite: 1 });
            for (let refItem of tlItem) {
                let itemvo = bag.createByRef(refItem.id);
                this.itemListData.push(itemvo);
            }
        }
        this.owner.listItem.array = this.itemListData;
    }
}
