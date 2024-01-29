import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { TableUtil } from "../table/table-util";
import { ShopUI } from "../../ui-runtime/prefab/shop/ShopUI";
import { ui } from "../../misc/ui";
import proto from "../../def/proto";
import { ShopConf } from "../../def/shop";
import { ShopItemUI } from "../../ui-runtime/prefab/shop/ShopItemUI";
import { ShopItem, ShopService } from "./shop-service";
import { GeneratedShop1Row } from "../../def/table.generated";
import { Reward, Shop1Row } from "../../def/table";
import { VoUtil } from "../../misc/vo-util";

const { regClass, property } = Laya;
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
            let buyData = app.service.shop.getShopItemBuyNum(this.itemListData[index]);
            if (this.itemListData[index].refData.cost) {
                if (buyData.num <= 0) {
                    app.ui.toast(buyData.tips);
                } else {
                    app.ui.show(ui.SHOP_BUY, { shopId: 1, shopItem: this.itemListData[index] });
                }
            } else {
                if (buyData.num) {
                    app.service.shop.requestBuy({
                        shopId: ShopConf.SHOP_TYPE.REGULAR,
                        shopItemId: this.itemListData[index].refData.id,
                        num: 1, //免费购买1次
                    });
                } else {
                    app.ui.toast(buyData.tips);
                }
            }
        }
    }
    updateItem(cell: ShopItemUI, index: number) {
        let cellData = this.itemListData[index];
        let vo = app.service.bag.itemBag.createByRef(cellData.refData.items[0].id);
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
                    refData: TableUtil.getRef(app.service.table.shop.shop_1, {
                        id: item.id,
                    }) as GeneratedShop1Row,
                });
            }
        }
        this.owner.listItem.array = this.itemListData;
    }
}
