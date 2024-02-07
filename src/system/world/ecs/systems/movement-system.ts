import { ecs } from "../../../../core/ecs";
import { WorldContext } from "../../world-context";
import {
    MovementComponent,
    MovementType,
    TrackType,
    TransformComponent,
} from "../components/movement-component";
import { HeroComponent } from "../components/troop-component";

const tmpVector3 = new Laya.Vector3();

export class MovementSystem extends ecs.System {
    constructor(readonly context: WorldContext) {
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
                this._updateWithSpeed(movement, dt);
            }
        });
    }

    private _updateWithTrack(movement: MovementComponent, dt: number) {}

    private _updateWithSpeed(movement: MovementComponent, dt: number) {
        const transform = movement.getComponent(TransformComponent)!;
        const position = transform.position;
        const speed = movement.speed;
        const target = movement.target;

        if (movement.type === MovementType.PATH && !target) {
            if (movement.paths.length > 1) {
                const p1 = movement.paths.shift();
                const p2 = movement.paths[0];
            }
        }

        if (movement.positionInterpolation.percent < 1) {
            const interpolation = movement.positionInterpolation;
            const last = interpolation.percent;
            let ratio = last + dt * interpolation.rate;
            if (ratio > 1) {
                ratio = 1;
            }
            const step = ratio - last;
            interpolation.percent = ratio;
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
