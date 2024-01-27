import { ecs } from "../../../../core/ecs";
import { WorldContext } from "../../world-context";
import {
    MovementComponent,
    MovementType,
    TransformComponent,
    TrackType,
} from "../components/movement-component";

export class MovementSystem extends ecs.System {
    constructor(readonly context: WorldContext) {
        super();
    }

    update(dt: number): void {
        this.ecs.getComponents(MovementComponent).forEach((movement) => {
            if (movement.type == MovementType.NONE) {
                return;
            } else if (
                movement.type == MovementType.TARGET &&
                movement.trackType === TrackType.CURVE
            ) {
            } else {
                this._updateWithSpeed(movement, dt);
            }
            if (movement.rotation.ratio < 1) {
                this._updateRotation(movement, dt);
            }
        });
    }

    private _updateWithTrack(movement: MovementComponent, dt: number) {}

    private _updateWithSpeed(movement: MovementComponent, dt: number) {
        const transform = movement.getComponent(TransformComponent)!;
        const position = transform.position;
        const interpolation = movement.positionInterpolation;
        const speed = movement.speed;
        let target = movement.target;

        if (movement.type === MovementType.PATH && !target) {
            if (movement.paths.length > 1) {
                const p1 = movement.paths.shift();
                const p2 = movement.paths[0];
            }
        }

        if (interpolation.ratio < 1) {
            const last = interpolation.ratio;
            let ratio = last + dt * (1 / 0.2);
            if (ratio > 1) {
                ratio = 1;
            }
            const step = ratio - last;
            interpolation.ratio = ratio;
            position.x += interpolation.x * step;
            position.z += interpolation.z * step;
        }

        position.x += speed.x * dt;
        position.z += speed.z * dt;
        transform.flag |= TransformComponent.POSITION;

        if (target) {
            const offsetX = target.x - position.x;
            const offsetZ = target.z - position.z;
            if (offsetX === 0 || offsetX * speed.x < 0) {
                position.x = target.x;
                speed.x = 0;
            }
            if (offsetZ === 0 || offsetZ * speed.z < 0) {
                position.z = target.z;
                speed.z = 0;
            }
            if (speed.x === 0 && speed.z === 0) {
                movement.target = null;
                if (movement.type !== MovementType.PATH) {
                }
            }
        }
    }

    private _updateRotation(movement: MovementComponent, dt: number) {
        const rotation = movement.rotation;
        const transform = movement.getComponent(TransformComponent)!;
        // 0.2s完成转向
        rotation.ratio += dt * (1 / 0.2);
        if (rotation.ratio > 1) {
            rotation.ratio = 1;
        }
        transform.rotation = rotation.from + (rotation.to - rotation.from) * rotation.ratio;
        transform.flag |= TransformComponent.ROTATION;
    }
}
