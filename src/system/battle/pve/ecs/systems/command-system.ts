import { ecs } from "../../../../../core/ecs";
import { PveContext } from "../../pve-context";

export class CommandSystem extends ecs.System {
    constructor(readonly context: PveContext) {
        super();
    }

    override update(dt: number): void {}
}
