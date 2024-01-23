import { ecs } from "../../../../core/ecs";
import { WorldContext } from "../../world-context";
import {
    MovementComponent,
    MovementType,
    PositionComponent,
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
            }
            if (movement.type == MovementType.TARGET && movement.trackType === TrackType.CURVE) {
            } else {
                this._updateWithSpeed(movement, dt);
            }
        });
    }

    private _updateWithTrack(movement: MovementComponent, dt: number) {}

    private _updateWithSpeed(movement: MovementComponent, dt: number) {
        const position = movement.getComponent(PositionComponent)!;
        const speed = movement.speed;
        let target = movement.target;

        if (movement.type === MovementType.PATH && !target) {
            if (movement.paths.length > 1) {
                const p1 = movement.paths.shift();
                const p2 = movement.paths[0];
            }
        }

        position.x += speed.x * dt;
        position.y += speed.y * dt;
        position.z += speed.z * dt;

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
}
