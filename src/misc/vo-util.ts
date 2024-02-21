import { app } from "../app";
import { Constructor } from "../core/dispatcher";
import { Service } from "../core/service";
import { TableUtil } from "../system/table/table-util";
import { NetworkService } from "../system/network/network-service";
import { GoodsVo } from "./vo/goods/goods-vo";
import { GoodsVoBag } from "./vo/goods/goods-vo-bag";
import { ItemBag } from "./vo/goods/item-vo-bag";
import { TaskBag } from "./vo/task/task-vo-bag";
import { VO } from "./vo/vo-base/vo";
import { VoBag } from "./vo/vo-base/vo-bag";
import { ItemConf } from "../def/item";
import { MoneyVo } from "./vo/money/money-vo";
import { GeneratedMoneyRow } from "../def/table.generated";
import { ItemMoneyRow } from "../def/table";

export class VoUtil {
    /**
     * 创建一个背包(不具备删的功能)
     * map
     */

    static createBag<T extends VoBag<VO<any, any>>>(clazz: Constructor<T>): T {
        const bag = new clazz();
        return bag;
    }

    /**
     * 创建一个道具背包(具有增查删改的功能)
     */
    static createGoodsBag<T extends GoodsVoBag<GoodsVo<any, any>>>(clazz: Constructor<T>): T {
        const bag = this.createBag(clazz);
        return bag;
    }

    static createVo(refId: number): GoodsVo<any> {
        const refData = TableUtil.getRef(app.service.table.item, { id: refId });
        if (refData?.sub_type == ItemConf.ITEM_TYPE.MONEY) {
            const vo = new MoneyVo();
            const args = (refData as ItemMoneyRow).args;
            const voRef = TableUtil.getRef(app.service.table.money, { id: args.money_id });
            vo.initByTableRow(voRef as GeneratedMoneyRow);
            return vo;
        } else {
            return app.service.bag.itemBag.createByRef(refId);
        }
    }

    static getVo(refId: number) {
        const refData = TableUtil.getRef(app.service.table.item, { id: refId });
        if (refData?.sub_type == ItemConf.ITEM_TYPE.MONEY) {
            const args = (refData as ItemMoneyRow).args;
            return app.service.user.monye.get(args.money_id);
        } else {
            return app.service.bag.itemBag.getByRef(refId);
        }
    }

    static getNumber(refId: number): number {
        const vo = VoUtil.getVo(refId);
        if (vo) {
            return vo.goodsNumber;
        }
        return 0;
    }
}
