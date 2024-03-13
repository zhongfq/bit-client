import { Service } from "../../core/service";
import proto from "../../def/proto";
import { Reward, Shop1Row } from "../../def/table";
import { GeneratedShop1Row } from "../../def/table.generated";
import { VoUtil } from "../../misc/vo-util";
import { NetworkService } from "../network/network-service";
export interface ShopItem {
    cmdData: proto.shop.ItemInfo;
    refData: Shop1Row;
}
export class ShopService extends Service<NetworkService> {
    public constructor(network: NetworkService) {
        super(network);
    }

    public getShopItemLimit(ref: GeneratedShop1Row): number {
        if (ref.limit_day) {
            return ref.limit_day;
        } else if (ref.limit_week) {
            return ref.limit_week;
        }
        return 0;
    }

    /**
     *
     * @param shopItem 商城格子信息
     * @returns num = 可购买数量 tips 不可购买时的提示信息
     */
    public getShopItemBuyNum(shopItem: ShopItem): { num: number; tips: string } {
        let num = 0;
        let tips = "";
        const cost = shopItem.refData.cost as Reward[];
        const costBagNum = VoUtil.getNumber(cost[0].id);
        const maxBuyNum = Math.floor(costBagNum / cost[0].count);
        const limitNum = this.getShopItemLimit(shopItem.refData);
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
        return await this._network.call(proto.shop.c2s_load.create(data), proto.shop.s2c_load);
    }

    //请求购买
    public async requestBuy(data: proto.shop.Ic2s_buy) {
        return await this._network.call(proto.shop.c2s_buy.create(data), proto.shop.s2c_buy);
    }
}
