import { b3 } from "../../../../../core/behavior3/behavior";
import { RoleComponent, RoleEnv } from "../../ecs/components/role-component";

export class MoveToAtkPos extends b3.Process {
    override run(node: b3.Node, env: RoleEnv, target?: RoleComponent[] | RoleComponent) {
        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "MoveToAtkPos",
            type: "Action",
            desc: "释放技能",
            args: [{ name: "idx", type: "int", desc: "技能编号" }],
            input: ["目标"],
            doc: `
                + 目标可以是单个实体，也可以是数组`,
        };
    }
}
