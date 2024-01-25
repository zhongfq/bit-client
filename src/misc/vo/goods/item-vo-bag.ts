import { GoodsVoBag } from "./goods-vo-bag";
import { ItemVo } from "./item-vo";

import proto from "../../../def/proto";
import { app } from "../../../app";
import { Constructor } from "../../../core/dispatcher";
import { DataUtil } from "../../../system/data/data-util";

/**
 * ItemBag 道具
 */
export class ItemBag extends GoodsVoBag<ItemVo> {
    public Hash(t: ItemVo): string | number {
        return t.id;
    }

    init(data: proto.bag.s2c_load) {
        for (let cmdData of data.items) {
            let vo = new ItemVo();
            vo.initByCmd(cmdData as proto.bag.Item);
            this.add(vo);
        }
    }
    protected getVOClass(): Constructor<ItemVo> {
        return ItemVo;
    }
    createByRef(refId: number) {
        let clazz = this.getVOClass();
        let vo = new clazz();
        let ref = DataUtil.getRef(app.service.data.itemTable, { id: refId });
        // TODO: check ref
        vo.initByRef(ref!);
        return vo;
    }

    getByRef(refId: number): ItemVo | null {
        let tlBag = this.filter(this.getFilterOne(refId));
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
