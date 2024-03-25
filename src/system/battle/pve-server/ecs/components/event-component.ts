import * as ecs from "../../../../../core/ecs";
import { BattleEventRow } from "../../../../../def/table";

export class EventComponent extends ecs.Component {
    public eventId!: number;
    public x!: number;
    public y!: number;
    public data!: BattleEventRow;
}
