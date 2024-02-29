import { b3 } from "../../../../../core/behavior3/behavior";
import { ecs } from "../../../../../core/ecs";

export class SkillComponent extends ecs.Component {
    res: string = "";
    tree: b3.Tree | null = null;
    env: b3.Env | null = null;

    running: boolean = false;
}
