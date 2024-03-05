import { b3 } from "../../../../../core/behavior3/behavior";
import { RoleComponent, RoleTreeEnv } from "../../ecs/components/role-component";

export class GetPos extends b3.Process {
    override run(node: b3.Node, env: RoleTreeEnv, target?: RoleComponent[] | RoleComponent) {
        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "GetPos",
            type: "Action",
            desc: "获取单位坐标",
            args: [],
            input: ["目标"],
            output: ["坐标"],
            doc: `
                + 如果输入变量为空，则默认为行为树当前归属的实体`,
        };
    }
}
