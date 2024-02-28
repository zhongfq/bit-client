import { VoBag } from "../vo-base/vo-bag";
import { GoodsVo } from "./goods-vo";

/**
 * GoodsBag
 */
export abstract class GoodsVoBag<T extends GoodsVo = GoodsVo> extends VoBag<T> {
    /**
     * 根据refId跟goodsType创建一个只有ref的VO
     */
    abstract createByRef(refId: number, goodsType?: number): T;
    /**
     * 根据refId跟goodsType获取VO,没有时返回null
     */
    abstract getByRef(refId: number, goodsType?: number): T | null;
    /**
     * 精准筛选出一个的函数。
     */
    // abstract GetFilterOne(refId: number, goodsType?: number): (t: T) => boolean
}
