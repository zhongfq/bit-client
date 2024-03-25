import * as ecs from "../../../../../core/ecs";
import { Tilemap } from "../../../tilemap/tilemap";
import { ITMContext } from "../../../tilemap/tm-def";

export class TilemapComponent extends Tilemap implements ecs.SingletonComponent {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    public constructor(public readonly ecs: ecs.World, context: ITMContext) {
        super(context);
    }
}
