import { app } from "../../app";
import { ecs } from "../../core/ecs";
import { Mediator } from "../../core/ui-mediator";
import proto from "../../def/proto";
import { WorldUI } from "../../ui-runtime/scene/WorldUI";
import { CameraComponent } from "./ecs/components/camera-component";
import { JoystickComponent } from "./ecs/components/joystick-component";
import { Tilemap, TilemapComponent } from "./ecs/components/tilemap-component";
import { AISystem } from "./ecs/systems/ai-system";
import { CameraSystem } from "./ecs/systems/camera-system";
import { CommandSystem } from "./ecs/systems/command-system";
import { JoystickSystem } from "./ecs/systems/joystick-system";
import { MovementSystem } from "./ecs/systems/movement-system";
import { RenderSystem } from "./ecs/systems/render-system";
import { TilemapSystem } from "./ecs/systems/tilemap-system";
import { TroopSystem } from "./ecs/systems/troop-system";

@Laya.regClass()
export class WorldContext extends Mediator {
    declare owner: WorldUI;

    private _ecs!: ecs.World;
    private _camera!: Laya.Camera;

    troop!: proto.troop.Troop;
    _selectedDynamicElement?: number;

    get scene() {
        return this.owner.scene;
    }

    get scene3D() {
        return this.owner.scene3D;
    }

    get camera() {
        return (this._camera ||= this.scene3D.getChildByName("Main Camera") as Laya.Camera);
    }

    override onAwake(): void {
        this._ecs = new ecs.World();
        this._ecs.addSingletonComponent(CameraComponent);
        this._ecs.addSingletonComponent(JoystickComponent);
        this._ecs.addSingletonComponent(TilemapComponent);
        this._ecs.addSystem(new JoystickSystem(this));
        this._ecs.addSystem(new CommandSystem(this));
        this._ecs.addSystem(new AISystem(this));
        this._ecs.addSystem(new TroopSystem(this));
        this._ecs.addSystem(new MovementSystem(this));
        this._ecs.addSystem(new CameraSystem(this));
        this._ecs.addSystem(new RenderSystem(this));
        this._ecs.addSystem(new TilemapSystem(this));

        this.owner.mapClickArea.on(Laya.Event.CLICK, this, this.onMapClickHandler);
    }

    override async onStart() {
        await app.service.gm.requestGM("setup_troop 1 101 1 10");
        await app.service.gm.requestGM("join_world");

        this.troop = (await app.service.world.requestTroopLoad()).troopList[0] as proto.troop.Troop;

        await app.service.world.requestChangeViewport({ x: 0, y: 0 });
    }

    override onUpdate(): void {
        super.onUpdate();
        this._ecs.update(Laya.timer.delta / 1000);
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

        const x = Math.floor(groundPos.x + 0.5);
        const y = Math.floor(groundPos.z + 0.5);

        const element = tilemapSystem?.getElementByPos(x, y, Tilemap.LayerName.Dynamic) as Tilemap.DynamicElement;
        if (element) {
            element.showBlock();
            this._selectedDynamicElement = element.uid;
        }

        console.log("mouse", point.x, point.y);
        console.log("origin", ray.origin.x, ray.origin.y, ray.origin.z);
        console.log("direction", ray.direction.x, ray.direction.y, ray.direction.z);
    }
}
