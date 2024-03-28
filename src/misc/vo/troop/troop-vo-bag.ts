import proto from "../../../def/proto";
import { app } from "../../../app";
import { Constructor } from "../../../core/dispatcher";
import { VoBag } from "../vo-base/vo-bag";
import { GoodsVoBag } from "../goods/goods-vo-bag";
import { TroopVo } from "./troop-vo";

export class TroopBag extends VoBag<TroopVo> {
    public Hash(t: TroopVo): string | number {
        return t.cmd?.idx || 0;
    }

    public init(data: proto.troop.s2c_load) {
        for (const cmdData of data.troopList) {
            const vo = new TroopVo();
            vo.initByCmd(cmdData);
            this.add(vo);
        }
    }

    protected getVOClass(): Constructor<TroopVo> {
        return TroopVo;
    }

    public createByRef(refId: number) {
        const clazz = this.getVOClass();
        const vo = new clazz();
        const ref = app.service.table.soldier.pendant[refId];

        vo.initByTableRow(ref!);
        return vo;
    }

    public getByRef(refId: number): TroopVo | null {
        const tlBag = this.filter(this.getFilterOne(refId));
        if (tlBag) {
            return tlBag[0];
        }
        return null;
    }

    public getFilterOne(refId: number) {
        return (t: TroopVo) => {
            if (t == null) {
                return false;
            }
            return t.refId == refId;
        };
    }
}
