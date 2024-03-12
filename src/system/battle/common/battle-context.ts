import { Mediator } from "../../../core/ui-mediator";

@Laya.regClass()
export class BattleContext extends Mediator {
    declare owner: Laya.Scene;

    private _camera!: Laya.Camera;

    get scene() {
        return this.owner.scene;
    }

    get scene3D(): Laya.Scene3D {
        return this.owner.scene3D;
    }

    get camera() {
        return (this._camera ||= this.scene3D.getChildByName("Main Camera") as Laya.Camera);
    }
}

export interface IBattleContext {
    get scene(): Laya.Scene;
    get scene3D(): Laya.Scene3D;
    get camera(): Laya.Camera;
}
