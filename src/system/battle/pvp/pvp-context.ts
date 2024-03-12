import { ecs } from "../../../core/ecs";
import { Mediator } from "../../../core/ui-mediator";
import { PvpUI } from "../../../ui-runtime/scene/PvpUI";
import { TilemapComponent } from "../pve/ecs/components/tilemap-component";
import { TilemapSystem } from "../pve/ecs/systems/tilemap-system";

@Laya.regClass()
export class PvpContext extends Mediator {
    declare owner: PvpUI;

    private _ecs!: ecs.World;
    private _camera!: Laya.Camera;

    get scene() {
        return this.owner.scene;
    }

    get scene3D() {
        return this.owner.scene3D;
    }

    get camera() {
        return (this._camera ||= this.scene3D.getChildByName("Main Camera") as Laya.Camera);
    }

    override onAwake() {
        this._ecs = new ecs.World();
        this._ecs.addSingletonComponent(TilemapComponent);
        // this._ecs.addSystem(new TilemapSystem(this));
    }
}
