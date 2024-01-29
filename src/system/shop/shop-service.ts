import { app } from "../../app";
import { Service } from "../../core/service";
import proto, { shop } from "../../def/proto";
import { errcode, opcode } from "../../def/protocol";
import { Reward, Shop1Row } from "../../def/table";
import { GeneratedShop1Row } from "../../def/table.generated";
import { VoUtil } from "../../misc/vo-util";
import { NetworkService } from "../network/network-service";
interface ShopData {
    itemList: Map<number, proto.shop.ItemInfo>;
    time?: number;
}

export interface ShopItem {
    cmdData: proto.shop.ItemInfo;
    refData: Shop1Row;
}
export class ShopService extends Service<NetworkService> {
    static readonly SHOP_UPDATE = "shop-update";
    private _shopCmd: Map<number, ShopData> = new Map<number, ShopData>();
    constructor(network: NetworkService) {
        super(network);
        this.handle(opcode.shop.s2c_load, this._onLoad);
        this.handle(opcode.shop.s2c_buy, this._onBuy);
    }
    get shopCmd() {
        return this._shopCmd;
    }
    private _onLoad(data: proto.shop.s2c_load, reqest: proto.shop.c2s_load) {
        if (data.err === errcode.OK) {
            let itemMap = new Map<number, proto.shop.ItemInfo>();
            for (let itemInfo of data.items) {
                itemMap.set(Number(itemInfo.id), itemInfo as proto.shop.ItemInfo);
            }
            this._shopCmd.set(reqest.shopId, { itemList: itemMap, time: data.time });

            this.event(ShopService.SHOP_UPDATE, { shopId: reqest.shopId });
        }
    }
    private _onBuy(data: proto.shop.s2c_buy, reqest: proto.shop.c2s_buy) {
        if (data.err === errcode.OK) {
            this.updateShop(reqest.shopId, reqest.shopItemId, reqest.num);
        }
    }
    private updateShop(shopId: number, shopItemId: number, num: number) {
        let cmdShop = this._shopCmd.get(shopId);
        if (cmdShop) {
            let cmdShopItem = cmdShop.itemList.get(shopItemId);
            if (cmdShopItem) {
                cmdShopItem.buyNum -= num;
            }
        }
        this.event(ShopService.SHOP_UPDATE, { shopId: shopId });
    }

    public getShopItemLimit(ref: GeneratedShop1Row): number {
        if (ref.limit_day) {
            return ref.limit_day;
        } else if (ref.limit_week) {
            return ref.limit_week;
        }
        return 0;
    }
    public getShopItemBuyNum(shopItem: ShopItem): { num: number; tips: string } {
        let num = 0;
        let tips = "";
        let cost = shopItem.refData.cost as Reward[];
        let costBagNum = VoUtil.getNumber(cost[0].id);
        let maxBuyNum = Math.floor(costBagNum / cost[0].count);
        let limitNum = this.getShopItemLimit(shopItem.refData);
        if (!maxBuyNum) {
            tips = `道具不足····后续增加获取道具弹窗`;
        } else if (Math.min(limitNum, maxBuyNum) - shopItem.cmdData.buyNum) {
            tips = `已达购买上限`;
        }
        num = limitNum == 0 ? maxBuyNum : Math.min(limitNum, maxBuyNum) - shopItem.cmdData.buyNum;
        return { num: num, tips: tips };
    }

    // ------------------------------------------------------------------------
    // rpc call
    // ------------------------------------------------------------------------
    public async load(data: proto.shop.Ic2s_load) {
        await this._network.call(proto.shop.c2s_load.create(data), proto.shop.s2c_load);
    }
    //请求购买
    public async requestBuy(data: proto.shop.Ic2s_buy) {
        await this._network.call(proto.shop.c2s_buy.create(data), proto.shop.s2c_buy);
    }
}
