import { ecs } from "../../../../../core/ecs";
import { PveServer } from "../../pve-server";

class MovementSystem extends ecs.System {
    constructor(readonly context: PveServer) {
        super();
    }

    override update(dt: number): void {}
}
