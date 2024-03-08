import { app } from "../../../app";
import { ecs } from "../../../core/ecs";
import { Mediator } from "../../../core/ui-mediator";
import { Event } from "../../../misc/event";
import { PveUI } from "../../../ui-runtime/scene/PveUI";
import { ElementCreator } from "../pve-server/pve-defs";
import { ICommandSender, PveServer } from "../pve-server/pve-server";
import { CameraComponent } from "./ecs/components/camera-component";
import { JoystickComponent } from "./ecs/components/joystick-component";
import { Tilemap, TilemapComponent } from "./ecs/components/tilemap-component";
import { ElementAnimation, ElementComponent } from "./ecs/components/troop-component";
import { CameraSystem } from "./ecs/systems/camera-system";
import { CommandSystem } from "./ecs/systems/command-system";
import { JoystickSystem } from "./ecs/systems/joystick-system";
import { MovementSystem } from "./ecs/systems/movement-system";
import { RenderSystem } from "./ecs/systems/render-system";
import { TilemapSystem } from "./ecs/systems/tilemap-system";

@Laya.regClass()
export class PveContext extends Mediator {
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

    override onAwake() {
        this._ecs = new ecs.World();
        this._ecs.addSingletonComponent(CameraComponent);
        this._ecs.addSingletonComponent(JoystickComponent);
        this._ecs.addSingletonComponent(TilemapComponent);
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

    onTileMapAddElement(element: Tilemap.Element) {
        if (element instanceof Tilemap.MonsterElement) {
            console.log("AddMonster", element.x, element.y, element.id);
            const position = new Laya.Vector3();
            position.x = element.realX;
            position.z = element.realY;
            this.sender.addMonster(element.id, position);
        }
    }

    onTileMapDelElement(element: Tilemap.Element) {
        if (element instanceof Tilemap.MonsterElement) {
            console.log("DelMonster", element.x, element.y, element.id);
            const position = new Laya.Vector3();
            position.x = element.realX;
            position.z = element.realY;
            this.sender.removeMonster(element.id, position);
        }
    }

    onMapClickHandler() {
        const tilemapSystem = this._ecs.getSystem(TilemapSystem);

        if (this._selectedDynamicElement) {
            const element = tilemapSystem?.getDynamicElementByUid(this._selectedDynamicElement);
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

        const element = tilemapSystem?.getElementByPos(
            x,
            y,
            Tilemap.LayerName.Dynamic
        ) as Tilemap.DynamicElement;
        if (element) {
            element.showBlock();
            this._selectedDynamicElement = element.uid;
        }
    }

    onTilemapDebugModeUpdate() {
        const tilemapSystem = this._ecs.getSystem(TilemapSystem);
        const allMap = tilemapSystem?.getAllMap();
        allMap?.forEach((element) => {
            if (element instanceof Tilemap.TileElemet) {
                element.erase();
                element.draw();
            }
        });
        allMap?.forEach((element) => {
            if (element instanceof Tilemap.ObjectElement) {
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

    click(x: number, z: number) {
        this.server.click(x, z);
    }
}
