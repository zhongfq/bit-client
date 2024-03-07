import { ecs } from "../../../../../core/ecs";
import { PveContext } from "../../pve-context";
import {
    MovementComponent,
    MovementType,
    TrackType,
    TransformComponent,
} from "../components/movement-component";

const tmpVector3 = new Laya.Vector3();

export class MovementSystem extends ecs.System {
    constructor(readonly context: PveContext) {
        super();
    }

    update(dt: number): void {
        this.ecs.getComponents(MovementComponent).forEach((movement) => {
            if (movement.rotationInterpolation.percent < 1) {
                this._updateRotation(movement, dt);
            }
            if (movement.type == MovementType.NONE) {
                return;
            } else if (
                movement.type == MovementType.TARGET &&
                movement.trackType === TrackType.CURVE
            ) {
                // TODO
                /* empty */
            } else {
                this._updateWithVelocity(movement, dt);
            }
        });
    }

    private _updateWithTrack(movement: MovementComponent, dt: number) {}

    private _updateWithVelocity(movement: MovementComponent, dt: number) {
        const transform = movement.getComponent(TransformComponent)!;
        const position = transform.position;
        const velocity = movement.velocity;
        const target = movement.target;

        position.x += velocity.x * dt;
        position.z += velocity.z * dt;
        transform.flag |= TransformComponent.POSITION;

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
                movement.target = null;
                movement.type == MovementType.NONE;
            }
        }
    }

    private _updateRotation(movement: MovementComponent, dt: number) {
        const transform = movement.getComponent(TransformComponent)!;
        const interpolation = movement.rotationInterpolation;
        const last = interpolation.percent;
        let ratio = last + dt * interpolation.rate;
        if (ratio > 1) {
            ratio = 1;
        }
        interpolation.percent = ratio;
        const rotation = transform.rotation + interpolation.rotation * (ratio - last);
        transform.rotation = rotation % 360;
        transform.flag |= TransformComponent.ROTATION;
    }
}
