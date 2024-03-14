import { app } from "../../../app";
import { ecs } from "../../../core/ecs";
import { Mediator } from "../../../core/ui-mediator";
import { MathUtil } from "../../../core/utils/math-util";
import proto from "../../../def/proto";
import { errcode } from "../../../def/protocol";
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

    /** 我的主城 eid */
    public homeEid: number = 0;

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
        this._startGame();

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
        let isDown = false;

        const lastPos = new Laya.Vector2();
        const currPos = new Laya.Vector2();

        // 计算拖动距离
        const ray = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3());
        const lastXZPos = new Laya.Vector3();
        const currXZPos = new Laya.Vector3();

        const selectedTile = this.scene3D.getChildByPath("world-map/selected") as Laya.Sprite3D;
        selectedTile.active = false;

        const camera = this._ecs.getSingletonComponent(CameraComponent)!;

        const viewportPointToXZ = (point: Laya.Vector2, out: Laya.Vector3) => {
            this.camera.viewportPointToRay(point, ray);
            const t = -ray.origin.y / ray.direction.y;
            ray.direction.scale(t, ray.direction);
            ray.origin.vadd(ray.direction, out);
        };

        clickArea.on(Laya.Event.MOUSE_DOWN, (e: Laya.Event) => {
            const target = e.target as Laya.Sprite;
            clickEnabled = true;
            isDown = true;
            lastPos.setValue(target.mouseX, target.mouseY);
        });

        clickArea.on(Laya.Event.MOUSE_MOVE, (e: Laya.Event) => {
            if (!isDown) {
                return;
            }
            const target = e.target as Laya.Sprite;
            currPos.setValue(target.mouseX, target.mouseY);
            if (!clickEnabled) {
                if (selectedTile.active) {
                    selectedTile.active = false;
                }
                viewportPointToXZ(lastPos, lastXZPos);
                viewportPointToXZ(currPos, currXZPos);
                lastXZPos.vsub(currXZPos, lastXZPos);
                camera.focus.vadd(lastXZPos, camera.focus);
                lastPos.cloneFrom(currPos);
            } else if (Laya.Vector2.distance(lastPos, currPos) > 5) {
                //判断出问题
                clickEnabled = false;
            }
        });

        clickArea.on(Laya.Event.MOUSE_UP, (e: Laya.Event) => {
            isDown = false;
            if (clickEnabled) {
                const target = e.target as Laya.Sprite;
                currPos.setValue(target.mouseX, target.mouseY);
                viewportPointToXZ(currPos, currXZPos);
                currXZPos.x = Math.floor(currXZPos.x + 0.5);
                currXZPos.y = selectedTile.transform.position.y;
                currXZPos.z = Math.floor(currXZPos.z + 0.5);
                console.log("select tile:", currXZPos.x, currXZPos.z);
                selectedTile.active = true;
                selectedTile.transform.position = currXZPos;
            }
        });

        clickArea.on(Laya.Event.MOUSE_OUT, (e: Laya.Event) => {
            isDown = false;
        });
    }

    private async _startGame() {
        const data = await app.service.pvp.requestLoad();
        if (data.err !== errcode.OK) {
            console.log(`load pvp world error: ${data.err}`);
            return;
        }
        this.homeEid = data.homeEid;
        const camera = this._ecs.getSingletonComponent(CameraComponent)!;
        const homePos = data.homePos as proto.world.Position;
        camera.focus.set(homePos.x, 0, homePos.y);
        app.service.pvp.requestChangeViewport(camera.focus);
    }
}
