import { Constructor } from "../core/dispatcher";
import { Service } from "../core/service";
import { NetworkService } from "../system/network/network-service";
import { GoodsVo } from "./vo/goods/goods-vo";
import { GoodsVoBag } from "./vo/goods/goods-vo-bag";
import { ItemBag } from "./vo/goods/item-vo-bag";
import { TaskBag } from "./vo/task/task-vo-bag";
import { VO } from "./vo/vo-base/vo";
import { VOBag } from "./vo/vo-base/vo-bag";

export class VoUtil {
    /**
     * 创建一个背包(不具备删的功能)
     */
    static createBag<T extends VOBag<VO<any, any>>>(clazz: Constructor<T>): T {
        let bag = new clazz();
        return bag;
    }
    /**
     * 创建一个道具背包(具有增查删改的功能)
     */
    static createGoodsBag<T extends GoodsVoBag<GoodsVo<any, any>>>(clazz: Constructor<T>): T {
        let bag = this.createBag(clazz);
        return bag;
    }
}
