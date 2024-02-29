import { Env, Tree } from "../../../../../core/behavior3/behavior";
import { ecs } from "../../../../../core/ecs";

export class AiComponent extends ecs.Component {
    res: string = "";
    tree: Tree | null = null;
    env: Env | null = null;
}
