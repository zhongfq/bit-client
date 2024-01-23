import { ecs } from "../../../../core/ecs";
import { TroopAi } from "../../behavior3/troop-ai";

export class AiComponent extends ecs.Component {
    tree!: TroopAi;
}
