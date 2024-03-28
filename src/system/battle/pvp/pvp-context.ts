import { app } from "../../../app";
import * as ecs from "../../../core/ecs";
import { Mediator } from "../../../core/ui-mediator";
import proto from "../../../def/proto";
import { errcode } from "../../../def/protocol";
import { Event } from "../../../misc/event";
import { res } from "../../../misc/res";
import { ActionMenuUI } from "../../../ui-runtime/prefab/battle/pvp/ActionMenuUI";
import { PvpUI } from "../../../ui-runtime/scene/PvpUI";
import { ITMContext, TMMode } from "../tilemap/tm-def";
import { TMElement, TMDebugElement, TMTileElemet } from "../tilemap/tm-element";
import { TMUtil } from "../tilemap/tm-util";
import { CameraComponent } from "./ecs/components/camera-component";
import { ElementAnimation } from "./ecs/components/render-component";
import { TilemapComponent } from "./ecs/components/tilemap-component";
import { CameraSystem } from "./ecs/systems/camera-system";
import { CommandSystem } from "./ecs/systems/command-system";
import { MovementSystem } from "./ecs/systems/movement-system";
import { RenderSystem } from "./ecs/systems/render-system";
import { TilemapSystem } from "./ecs/systems/tilemap-system";

@Laya.regClass()
export class PvpContext extends Mediator implements ITMContext {
    public declare owner: PvpUI;

    /** 我的主城 eid */
    public homeEid: number = 0;

    private _ecs!: ecs.World;
    private _camera!: Laya.Camera;

    private _actionMenu?: ActionMenuUI;

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

    public get mode() {
        return TMMode.PVP;
    }

    public onAddElement(element: TMElement): void {}

    public onDelElement(element: TMElement): void {}

    public override onAwake() {
        this._ecs = new ecs.World(this);
        this._ecs.addSingletonComponent(CameraComponent);
        this._ecs.addSingletonComponent(TilemapComponent);
        this._ecs.addSystem(CommandSystem);
        this._ecs.addSystem(TilemapSystem);
        this._ecs.addSystem(MovementSystem);
        this._ecs.addSystem(CameraSystem);
        this._ecs.addSystem(RenderSystem);

        this.autoDestroy(this._ecs);

        this.$(app.service.gm).on(
            Event.TILEMAP_DEBUG_MODE_UPDATE,
            this._onTilemapDebugModeUpdate,
            this
        );

        this._initMapClickArea();
        this._startGame();

        app.loader.loadPrefab(res.BATTLE_HP_NUM, () => true);
        app.loader.loadPrefab(res.BATTLE_HP_NUM_X, () => true);
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
            if (element instanceof TMDebugElement) {
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
        const debugFocus = this.scene3D.getChildByPath("world-map/debugFocus") as Laya.Sprite3D;
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
                clickEnabled = false;
                this._actionMenu?.removeSelf();
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
                selectedTile.active = true;
                selectedTile.transform.position = currXZPos;
                console.log("select tile:", currXZPos.x, currXZPos.z);
                // TOOD：判断当前tile的情况，显示菜单显项
                this.showActionMenu(currXZPos);
            } else {
                const position = debugFocus.transform.position;
                position.cloneFrom(camera.focus);
                position.x = Math.floor(position.x);
                position.z = Math.floor(position.z);
                debugFocus.transform.position = position;
                app.service.pvp.requestChangeViewport(camera.focus);
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

    public playAnim(eid: number, name: ElementAnimation) {
        this._ecs.getSystem(CommandSystem)?.playAnim(eid, name);
    }

    public async showActionMenu(currXZPos: Laya.Vector3) {
        const troop = app.service.troop.list[0];
        if (!troop || !troop.eid) {
            console.log("no troop");
            return;
        }

        if (!this._actionMenu) {
            const checker = () => !this.owner.destroyed;
            this._actionMenu = await app.loader.create(res.battle.PVP_ACTION_MENU, checker);
            this.autoDestroy(this._actionMenu);
        }
        this._actionMenu.btnAttack.offAll();
        this._actionMenu.btnMove.offAll();
        this.owner.addChild(this._actionMenu);

        const out = new Laya.Vector4();
        this.camera.worldToViewportPoint(currXZPos, out);
        this._actionMenu.pos(out.x + 50, out.y - 30);

        this._actionMenu.btnAttack.onClick(() => {});

        this._actionMenu.btnMove.onClick(() => {
            this._actionMenu?.removeSelf();
            app.service.pvp.requestTroopMoveTo(troop.eid!, { x: currXZPos.x, y: currXZPos.z });
        });
    }
}
