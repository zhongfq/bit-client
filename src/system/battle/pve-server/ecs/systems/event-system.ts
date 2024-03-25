import * as ecs from "../../../../../core/ecs";
import { PveServer } from "../../pve-server";

export class EventSystem extends ecs.System {
    public declare context: PveServer;

    public override update(dt: number): void {}
}
