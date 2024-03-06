import { ecs } from "../../../core/ecs";
import { Mediator } from "../../../core/ui-mediator";
import { PveUI } from "../../../ui-runtime/scene/PveUI";
import { ElementCreator } from "../pve-server/pve-defs";
import { ICommandSender, PveServer } from "../pve-server/pve-server";
import { CameraComponent } from "./ecs/components/camera-component";
import { JoystickComponent } from "./ecs/components/joystick-component";
import { TilemapComponent } from "./ecs/components/tilemap-component";
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
}

class CommandSender {
    constructor(readonly server: PveServer) {}

    moveStart(eid: number, degree: number) {
        this.server.receiver.moveStart(eid, degree);
    }

    moveStop(eid: number) {
        this.server.receiver.moveStop(eid);
    }
}
