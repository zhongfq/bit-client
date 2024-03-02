import { ecs } from "../../../../../core/ecs";
import { PveServer } from "../../pve-server";
import { MovementComponent, TransformComponent } from "../components/movement-component";

export class MovementSystem extends ecs.System {
    constructor(readonly context: PveServer) {
        super();
    }

    override update(dt: number): void {
        dt /= 1000;
        this.ecs.getComponents(MovementComponent).forEach((movement) => {
            const transform = movement.getComponent(TransformComponent)!;
            const position = transform.position;
            const { speed, target } = movement;

            position.x += speed.x * dt;
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
                }
            }
        });
    }
}
