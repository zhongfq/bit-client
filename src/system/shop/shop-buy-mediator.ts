import { Mediator } from "../../core/ui-mediator";
import { IconUI } from "../../ui-runtime/prefab/icon/IconUI";
import { ItemVo } from "../../misc/vo/goods/item-vo";
import { ShopBuyUI } from "../../ui-runtime/prefab/shop/ShopBuyUI";

const { regClass, property } = Laya;

@regClass()
export class ShopBuyMediator extends Mediator {
    owner!: ShopBuyUI;
    itemListData!: ItemVo[];

    onAwake(): void {
        // this.owner.labelItemDesc.viewport = this.owner.labelItemDesc.getBounds();
        this.owner.labelItemDesc.scrollRect = new Laya.Rectangle(0, 0, 106, 100);
        // this.owner.labelItemDesc.scrollRect.x;

        // this.updateList();
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
    }
}
