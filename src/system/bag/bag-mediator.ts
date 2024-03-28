import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ItemVo } from "../../misc/vo/goods/item-vo";
import { BagUI } from "../../ui-runtime/prefab/bag/BagUI";
import { IconUI } from "../../ui-runtime/prefab/icon/IconUI";
import { TableUtil } from "../table/table-util";
import { BagService } from "./bag-service";

const { regClass, property } = Laya;

@regClass()
export class BagMediator extends Mediator {
    public declare owner: BagUI;
    public itemListData!: ItemVo[];

    public override onAwake(): void {
        this.initUIEvent();
        this.initServiceEvent();
        this.updateList();
    }

    //初始化UI事件监听
    public initUIEvent() {
        this.owner.listItem.renderHandler = new Laya.Handler(this, this.updateItem);
        this.owner.listItem.mouseHandler = new Laya.Handler(this, this.onListClick);
        this.owner.tabMenu.selectHandler = new Laya.Handler(this, this.onTabSelect);
    }

    //初始化Service事件监听
    public initServiceEvent() {
        this.$(app.service.bag).on(BagService.ITEM_UPDATE, () => {
            this.updateList();
        });
    }

    //列表点击回调
    public onListClick(evn: Laya.Event, index: number) {
        //TODO
        // if (evn.type == Laya.Event.CLICK) {
        // }
    }

    //标签点击回调
    public onTabSelect(index: number) {
        this.updateList();
    }

    //listItem更新回调
    public updateItem(cell: IconUI, index: number) {
        const cellData = this.itemListData[index];
        cell.updateGoods(cellData);
    }

    //刷新列表
    public updateList() {
        const bag = app.service.bag.itemBag;
        this.itemListData = [];
        if (this.owner.tabMenu.selectedIndex == 0) {
            this.itemListData = bag.toArray();
        } else {
            const tlItem = TableUtil.getRows(app.service.table.item, { composite: 1 });
            for (const refItem of tlItem) {
                const itemvo = bag.createByRef(refItem.id);
                this.itemListData.push(itemvo);
            }
        }
        this.owner.listItem.array = this.itemListData;
    }
}
