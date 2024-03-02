import { b3 } from "../../../../../core/behavior3/behavior";
import { ecs } from "../../../../../core/ecs";

export class TreeComponent extends ecs.Component {
    wid: number = 0;
    hp: number = 1;
    maxHp: number = 1;
}
