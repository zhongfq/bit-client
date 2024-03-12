import { PvpUIBase } from "./PvpUI.generated";

const { regClass } = Laya;

@regClass()
export class PvpUI extends PvpUIBase {
    private _grounds?: Laya.Sprite3D;
    private _shadows?: Laya.Sprite3D;
    private _roles?: Laya.Sprite3D;

    override get scene3D(): Laya.Scene3D {
        return this._scene3D;
    }

    get grounds() {
        return (this._grounds ||= this.scene3D.getChildByName("grounds") as Laya.Sprite3D);
    }

    get shadows() {
        return (this._shadows ||= this.scene3D.getChildByName("shadows") as Laya.Sprite3D);
    }

    get roles() {
        return (this._roles ||= this.scene3D.getChildByName("roles") as Laya.Sprite3D);
    }
}
