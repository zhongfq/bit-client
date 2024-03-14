import proto from "../../../def/proto";
import { app } from "../../../app";
import { Constructor } from "../../../core/dispatcher";
import { VoBag } from "../vo-base/vo-bag";
import { TrainVo } from "./train-vo";

export class TrainBag extends VoBag<TrainVo> {
    public Hash(t: TrainVo): string | number {
        return t.cmd?.id || 0;
    }

    public init(data: proto.soldier.s2c_load_train) {
        for (const cmdData of data.trains) {
            const vo = new TrainVo();
            vo.initByCmd(cmdData as proto.soldier.TrainInfo);
            this.add(vo);
        }
    }

    protected getVOClass(): Constructor<TrainVo> {
        return TrainVo;
    }

    public createByRef(refId: number) {
        const clazz = this.getVOClass();
        const vo = new clazz();
        const ref = app.service.table.role.train[refId];
        vo.initByTableRow(ref!);
        return vo;
    }

    public getByRef(refId: number): TrainVo | null {
        const tlBag = this.filter(this.getFilterOne(refId));
        if (tlBag) {
            return tlBag[0];
        }
        return null;
    }

    public getFilterOne(refId: number) {
        return (t: TrainVo) => {
            if (t == null) {
                return false;
            }
            return t.refId == refId;
        };
    }
}
