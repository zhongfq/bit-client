import { b3 } from "../../../../../core/behavior3/behavior";
import { RoleComponent, RoleEnv } from "../../ecs/components/role-component";

export class GetSkillTarget extends b3.Process {
    override run(node: b3.Node, env: RoleEnv, target?: RoleComponent[] | RoleComponent) {
        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "GetSkillTarget",
            type: "Action",
            desc: "获取技能目标",
            args: [{ name: "multi", type: "boolean?", desc: "多个目标" }],
            input: ["目标单位"],
            doc: `
                + 此节点只能在技能行为树使用!
                + 默认返回单个目标
                + 如果勾选多个目标，返回数组
            `,
        };
    }
}
