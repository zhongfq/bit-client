import { ecs } from "../../../core/ecs";
import { Mediator } from "../../../core/ui-mediator";
import { PveUI } from "../../../ui-runtime/scene/PveUI";
import { ICommandSender, PveServer } from "../pve-server/pve-server";
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
export class PveContext extends Mediator implements ICommandSender {
    declare owner: PveUI;

    mainRole: number = 0;

    private _pveServer!: PveServer;

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

    override onAwake(): void {
        this._pveServer = new PveServer(this);

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
    }

    override async onStart() {}

    override onUpdate(): void {
        super.onUpdate();
        this._ecs.update(Laya.timer.delta / 1000);
    }

    // ------------------------------------------------------------------------
    // ICommandReceiver
    // ------------------------------------------------------------------------
    moveStart(eid: number, degree: number) {}

    moveChange(eid: number, degree: number) {}

    moveStop(eid: number) {}

    // ------------------------------------------------------------------------
    // ICommandSender
    // ------------------------------------------------------------------------
    chopTree(eid: number, target: number): void {}
}
