import * as ecs from "../../../../../core/ecs";
import { PveServer } from "../../pve-server";
import { ElementComponent } from "../components/element-component";
import { MovementComponent, TransformComponent } from "../components/movement-component";

export class MovementSystem extends ecs.System {
    public declare context: PveServer;

    public override onRemoveComponent(component: ecs.Component): void {}

    public override update(dt: number): void {
        this.ecs.getComponents(MovementComponent).forEach((movement) => {
            if (movement.speed <= 0) {
                return;
            }

            const transform = movement.getComponent(TransformComponent)!;
            const position = transform.position;
            const { velocity, target } = movement;
            const { x: velX, z: velZ } = velocity;

            if (velX !== 0 || velZ !== 0) {
                position.x += velX * dt;
                position.z += velZ * dt;
            } else {
                const totalDis = Laya.Vector3.distance(position, target);
                const dtDis = movement.speed * dt;

                if (dtDis < totalDis) {
                    Laya.Vector3.lerp(position, target, dtDis / totalDis, position);
                } else {
                    position.cloneFrom(target);
                    movement.speed = 0;
                    this.context.moveStop(movement.getComponent(ElementComponent)!);
                }
            }
        });
    }
}
