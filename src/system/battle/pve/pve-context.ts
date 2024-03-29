import { app } from "../../../app";
import * as ecs from "../../../core/ecs";
import { Mediator } from "../../../core/ui-mediator";
import { BattleConf } from "../../../def/battle";
import { Event } from "../../../misc/event";
import { res } from "../../../misc/res";
import { PveUI } from "../../../ui-runtime/scene/PveUI";
import { PveServer } from "../pve-server/pve-server";
import { ITMContext, TMLayerName, TMMode } from "../tilemap/tm-def";
import {
    TMBuildingElement,
    TMObjectElement,
    TMElement,
    TMEventElement,
    TMMonsterElement,
    TMDebugElement,
    TMTileElemet,
} from "../tilemap/tm-element";
import { CameraComponent } from "./ecs/components/camera-component";
import { JoystickComponent } from "./ecs/components/joystick-component";
import { TilemapComponent } from "./ecs/components/tilemap-component";
import { CameraSystem } from "./ecs/systems/camera-system";
import { CommandSystem } from "./ecs/systems/command-system";
import { JoystickSystem } from "./ecs/systems/joystick-system";
import { MovementSystem } from "./ecs/systems/movement-system";
import { RenderSystem } from "./ecs/systems/render-system";
import { TilemapSystem } from "./ecs/systems/tilemap-system";
import { TruckCollectSystem } from "./ecs/systems/truck-collect-system";

@Laya.regClass()
export class PveContext extends Mediator implements ITMContext {
    public declare owner: PveUI;

    public focusRole: number = 0;

    private _sender!: CommandSender;

    private _pveServer!: PveServer;

    private _eidCount: number = 0;
    private _ecs!: ecs.World;
    private _camera!: Laya.Camera;

    private _selectedObjectElement?: number;

    public get scene() {
        return this.owner.scene;
    }

    public get scene3D() {
        return this.owner.scene3D;
    }

    public get camera() {
        return (this._camera ||= this.scene3D.getChildByName("Main Camera") as Laya.Camera);
    }

    public get sender() {
        return this._sender;
    }

    public get mapDir() {
        return "resources/data/tilemap/pve";
    }

    public get mode() {
        return TMMode.PVE;
    }

    public override onAwake() {
        this._ecs = new ecs.World(this);
        this._ecs.addSingletonComponent(CameraComponent);
        this._ecs.addSingletonComponent(JoystickComponent);
        this._ecs.addSingletonComponent(TilemapComponent);
        this._ecs.addSystem(JoystickSystem);
        this._ecs.addSystem(CommandSystem);
        this._ecs.addSystem(MovementSystem);
        this._ecs.addSystem(CameraSystem);
        this._ecs.addSystem(RenderSystem);
        this._ecs.addSystem(TilemapSystem);
        this._ecs.addSystem(TruckCollectSystem);
        this._pveServer = new PveServer(this._ecs.getSystem(CommandSystem)!);
        this._sender = new CommandSender(this._pveServer);
        this.autoDestroy(this._ecs, this._pveServer);

        this.owner.mapClickArea.on(Laya.Event.CLICK, this, this.onMapClickHandler);
        this.$(app.service.gm).on(
            Event.TILEMAP_DEBUG_MODE_UPDATE,
            this.onTilemapDebugModeUpdate,
            this
        );

        app.loader.loadPrefab(res.BATTLE_HP_NUM, () => true);
        app.loader.loadPrefab(res.BATTLE_HP_NUM_X, () => true);
    }

    public override async onStart() {
        this._pveServer.start();
    }

    public override onUpdate() {
        this.owner.debug.graphics.clear();
        this._pveServer.update(Laya.timer.delta / 1000);
        this._ecs.update(Laya.timer.delta / 1000);
        super.onUpdate();
    }

    public obtainEid() {
        return --this._eidCount;
    }

