import { b3 } from "../../../../../core/behavior3/behavior";
import { ecs } from "../../../../../core/ecs";
import { RoleTreeEnv } from "./role-component";

export class AiComponent extends ecs.Component {
    res: string = "";
    tree: b3.Tree | null = null;
    env: RoleTreeEnv | null = null;
}
