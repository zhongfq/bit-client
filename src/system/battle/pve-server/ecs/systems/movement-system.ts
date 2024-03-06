import { ecs } from "../../../../../core/ecs";
import { PveServer } from "../../pve-server";
import { ElementComponent } from "../components/element-component";
import { MovementComponent, TransformComponent } from "../components/movement-component";

export class MovementSystem extends ecs.System {
    constructor(readonly context: PveServer) {
        super();
    }

    override onRemoveComponent(component: ecs.Component): void {}

    override update(dt: number): void {
        this.ecs.getComponents(MovementComponent).forEach((movement) => {
            const transform = movement.getComponent(TransformComponent)!;
            const position = transform.position;
            const { speed, target } = movement;
            const { x: speedX, z: speedZ } = speed;

            position.x += speedX * dt;
            position.z += speedZ * dt;

            if (target) {
                const offsetX = target.x - position.x;
                const offsetZ = target.z - position.z;
                let changed = false;
                if (offsetX === 0 || offsetX * speedX < 0) {
                    position.x = target.x;
                    speed.x = 0;
                    changed = true;
                }
                if (offsetZ === 0 || offsetZ * speedZ < 0) {
                    position.z = target.z;
                    speed.z = 0;
                    changed = true;
                }
                if (changed) {
                    if (speedX === 0 && speedZ === 0) {
                        movement.target = null;
                        this.context.moveStop(movement.getComponent(ElementComponent)!);
                    }
                }
            }
        });
    }
}
