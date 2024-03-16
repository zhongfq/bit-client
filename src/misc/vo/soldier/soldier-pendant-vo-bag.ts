import proto from "../../../def/proto";
import { app } from "../../../app";
import { Constructor } from "../../../core/dispatcher";
import { VoBag } from "../vo-base/vo-bag";
import { SoldierPendantVo } from "./soldier-pendant-vo";
import { GoodsVoBag } from "../goods/goods-vo-bag";

export class SoldierPendantBag extends GoodsVoBag<SoldierPendantVo> {
    public Hash(t: SoldierPendantVo): string | number {
        return t.cmd?.id || 0;
    }

    public init(data: proto.soldier.s2c_load_pendant) {
        for (const cmdData of data.pendants) {
            const vo = new SoldierPendantVo();
            vo.initByCmd(cmdData as proto.soldier.PendantInfo);
            this.add(vo);
        }
    }

    protected getVOClass(): Constructor<SoldierPendantVo> {
        return SoldierPendantVo;
    }

    public createByRef(refId: number) {
        const clazz = this.getVOClass();
        const vo = new clazz();
        const ref = app.service.table.soldier.pendant[refId];

        vo.initByTableRow(ref!);
        return vo;
    }

    public getByRef(refId: number): SoldierPendantVo | null {
        const tlBag = this.filter(this.getFilterOne(refId));
        if (tlBag) {
            return tlBag[0];
        }
        return null;
    }

    public getFilterOne(refId: number) {
        return (t: SoldierPendantVo) => {
            if (t == null) {
                return false;
            }
            return t.refId == refId;
        };
    }
}
