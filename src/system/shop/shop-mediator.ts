import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { TableUtil } from "../table/table-util";
import { ShopUI } from "../../ui-runtime/prefab/shop/ShopUI";
import { ui } from "../../misc/ui";
import proto from "../../def/proto";
import { ShopConf } from "../../def/shop";
import { ShopItemUI } from "../../ui-runtime/prefab/shop/ShopItemUI";
import { ShopItem, ShopService } from "./shop-service";
import { Shop1Row } from "../../def/table";

const { regClass, property } = Laya;
@regClass()
export class ShopMediator extends Mediator {
    public declare owner: ShopUI;
    public shopInfoData!: proto.shop.s2c_load; //商城信息
    public itemListData!: ShopItem[]; //商城道具列表

    public override onAwake(): void {
        this.initUIEvent();
        this.callShopLoad();
    }

    //初始化UI事件监听
    private initUIEvent() {
        this.owner.btnClose.on(Laya.Event.CLICK, () => {
            this.owner.close();
        });
        this.owner.listItem.renderHandler = new Laya.Handler(this, this.updateItem);
        this.owner.listItem.mouseHandler = new Laya.Handler(this, this.onListClick);
    }

    //请求商店数据
    private async callShopLoad() {
        app.service.shop
            .load({ shopId: ShopConf.SHOP_TYPE.REGULAR })
            .then((data: proto.shop.s2c_load) => {
                this.shopInfoData = data;
                this.updateList();
            });
    }

    //list点击监听
    private onListClick(evn: Laya.Event, index: number) {
        if (evn.type == Laya.Event.CLICK) {
            const buyData = app.service.shop.getShopItemBuyNum(this.itemListData[index]);
            if (this.itemListData[index].refData.cost) {
                if (buyData.num <= 0) {
                    app.ui.toast(buyData.tips);
                } else {
                    app.ui.show(ui.SHOP_BUY, {
                        shopId: 1,
                        shopItem: this.itemListData[index],
                        buyBack: new Laya.Handler(this, this.buyBack),
                    });
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

    //购买回调
    private buyBack() {
        this.callShopLoad();
    }

    //listItem刷新
    private updateItem(cell: ShopItemUI, index: number) {
        const cellData = this.itemListData[index];
        const vo = app.service.bag.itemBag.createByRef(cellData.refData.items[0].id);
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

    //刷新list数据
    private updateList() {
        this.itemListData = [];
        const shopItemList = this.shopInfoData.items as proto.shop.ItemInfo[];
        if (shopItemList) {
            for (const item of shopItemList) {
                this.itemListData.push({
                    cmdData: item,
                    refData: TableUtil.getRow(app.service.table.shop.shop_1, {
                        id: item.id,
                    }) as Shop1Row,
                });
            }
        }
        this.owner.listItem.array = this.itemListData;
    }
}
