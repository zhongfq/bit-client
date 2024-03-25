import * as ecs from "../../../../../core/ecs";
import { BattleEventRow } from "../../../../../def/table";

export class EventComponent extends ecs.Component {
    public dispatching: boolean = false;
    public data!: BattleEventRow;
}
