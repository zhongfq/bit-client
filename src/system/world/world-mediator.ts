import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { errcode, opcode } from "../../def/protocol";
import proto from "../../def/proto.js";
import { WorldUI } from "../../ui-runtime/scene/WorldUI";
import { CameraController } from "./camera-controller";

const { regClass, property } = Laya;

@regClass()
export class WorldMediator extends Mediator {
    //declare owner : Laya.Sprite3D;
    declare owner: WorldUI;

    private _initPosition: Laya.Point = new Laya.Point();
    private _pressStart: Laya.Point | null = null;

    onAwake() {
        this._initPosition.setTo(this.owner.joystick.x, this.owner.joystick.y);
        this.owner.joystickGroup.on(Laya.Event.MOUSE_DOWN, this, this.onJoysticHandler);
        this.owner.joystickGroup.on(Laya.Event.MOUSE_MOVE, this, this.onJoysticHandler);
        this.owner.joystickGroup.on(Laya.Event.MOUSE_UP, this, this.onJoysticHandler);

        this.on(app.service.network, opcode.user.s2c_login, this._onLogin, this);
    }

    async onStart() {}

    private async _onLogin(data: proto.user.s2c_login) {
        if (data.err === errcode.OK) {
            await app.service.gm.requestGM("setup_troop 1 101 1 10");
            await app.service.gm.requestGM("join_world");
            await app.service.world.requestChangeViewport({ x: 0, y: 0 });

            const troop = await app.service.world.requestTroopLoad();
        }
    }

    onJoysticHandler(e: Laya.Event) {
        if (!(this._pressStart || e.type === Laya.Event.MOUSE_DOWN)) {
            return;
        }
        const joystick = this.owner.joystick;
        const indicator = this.owner.indicator;
        const cameraController = this.owner.scene3D.getComponent(CameraController);
        if (e.type === Laya.Event.MOUSE_DOWN) {
            this._pressStart = Laya.Point.create();
            this._pressStart.copy(this.owner.joystickGroup.getMousePoint());
            joystick.x = this._pressStart.x;
            joystick.y = this._pressStart.y;
            joystick.alpha = 1;
        } else if (e.type === Laya.Event.MOUSE_UP) {
            this._pressStart?.recover();
            this._pressStart = null;
            joystick.x = this._initPosition.x;
            joystick.y = this._initPosition.y;
            joystick.alpha = 0.3;
            indicator.x = 0;
            indicator.y = 0;
            cameraController.stopRun();
        } else {
            const maxOffset = joystick.width / 2;
            const current = this.owner.joystickGroup.getMousePoint();
            current.x -= this._pressStart!.x;
            current.y -= this._pressStart!.y;
            const distance = current.distance(0, 0);
            if (distance > maxOffset) {
                const scale = maxOffset / distance;
                current.x *= scale;
                current.y *= scale;
            }
            indicator.x = current.x;
            indicator.y = current.y;

            const rad = Math.atan2(-current.y, current.x);
            cameraController.setTargetRoation((rad * 180) / Math.PI + 90);
        }
    }
}
