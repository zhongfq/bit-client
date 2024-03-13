import { app } from "../../../app";
import { ecs } from "../../../core/ecs";
import { Mediator } from "../../../core/ui-mediator";
import { Event } from "../../../misc/event";
import { res } from "../../../misc/res";
import { PvpUI } from "../../../ui-runtime/scene/PvpUI";
import { ITMContext } from "../tilemap/tm-def";
import { TMElement, TMObjectElement, TMTileElemet } from "../tilemap/tm-element";
import { CameraComponent } from "./ecs/components/camera-component";
import { TilemapComponent } from "./ecs/components/tilemap-component";
import { CameraSystem } from "./ecs/systems/camera-system";
import { RenderSystem } from "./ecs/systems/render-system";
import { TilemapSystem } from "./ecs/systems/tilemap-system";

@Laya.regClass()
export class PvpContext extends Mediator implements ITMContext {
    public declare owner: PvpUI;

    private _ecs!: ecs.World;
    private _camera!: Laya.Camera;

    public get scene() {
        return this.owner.scene;
    }

    public get scene3D() {
        return this.owner.scene3D;
    }

    public get camera() {
        return (this._camera ||= this.scene3D.getChildByName("Main Camera") as Laya.Camera);
    }

    public get mapDir() {
        return "resources/data/tilemap/pvp";
    }

    public onAddElement(element: TMElement): void {}

    public onDelElement(element: TMElement): void {}

    public override onAwake() {
        this._ecs = new ecs.World();
        this._ecs.addSingletonComponent(CameraComponent);
        this._ecs.addSingletonComponent(TilemapComponent, this);
        this._ecs.addSystem(new TilemapSystem(this));
        this._ecs.addSystem(new CameraSystem(this));
        this._ecs.addSystem(new RenderSystem(this));

        this.on(
            app.service.gm,
            Event.TILEMAP_DEBUG_MODE_UPDATE,
            this.onTilemapDebugModeUpdate,
            this
        );

        Laya.loader.load(res.BATTLE_HP_NUM);
        Laya.loader.load(res.BATTLE_HP_NUM_X);
    }

    public override onUpdate() {
        this.owner.debug.graphics.clear();
        super.onUpdate();
        this._ecs.update(Laya.timer.delta / 1000);
    }

    public onTilemapDebugModeUpdate() {
        const tilemap = this._ecs.getSingletonComponent(TilemapComponent)!;
        const allMap = tilemap.getAllMap();
        allMap.forEach((element) => {
            if (element instanceof TMTileElemet) {
                element.erase();
                element.draw();
            }
        });
        allMap.forEach((element) => {
            if (element instanceof TMObjectElement) {
                element.erase();
                element.draw();
            }
        });
    }
}
