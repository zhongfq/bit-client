import { b3 } from "../../../../../core/behavior3/behavior";
import { RoleComponent, RoleEnv } from "../../ecs/components/role-component";

export class DelBuff extends b3.Process {
    override run(node: b3.Node, env: RoleEnv, target?: RoleComponent[] | RoleComponent) {
        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "DelBuff",
            type: "Action",
            desc: "移除BUFF",
            args: [
                { name: "buff_id", type: "int", desc: "buff id" },
            ],
            input: ["目标单位"],
            doc: `
                + 目标单位不填默认自己`,
        };
    }
}
