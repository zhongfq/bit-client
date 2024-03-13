import { GoodsVoBag } from "./goods-vo-bag";
import proto from "../../../def/proto";
import { app } from "../../../app";
import { Constructor } from "../../../core/dispatcher";
import { TableUtil } from "../../../system/table/table-util";
import { HeroVo } from "./hero-vo";

/**
 * ItemBag 道具
 */
export class HeroBag extends GoodsVoBag<HeroVo> {
    public Hash(t: HeroVo): string | number {
        return t.id;
    }

    public init(data: proto.hero.s2c_load) {
        for (const cmdData of data.heroList) {
            const vo = new HeroVo();
            vo.initByCmd(cmdData as proto.hero.IHero);
            this.add(vo);
        }
    }

    protected getVOClass(): Constructor<HeroVo> {
        return HeroVo;
    }

    public createByRef(refId: number): HeroVo {
        const clazz = this.getVOClass();
        const vo = new clazz();
        const ref = TableUtil.getRow(app.service.table.hero, { id: refId });
        /**TODO */
        vo.initByTableRow(ref!);
        return vo;
    }

    public getByRef(refId: number): HeroVo | null {
        const tlBag = this.filter(this.getFilterOne(refId));
        if (tlBag) {
            return tlBag[0];
        }
        return null;
    }

    public getFilterOne(refId: number) {
        return (t: HeroVo) => {
            if (t == null) {
                return false;
            }
            return t.refId == refId;
        };
    }
}
