import { Constructor } from "../../core/dispatcher";
import { Service } from "../../core/service";
import { NetworkService } from "../network/network-service";
import { GoodsVo } from "./goods/goods-vo";
import { GoodsVoBag } from "./goods/goods-vo-bag";
import { ItemBag } from "./goods/item-vo-bag";
import { VO } from "./vo-base/vo";
import { VOBag } from "./vo-base/vo-bag";

export class VoService extends Service<NetworkService> {
    static readonly ITEM_UPDATE = "item-update";
    constructor(network: NetworkService) {
        super(network);
    }
    /**
     * 创建一个背包(不具备删的功能)
     */
    private createBag<T extends VOBag<VO<any, any>>>(clazz: Constructor<T>): T {
        let bag = new clazz();
        return bag;
    }
    /**
     * 创建一个道具背包(具有增查删改的功能)
     */
    private createGoodsBag<T extends GoodsVoBag<GoodsVo<any, any>>>(clazz: Constructor<T>): T {
        let bag = this.createBag(clazz);
        return bag;
    }

    /**道具背包*/
    itemBag = this.createGoodsBag(ItemBag);
    /**任务背包*/
    taskBag = this.createGoodsBag(ItemBag);
}
