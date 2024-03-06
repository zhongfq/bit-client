import { app } from "../../app";
import { WorldUI } from "../../ui-runtime/scene/WorldUI";

const { regClass, property } = Laya;

@regClass()
export class WorldMediator extends Laya.Script {
    declare owner: WorldUI;

    private _initHeight: number = 0;
    private _initPosition: Laya.Point = new Laya.Point();
    private _pressStart: Laya.Point | null = null;

    override onAwake() {
        this._initHeight = this.owner.joystickArea.height;
        this._initPosition.setTo(this.owner.joystick.x, this.owner.joystick.y);

        this.owner.joystickArea.on(Laya.Event.MOUSE_DOWN, this, this.onJoysticHandler);
        this.owner.joystickArea.on(Laya.Event.MOUSE_MOVE, this, this.onJoysticHandler);
        this.owner.joystickArea.on(Laya.Event.MOUSE_UP, this, this.onJoysticHandler);
    }

    onJoysticHandler(e: Laya.Event) {
        if (!(this._pressStart || e.type === Laya.Event.MOUSE_DOWN)) {
            return;
        }
        const joystick = this.owner.joystick;
        const indicator = this.owner.indicator;
        if (e.type === Laya.Event.MOUSE_DOWN) {
            this._pressStart = Laya.Point.create();
            this._pressStart.copy(this.owner.joystickGroup.getMousePoint());
            joystick.x = this._pressStart.x;
            joystick.y = this._pressStart.y;
            joystick.alpha = 1;
            this.owner.joystickArea.height = Laya.stage.height;
        } else if (e.type === Laya.Event.MOUSE_UP) {
            this._pressStart?.recover();
            this._pressStart = null;
            joystick.x = this._initPosition.x;
            joystick.y = this._initPosition.y;
            joystick.alpha = 0.3;
            indicator.x = 0;
            indicator.y = 0;
            this.owner.joystickArea.height = this._initHeight;
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
        }
    }
}
