const { regClass } = Laya;
import { WorldUIBase } from "./WorldUI.generated";

@regClass()
export class WorldUI extends WorldUIBase {
    override get scene3D(): Laya.Scene3D {
        return this._scene3D;
    }
}
