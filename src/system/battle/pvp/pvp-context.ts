import { app } from "../../../app";
import { ecs } from "../../../core/ecs";
import { Mediator } from "../../../core/ui-mediator";
import { MathUtil } from "../../../core/utils/math-util";
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
            this._onTilemapDebugModeUpdate,
            this
        );

        this._initMapClickArea();

        Laya.loader.load(res.BATTLE_HP_NUM);
        Laya.loader.load(res.BATTLE_HP_NUM_X);
    }

    public override onUpdate() {
        this.owner.debug.graphics.clear();
        super.onUpdate();
        this._ecs.update(Laya.timer.delta / 1000);
    }

    private _onTilemapDebugModeUpdate() {
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

    private _initMapClickArea() {
        const clickArea = this.owner.mapClickArea;
        let clickEnabled = false;
        let isClickDown = false;

        const p0 = new Laya.Vector3();
        const p1 = new Laya.Vector3();

        const camera = this._ecs.getSingletonComponent(CameraComponent)!;
        const mat = new Laya.Matrix4x4();

        clickArea.on(Laya.Event.MOUSE_DOWN, (e: Laya.Event) => {
            const target = e.target as Laya.Sprite;
            clickEnabled = true;
            isClickDown = true;
            Laya.Matrix4x4.createRotationY(
                MathUtil.toRadian(this.camera.transform.localRotationEulerY),
                mat
            );
            p0.set(target.mouseX, 0, target.mouseY);
            p1.set(target.mouseX, 0, target.mouseY);
            Laya.Vector3.transformCoordinate(p0, mat, p0);
            Laya.Vector3.transformCoordinate(p1, mat, p1);
        });

        clickArea.on(Laya.Event.MOUSE_MOVE, (e: Laya.Event) => {
            if (!isClickDown) {
                return;
            }
            const target = e.target as Laya.Sprite;
            if (!clickEnabled) {
                p1.set(target.mouseX, 0, target.mouseY);
                Laya.Vector3.transformCoordinate(p1, mat, p1);
                p0.vsub(p1, p0);
                p0.scale(0.01, p0);
                camera.focus.vadd(p0, camera.focus);
                p0.cloneFrom(p1);
            } else if (Laya.Vector2.distance(p0, p1) > 5) {
                //判断出问题
                clickEnabled = false;
            } else {
                p1.set(target.mouseX, 0, target.mouseY);
                Laya.Vector3.transformCoordinate(p1, mat, p1);
            }
        });

        clickArea.on(Laya.Event.MOUSE_UP, () => {
            isClickDown = false;
            if (clickEnabled) {
                // const ray = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3());
                // this.camera.viewportPointToRay(endVec2, ray);
                // const t = -ray.origin.y / ray.direction.y;
                // ray.direction.scale(t, ray.direction);
                // const groundPos = new Laya.Vector3();
                // ray.origin.vadd(ray.direction, groundPos);
                // const x = Math.floor(groundPos.x + 0.5);
                // const y = Math.floor(groundPos.z + 0.5);
            }
        });
    }
}
