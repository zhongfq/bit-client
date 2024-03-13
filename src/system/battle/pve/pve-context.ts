import { app } from "../../../app";
import { ecs } from "../../../core/ecs";
import { Mediator } from "../../../core/ui-mediator";
import { BattleConf } from "../../../def/battle";
import { Event } from "../../../misc/event";
import { res } from "../../../misc/res";
import { PveUI } from "../../../ui-runtime/scene/PveUI";
import { PveServer } from "../pve-server/pve-server";
import { ITMContext, TMLayerName } from "../tilemap/tm-def";
import {
    TMBuildingElement,
    TMDynamicElement,
    TMElement,
    TMMonsterElement,
    TMObjectElement,
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

@Laya.regClass()
export class PveContext extends Mediator implements ITMContext {
    declare owner: PveUI;

    focusRole: number = 0;

    private _sender!: CommandSender;

    private _pveServer!: PveServer;

    private _ecs!: ecs.World;
    private _camera!: Laya.Camera;

    private _selectedDynamicElement?: number;

    get scene() {
        return this.owner.scene;
    }

    get scene3D() {
        return this.owner.scene3D;
    }

    get camera() {
        return (this._camera ||= this.scene3D.getChildByName("Main Camera") as Laya.Camera);
    }

    get sender() {
        return this._sender;
    }

    get mapDir() {
        return "resources/data/tilemap/pve";
    }

    override onAwake() {
        this._ecs = new ecs.World();
        this._ecs.addSingletonComponent(CameraComponent);
        this._ecs.addSingletonComponent(JoystickComponent);
        this._ecs.addSingletonComponent(TilemapComponent, this);
        this._ecs.addSystem(new JoystickSystem(this));
        this._ecs.addSystem(new CommandSystem(this));
        this._ecs.addSystem(new MovementSystem(this));
        this._ecs.addSystem(new CameraSystem(this));
        this._ecs.addSystem(new RenderSystem(this));
        this._ecs.addSystem(new TilemapSystem(this));
        this._pveServer = new PveServer(this._ecs.getSystem(CommandSystem)!);
        this._sender = new CommandSender(this._pveServer);

        this.owner.mapClickArea.on(Laya.Event.CLICK, this, this.onMapClickHandler);
        this.on(
            app.service.gm,
            Event.TILEMAP_DEBUG_MODE_UPDATE,
            this.onTilemapDebugModeUpdate,
            this
        );

        Laya.loader.load(res.BATTLE_HP_NUM);
        Laya.loader.load(res.BATTLE_HP_NUM_X);
    }

    override async onStart() {
        this._pveServer.start();
    }

    override onUpdate() {
        this.owner.debug.graphics.clear();
        super.onUpdate();
        this._pveServer.update(Laya.timer.delta / 1000);
        this._ecs.update(Laya.timer.delta / 1000);
    }

    onAddElement(element: TMElement) {
        if (element instanceof TMMonsterElement) {
            const position = new Laya.Vector3(element.realX, 0, element.realY);
            this.sender.addMonster(element.id, position);
        } else if (element instanceof TMBuildingElement) {
            const table = app.service.table;
            const buildingRow = table.battleBuilding[element.id];
            const entityRow = table.battleEntity[buildingRow.battle_entity];
            const position = new Laya.Vector3(element.x, 0, element.y);
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
        }
    }

    onDelElement(element: TMElement) {
        if (element instanceof TMMonsterElement) {
            const position = new Laya.Vector3(element.realX, 0, element.realY);
            this.sender.removeMonster(element.id, position);
        } else if (element instanceof TMBuildingElement) {
            const table = app.service.table;
            const buildingRow = table.battleBuilding[element.id];
            const entityRow = table.battleEntity[buildingRow.battle_entity];
            const position = new Laya.Vector3(element.x, 0, element.y);
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
        }
    }

    onMapClickHandler() {
        const tilemap = this._ecs.getSingletonComponent(TilemapComponent)!;

        if (this._selectedDynamicElement) {
            tilemap.ecs;
            const element = tilemap.getDynamicElementByUid(this._selectedDynamicElement);
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

        const element = tilemap.getElementByPos(x, y, TMLayerName.Dynamic) as TMDynamicElement;
        if (element) {
            element.showBlock();
            this._selectedDynamicElement = element.uid;
        }
    }

    onTilemapDebugModeUpdate() {
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

class CommandSender {
    constructor(readonly server: PveServer) {}

    joystickStart(eid: number, degree: number) {
        this.server.joystickStart(eid, degree);
    }

    joystickStop(eid: number) {
        this.server.joystickStop(eid);
    }

    addMonster(tid: number, position: Laya.Vector3) {
        this.server.addMonster(tid, position);
    }

    removeMonster(tid: number, position: Laya.Vector3) {
        this.server.removeMonster(tid, position);
    }

    addBuilding(tid: number, position: Laya.Vector3) {
        this.server.addBuilding(tid, position);
    }

    removeBuilding(tid: number, position: Laya.Vector3) {
        this.server.removeBuilding(tid, position);
    }

    addCollection(tid: number, position: Laya.Vector3) {
        this.server.addCollection(tid, position);
    }

    removeCollection(tid: number, position: Laya.Vector3) {
        this.server.removeCollection(tid, position);
    }

    click(x: number, z: number) {
        this.server.click(x, z);
    }
}
