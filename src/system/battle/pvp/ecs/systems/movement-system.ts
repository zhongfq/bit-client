import * as ecs from "../../../../../core/ecs";
import { MathUtil } from "../../../../../core/utils/math-util";
import { PvpContext } from "../../pvp-context";
import { MovementComponent, TransformComponent } from "../components/movement-component";
import { ElementAnimation } from "../components/render-component";

export class MovementSystem extends ecs.System {
    public declare context: PvpContext;

    private _setup(movement: MovementComponent) {
        const index = movement.index;
        const p0 = movement.paths[index];
        const p1 = movement.paths[index + 1];
        movement.target.cloneFrom(p1);
        const transform = movement.getComponent(TransformComponent)!;
        transform.rotation = MathUtil.toDegree(Math.atan2(-(p1.z - p0.z), p1.x - p0.x));
        transform.flag |= TransformComponent.ROTATION;
    }

    public override update(dt: number) {
        this.ecs.getComponents(MovementComponent).forEach((movement) => {
            if (movement.speed <= 0) {
                return;
            }

            const transform = movement.getComponent(TransformComponent)!;
            const position = transform.position;
            const target = movement.target;

            if (movement.flag & MovementComponent.UPDATE) {
                movement.flag &= ~MovementComponent.UPDATE;
                this._setup(movement);
            }

            const totalDis = Laya.Vector3.distance(position, target);
            const dtDis = movement.speed * dt;

            if (dtDis < totalDis) {
                Laya.Vector3.lerp(position, target, dtDis / totalDis, position);
            } else {
                position.cloneFrom(target);
                if (++movement.index < movement.paths.length - 1) {
                    this._setup(movement);
                } else {
                    movement.speed = 0;
                    this.context.playAnim(movement.eid, ElementAnimation.IDLE);
                }
            }
            transform.flag |= TransformComponent.POSITION;
        });
    }
}
