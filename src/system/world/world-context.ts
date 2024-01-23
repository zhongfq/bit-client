import { app } from "../../app";
import { Callback } from "../../core/dispatcher";
import proto from "../../def/proto.js";
import { ecs } from "../../core/ecs";
import { Mediator } from "../../core/ui-mediator";
import { AISystem } from "./ecs/systems/ai-system";
import { CommandSystem } from "./ecs/systems/command-system";
import { MovementSystem } from "./ecs/systems/movement-system";
import { RenderSystem } from "./ecs/systems/render-system";
import { CameraComponent } from "./ecs/components/camera-component";
import { CameraSystem } from "./ecs/systems/camera-system";
import { JoystickComponent } from "./ecs/components/joystick-component";
import { JoystickSystem } from "./ecs/systems/joystick-system";
import { WorldUI } from "../../ui-runtime/scene/WorldUI";

@Laya.regClass()
export class WorldContext extends Mediator {
    declare owner: WorldUI;

    private _ecs!: ecs.World;

    troop!: proto.troop.Troop;

    get scene() {
        return this.owner.scene;
    }

    get scene3D(): Laya.Scene3D {
        return this.owner.scene3D;
    }

    onAwake(): void {
        this._ecs = new ecs.World();
        this._ecs.addSingletonComponent(CameraComponent);
        this._ecs.addSingletonComponent(JoystickComponent);
        this._ecs.addSystem(new JoystickSystem(this));
        this._ecs.addSystem(new CommandSystem(this));
        this._ecs.addSystem(new AISystem(this));
        this._ecs.addSystem(new MovementSystem(this));
        this._ecs.addSystem(new CameraSystem(this));
        this._ecs.addSystem(new RenderSystem(this));
    }

    async onStart() {
        await app.service.gm.requestGM("setup_troop 1 101 1 10");
        await app.service.gm.requestGM("join_world");

        this.troop = (await app.service.world.requestTroopLoad()).troopList[0] as proto.troop.Troop;

        await app.service.world.requestChangeViewport({ x: 0, y: 0 });
    }

    onUpdate(): void {
        this._ecs.update(Laya.timer.delta / 1000);
    }
}
