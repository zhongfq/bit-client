import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { DataUtil } from "../table/table-util";
import { ShopUI } from "../../ui-runtime/prefab/shop/ShopUI";
import { ui } from "../../misc/ui";
import proto from "../../def/proto";
import { ItemRow, ShopRow } from "../../def/data";
import { ShopConf } from "../../def/shop";
import { ShopItemUI } from "../../ui-runtime/prefab/shop/ShopItemUI";
import { ShopService } from "./shop-service";

const { regClass, property } = Laya;
export interface ShopItem {
    cmdData: proto.shop.ItemInfo;
    refData: ShopRow;
}
@regClass()
export class ShopMediator extends Mediator {
    owner!: ShopUI;
    itemListData!: ShopItem[];

    onAwake(): void {
        this.initEvent();
        this.bind();
    }
    initEvent() {
        this.owner.listItem.renderHandler = new Laya.Handler(this, this.updateItem);
        this.owner.listItem.mouseHandler = new Laya.Handler(this, this.onListClick);
    }
    bind() {
        this.on(app.service.shop, ShopService.SHOP_UPDATE, () => {
            this.updateList();
        });
    }
    onListClick(evn: Laya.Event, index: number) {
        if (evn.type == Laya.Event.CLICK) {
            app.ui.show(ui.SHOP_BUY, this.itemListData[index]);
        }
    }
    updateItem(cell: ShopItemUI, index: number) {
        let cellData = this.itemListData[index];
        let vo = app.service.bag.itemBag.createByRef(cellData.refData.id);
        cell.labelName.text = vo.name;
        if (cellData.refData.cost && cellData.refData.cost.length > 0) {
            cell.labelConsume.text = cellData.refData.cost[0].count.toString();
        } else {
            cell.labelConsume.text = "免费";
        }
        if (cellData.refData.limit_day) {
            cell.labelLimit.text = `每日限购:${cellData.refData.limit_day}`;
        } else if (cellData.refData.limit_week) {
            cell.labelLimit.text = `每周限购:${cellData.refData.limit_week}`;
        } else {
            cell.labelLimit.text = "";
        }
        cell.iconDrward.updateGoods(vo);
    }
    updateList() {
        this.itemListData = [];
        let shopItemList = app.service.shop.shopCmd.get(ShopConf.SHOP_TYPE.REGULAR)?.itemList;
        if (shopItemList) {
            for (let [_, item] of shopItemList) {
                this.itemListData.push({
                    cmdData: item,
                    refData: DataUtil.getRef(app.service.table.shop.shop_1, {
                        id: item.id,
                    }) as ShopRow,
                });
            }
        }
        this.owner.listItem.array = this.itemListData;
    }
}
