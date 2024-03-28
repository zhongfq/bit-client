import proto from "../../../def/proto";
import { app } from "../../../app";
import { Constructor } from "../../../core/dispatcher";
import { VoBag } from "../vo-base/vo-bag";
import { SoldierVo } from "./soldier-vo";
import { GoodsVoBag } from "../goods/goods-vo-bag";

export class SoldierBag extends GoodsVoBag<SoldierVo> {
    public Hash(t: SoldierVo): string | number {
        return t.cmd?.id || 0;
    }

    public init(data: proto.soldier.s2c_load_soldier) {
        for (const cmdData of data.soldiers) {
            const vo = new SoldierVo();
            vo.initByCmd(cmdData as proto.soldier.SoldierInfo);
            this.add(vo);
        }
    }

    protected getVOClass(): Constructor<SoldierVo> {
        return SoldierVo;
    }

    public createByRef(refId: number) {
        const clazz = this.getVOClass();
        const vo = new clazz();
        const ref = app.service.table.soldier.soldier[refId];
        vo.initByTableRow(ref!);
        return vo;
    }

    public getByRef(refId: number): SoldierVo | null {
        const tlBag = this.filter(this.getFilterOne(refId));
        if (tlBag) {
            return tlBag[0];
        }
        return null;
    }

    public getFilterOne(refId: number) {
        return (t: SoldierVo) => {
            if (t == null) {
                return false;
            }
            return t.refId == refId;
        };
    }

    public setSoldierTroopId(soldierId: number, troopId: number) {
        const soldierVo = this.get(soldierId);
        if (soldierVo) {
            soldierVo.troopId = troopId;
        }
    }
}
