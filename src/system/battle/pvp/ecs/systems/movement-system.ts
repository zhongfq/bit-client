import * as ecs from "../../../../../core/ecs";
import { MathUtil } from "../../../../../core/utils/math-util";
import { PvpContext } from "../../pvp-context";
import { MovementComponent, TransformComponent } from "../components/movement-component";
import { ElementAnimation } from "../components/render-component";

export class MovementSystem extends ecs.System {
    public declare context: PvpContext;

    private _setup(movement: MovementComponent) {
        const index = movement.index;
        const velocity = movement.velocity;
        const p0 = movement.paths[index];
        const p1 = movement.paths[index + 1];
        movement.target = p1;
        const rad = Math.atan2(p1.z - p0.z, p1.x - p0.x);
        velocity.x = Math.cos(rad) * movement.speed;
        velocity.z = Math.sin(rad) * movement.speed;

        const transform = movement.getComponent(TransformComponent)!;
        transform.rotation = MathUtil.toDegree(Math.atan2(-velocity.z, velocity.x));
        transform.flag |= TransformComponent.ROTATION;
    }

    public override update(dt: number) {
        this.ecs.getComponents(MovementComponent).forEach((movement) => {
            const transform = movement.getComponent(TransformComponent)!;
            const position = transform.position;
            const velocity = movement.velocity;
            const target = movement.target;

            if (movement.flag & MovementComponent.UPDATE) {
                movement.flag &= ~MovementComponent.UPDATE;
                this._setup(movement);
            }

            if (velocity.x !== 0 || velocity.z !== 0) {
                position.x += velocity.x * dt;
                position.z += velocity.z * dt;
                transform.flag |= TransformComponent.POSITION;
            }

            if (target) {
                const offsetX = target.x - position.x;
                const offsetZ = target.z - position.z;
                if (offsetX === 0 || offsetX * velocity.x < 0) {
                    position.x = target.x;
                    velocity.x = 0;
                }
                if (offsetZ === 0 || offsetZ * velocity.z < 0) {
                    position.z = target.z;
                    velocity.z = 0;
                }
                if (velocity.x === 0 && velocity.z === 0) {
                    movement.target = undefined;
                    if (++movement.index < movement.paths.length - 1) {
                        this._setup(movement);
                    } else {
                        this.context.playAnim(movement.eid, ElementAnimation.IDLE);
                    }
                }
            }
        });
    }
}