    public onAddElement(element: TMElement) {
        if (element instanceof TMMonsterElement) {
            const position = new Laya.Vector3(element.realX, 0, element.realY);
            this.sender.addMonster(element.id, position);
        } else if (element instanceof TMBuildingElement) {
            const table = app.service.table;
            const buildingRow = table.battleBuilding[element.id];
            const entityRow = table.battleEntity[buildingRow.battle_entity];
            const position = new Laya.Vector3(element.gridX, 0, element.gridY);
            switch (entityRow.etype) {
                case BattleConf.ENTITY_TYPE.BUILDING:
                    this.sender.addBuilding(element.id, position);
                    break;
                case BattleConf.ENTITY_TYPE.WOOD:
                case BattleConf.ENTITY_TYPE.FOOD:
                case BattleConf.ENTITY_TYPE.STONE:
                    this.sender.addCollection(element.id, position);
                    break;
            }
        } else if (element instanceof TMEventElement) {
            // TODO: 事件元素的处理
            console.log("add event", element);
            const position = new Laya.Vector3(element.gridX, 0, element.gridY);
            this.sender.addEvent(element.id, position);
        }
    }

    public onDelElement(element: TMElement) {
        if (element instanceof TMMonsterElement) {
            const position = new Laya.Vector3(element.realX, 0, element.realY);
            this.sender.removeMonster(element.id, position);
        } else if (element instanceof TMBuildingElement) {
            const table = app.service.table;
            const buildingRow = table.battleBuilding[element.id];
            const entityRow = table.battleEntity[buildingRow.battle_entity];
            const position = new Laya.Vector3(element.gridX, 0, element.gridY);
            switch (entityRow.etype) {
                case BattleConf.ENTITY_TYPE.BUILDING:
                    this.sender.removeBuilding(element.id, position);
                    break;
                case BattleConf.ENTITY_TYPE.WOOD:
                case BattleConf.ENTITY_TYPE.FOOD:
                case BattleConf.ENTITY_TYPE.STONE:
                    this.sender.removeCollection(element.id, position);
                    break;
            }
        } else if (element instanceof TMEventElement) {
            const position = new Laya.Vector3(element.gridX, 0, element.gridY);
            this.sender.removeEvent(element.id, position);
        }
    }

    public onMapClickHandler() {
        const tilemap = this._ecs.getSingletonComponent(TilemapComponent)!;

        if (this._selectedObjectElement) {
            tilemap.ecs;
            const element = tilemap.getObjectElementByUid(this._selectedObjectElement);
            if (element) {
                element.hideBlock();
            }
        }

        const point = new Laya.Vector2();
        point.x = Laya.stage.mouseX;
        point.y = Laya.stage.mouseY;

        const ray = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3());
        this.camera.viewportPointToRay(point, ray);

        const t = -ray.origin.y / ray.direction.y;
        ray.direction.scale(t, ray.direction);

        const groundPos = new Laya.Vector3();
        ray.origin.vadd(ray.direction, groundPos);

        this.sender.click(groundPos.x, groundPos.z);

        const x = Math.floor(groundPos.x + 0.5);
        const y = Math.floor(groundPos.z + 0.5);

        const element = tilemap.getElementByPos(x, y, TMLayerName.Object) as TMObjectElement;
        if (element) {
            element.showBlock();
            this._selectedObjectElement = element.uid;
        }
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
            if (element instanceof TMDebugElement) {
                element.erase();
                element.draw();
            }
        });
    }
}

class CommandSender {
    public constructor(public readonly server: PveServer) {}

    public joystickStart(eid: number, degree: number) {
        this.server.joystickStart(eid, degree);
    }

    public joystickStop(eid: number) {
        this.server.joystickStop(eid);
    }

    public addMonster(tid: number, position: Laya.Vector3) {
        this.server.addMonster(tid, position);
    }

    public removeMonster(tid: number, position: Laya.Vector3) {
        this.server.removeMonster(tid, position);
    }

    public addBuilding(tid: number, position: Laya.Vector3) {
        this.server.addBuilding(tid, position);
    }

    public addEvent(tid: number, position: Laya.Vector3) {
        this.server.addEvent(tid, position);
    }

    public removeEvent(tid: number, position: Laya.Vector3) {
        this.server.removeEvent(tid, position);
    }

    public removeBuilding(tid: number, position: Laya.Vector3) {
        this.server.removeBuilding(tid, position);
    }

    public addCollection(tid: number, position: Laya.Vector3) {
        this.server.addCollection(tid, position);
    }

    public removeCollection(tid: number, position: Laya.Vector3) {
        this.server.removeCollection(tid, position);
    }

    public rescueSoldier(eid: number) {
        this.server.rescueSoldier(eid);
    }

    public click(x: number, z: number) {
        this.server.click(x, z);
    }
}
