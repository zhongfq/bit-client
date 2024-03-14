import * as ecs from "../../../../../core/ecs";
import { PveServer } from "../../pve-server";
import { ElementComponent } from "../components/element-component";
import { MovementComponent, TransformComponent } from "../components/movement-component";

export class MovementSystem extends ecs.System {
    public constructor(public readonly context: PveServer) {
        super();
    }

    public override onRemoveComponent(component: ecs.Component): void {}

    public override update(dt: number): void {
        this.ecs.getComponents(MovementComponent).forEach((movement) => {
            const transform = movement.getComponent(TransformComponent)!;
            const position = transform.position;
            const { velocity, target } = movement;
            let { x: velX, z: velZ } = velocity;

            position.x += velX * dt;
            position.z += velZ * dt;

            if (target) {
                const offsetX = target.x - position.x;
                const offsetZ = target.z - position.z;
                let changed = false;
                if (offsetX === 0 || offsetX * velX < 0) {
                    position.x = target.x;
                    velX = 0;
                    velocity.x = 0;
                    changed = true;
                }
                if (offsetZ === 0 || offsetZ * velZ < 0) {
                    position.z = target.z;
                    velZ = 0;
                    velocity.z = 0;
                    changed = true;
                }
                if (changed) {
                    if (velX === 0 && velZ === 0) {
                        movement.target = undefined;
                        this.context.moveStop(movement.getComponent(ElementComponent)!);
                    } else {
                        this.context.moveStart(
                            movement.getComponent(ElementComponent)!,
                            velocity,
                            movement.target
                        );
                    }
                }
            }
        });
    }
}
