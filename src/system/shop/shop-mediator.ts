import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { IconUI } from "../../ui-runtime/prefab/icon/IconUI";
import { DataUtil } from "../data/data-util";
import { ItemVo } from "../../misc/vo/goods/item-vo";
import { ShopUI } from "../../ui-runtime/prefab/shop/ShopUI";

const { regClass, property } = Laya;

@regClass()
export class ShopMediator extends Mediator {
    owner!: ShopUI;
    itemListData!: ItemVo[];

    onAwake(): void {
        this.owner.itemList.renderHandler = new Laya.Handler(this, this.updateItem);
        this.owner.itemList.mouseHandler = new Laya.Handler(this, this.onListClick);

        this.updateList();
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
        this.itemListData = [];
        this.owner.itemList.array = this.itemListData;
    }
}
