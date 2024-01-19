import { ecs } from "../../../../core/ecs";
import { World } from "../../world";

export class RenderSystem extends ecs.System {
    constructor(readonly context: World) {
        super();
    }

    onAddComponent(component: ecs.Component): void {}

    onRemoveComponent(component: ecs.Component): void {}

    update(dt: number): void {}
}
