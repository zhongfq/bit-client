import { app } from "../app";
import { Constructor } from "../core/dispatcher";
import { Service } from "../core/service";
import { DataUtil } from "../system/table/table-util";
import { NetworkService } from "../system/network/network-service";
import { GoodsVo } from "./vo/goods/goods-vo";
import { GoodsVoBag } from "./vo/goods/goods-vo-bag";
import { ItemBag } from "./vo/goods/item-vo-bag";
import { TaskBag } from "./vo/task/task-vo-bag";
import { VO } from "./vo/vo-base/vo";
import { VOBag } from "./vo/vo-base/vo-bag";
import { ItemConf } from "../def/item";

export class VoUtil {
    /**
     * 创建一个背包(不具备删的功能)
     * map
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

    static getVo(refId: number) {
        let refData = DataUtil.getRef(app.service.table.item, { id: refId });
        if (refData?.sub_type == ItemConf.ITEM_TYPE.MONEY) {
            return app.service.user.monye.get(refId);
        } else {
            return app.service.bag.itemBag.getByRef(refId);
        }
    }
    static getNumber(refId: number): number {
        let vo = VoUtil.getVo(refId);
        if (vo) {
            return vo.goodsNumber;
        }
        return 0;
    }
}
