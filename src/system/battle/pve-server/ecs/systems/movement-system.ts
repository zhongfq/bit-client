import { ecs } from "../../../../../core/ecs";
import { PveServer } from "../../pve-server";
import { MovementComponent } from "../components/movement-component";

class MovementSystem extends ecs.System {
    constructor(readonly context: PveServer) {
        super();
    }

    override update(dt: number): void {
        this.ecs.getComponents(MovementComponent).forEach((movement) => {});
    }
}
