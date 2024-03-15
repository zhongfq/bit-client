import * as ecs from "../../../../../core/ecs";
import { PvpContext } from "../../pvp-context";
import { MovementComponent, TransformComponent } from "../components/movement-component";

export class MovementSystem extends ecs.System {
    public declare context: PvpContext;

    public override onAddComponent(component: ecs.Component) {
        if (component instanceof MovementComponent) {
            const movement = component;
            movement.current.cursor = 0;
            movement.next.cursor = 0;
        }
    }

    public override update(dt: number) {
        this.ecs.getComponents(MovementComponent).forEach((movement) => {
            if (movement.speed <= 0) {
                return;
            }
            const current = movement.current;
            const next = movement.next;
            const transform = movement.entity.getComponent(TransformComponent)!;
            const position = transform.position;
            next.cursor += movement.speed * dt;
            if (next.cursor >= 1) {
                const paths = movement.paths;
                ++current.cursor;
                if (current.cursor < paths.length - 1) {
                    next.cursor = 0;
                    current.cloneFrom(paths[current.cursor]);
                    next.cloneFrom(paths[current.cursor + 1]);
                } else {
                    movement.speed = 0;
                    movement.paths.forEach((p) => {
                        Laya.Pool.free(p);
                    });
                    movement.paths.length = 0;
                }
            } else {
                position.x = current.x + (next.x - current.x) * next.cursor;
                position.z = current.z + (next.z - current.z) * next.cursor;
                transform.flag |= TransformComponent.POSITION;
            }
        });
    }
}
