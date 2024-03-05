import { b3 } from "../../../../../core/behavior3/behavior";
import { RoleComponent, RoleTreeEnv } from "../../ecs/components/role-component";

export class MoveToPos extends b3.Process {
    override run(node: b3.Node, env: RoleTreeEnv, target?: RoleComponent[] | RoleComponent) {
        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "MoveToPos",
            type: "Action",
            desc: "移动到坐标点",
            args: [
                { name: "x", type: "int?", desc: "x" },
                { name: "y", type: "int?", desc: "y" },
            ],
            input: ["坐标"],
            doc: `
                + 优先输入变量`,
        };
    }
}
