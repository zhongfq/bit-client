import { ecs } from "../../../../core/ecs";
import { GamePlayer } from "../../game-player";

export class GamepadSystem extends ecs.System {
    constructor(readonly context: GamePlayer) {
        super();
    }

    onCreate() {}

    onAddComponent(component: ecs.Component): void {}

    onRemoveComponent(component: ecs.Component): void {}

    update(dt: number): void {}
}
