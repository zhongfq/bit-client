import { GoodsVoBag } from "./goods-vo-bag";
import { ItemVo } from "./item-vo";

import proto from "../../../def/proto";
import { app } from "../../../app";
import { Constructor } from "../../../core/dispatcher";
import { TableUtil } from "../../../system/table/table-util";
import { todo } from "node:test";

/**
 * ItemBag 道具
 */
export class ItemBag extends GoodsVoBag<ItemVo> {
    public Hash(t: ItemVo): string | number {
        return t.id;
    }

    init(data: proto.bag.s2c_load) {
        for (const cmdData of data.items) {
            const vo = new ItemVo();
            vo.initByCmd(cmdData as proto.bag.Item);
            this.add(vo);
        }
    }

    protected getVOClass(): Constructor<ItemVo> {
        return ItemVo;
    }

    createByRef(refId: number): ItemVo {
        const clazz = this.getVOClass();
        const vo = new clazz();
        const ref = TableUtil.getTableRow(app.service.table.item, { id: refId });
        /**TODO */
        vo.initByTableRow(ref!);
        return vo;
    }

    getByRef(refId: number): ItemVo | null {
        const tlBag = this.filter(this.getFilterOne(refId));
        if (tlBag) {
            return tlBag[0];
        }
        return null;
    }

    getFilterOne(refId: number) {
        return (t: ItemVo) => {
            if (t == null) {
                return false;
            }
            return t.refId == refId;
        };
    }
}
