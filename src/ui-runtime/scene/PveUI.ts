const { regClass } = Laya;
import { PveUIBase } from "./PveUI.generated";

@regClass()
export class PveUI extends PveUIBase {
    override get scene3D(): Laya.Scene3D {
        return this._scene3D;
    }
}
