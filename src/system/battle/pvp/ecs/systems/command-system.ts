import * as ecs from "../../../../../core/ecs";
import { PvpContext } from "../../pvp-context";

export class CommandSystem extends ecs.System {
    public constructor(public readonly context: PvpContext) {
        super();
    }

    public override update(dt: number) {}
}
