const { regClass } = Laya;
import proto from "../../../def/proto";
import { SoldierVo } from "../../../misc/vo/soldier/soldier-vo";
import { TroopPendantUIBase } from "./TroopPendantUI.generated";

interface OpenData {
    soldierId: number;
    idx: number;
}

@regClass()
export class TroopPendantUI extends TroopPendantUIBase {
    public oepnData!: OpenData;

    public override open(closeOther?: boolean | undefined, param?: any): void {
        this.oepnData = param;
        super.open(closeOther, param);
    }
}
