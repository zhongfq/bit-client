import { ecs } from "../../../../../core/ecs";
import { MathUtil } from "../../../../../core/utils/math-util";
import { PveContext } from "../../pve-context";
import { JoystickComponent } from "../components/joystick-component";

export class JoystickSystem extends ecs.System {
    constructor(readonly context: PveContext) {
        super();
    }

    override onCreate() {
        const joystick = this.ecs.getSingletonComponent(JoystickComponent)!;
        const owner = this.context.owner;
        joystick.initX = owner.joystick.x;
        joystick.initY = owner.joystick.y;
        joystick.initHeight = owner.joystickArea.height;
        owner.joystickGroup.on(Laya.Event.MOUSE_DOWN, this, this.onJoysticHandler);
        owner.joystickGroup.on(Laya.Event.MOUSE_MOVE, this, this.onJoysticHandler);
        owner.joystickGroup.on(Laya.Event.MOUSE_UP, this, this.onJoysticHandler);
    }

    onJoysticHandler(e: Laya.Event) {
        const joystick = this.ecs.getSingletonComponent(JoystickComponent)!;
        const owner = this.context.owner;
        if (!(joystick.pressStart || e.type === Laya.Event.MOUSE_DOWN)) {
            return;
        }
        if (e.type === Laya.Event.MOUSE_DOWN) {
            joystick.pressStart = Laya.Point.create();
            joystick.pressStart.copy(owner.joystickGroup.getMousePoint());
            owner.joystick.x = joystick.pressStart.x;
            owner.joystick.y = joystick.pressStart.y;
            owner.joystick.alpha = 1;
            owner.joystickArea.height = Laya.stage.height;
        } else if (e.type === Laya.Event.MOUSE_UP) {
            joystick.pressStart?.recover();
            joystick.pressStart = null;
            joystick.degree = Number.MAX_VALUE;
            owner.joystick.x = joystick.initX;
            owner.joystick.y = joystick.initY;
            owner.joystick.alpha = 0.3;
            owner.indicator.x = 0;
            owner.indicator.y = 0;
            owner.joystickArea.height = joystick.initHeight;
            this.context.sender.moveStop(this.context.focusRole);
        } else {
            const maxOffset = owner.joystick.width / 2;
            const current = owner.joystickGroup.getMousePoint();
            current.x -= joystick.pressStart!.x;
            current.y -= joystick.pressStart!.y;
            const distance = current.distance(0, 0);
            if (distance > maxOffset) {
                const scale = maxOffset / distance;
                current.x *= scale;
                current.y *= scale;
            }
            owner.indicator.x = current.x;
            owner.indicator.y = current.y;

            const rad = Math.atan2(current.y, current.x);
            const degree = Math.floor((MathUtil.toDegree(rad) + 360) % 360);
            if (Math.abs(joystick.degree - degree) >= 5) {
                joystick.degree = degree;
                this.context.sender.moveStart(this.context.focusRole, degree);
            }
        }
    }

    update(dt: number) {}
}
