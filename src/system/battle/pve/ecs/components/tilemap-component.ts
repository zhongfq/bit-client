/* eslint-disable @typescript-eslint/no-shadow */
import { ecs } from "../../../../../core/ecs";
import { Tilemap } from "../../../tilemap/tilemap";
import { ITMContext } from "../../../tilemap/tm-def";

export class TilemapComponent extends Tilemap implements ecs.SingletonComponent {
    constructor(readonly ecs: ecs.World, context: ITMContext) {
        super(context);
    }
}
