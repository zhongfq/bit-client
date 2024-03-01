import { b3 } from "../../../../../core/behavior3/behavior";
import { RoleComponent, RoleEnv } from "../../ecs/components/role-component";

export class NormalAttack extends b3.Process {
    override run(node: b3.Node, env: RoleEnv, target?: RoleComponent[] | RoleComponent) {
        if (target instanceof Array) {
            for (const v of target) {
                env.context.launchSkill(env.owner, v);
            }
            if (target.length > 0) {
                return b3.Status.SUCCESS;
            }
        } else {
            env.context.launchSkill(env.owner, target);
            return b3.Status.SUCCESS;
        }

        return b3.Status.FAILURE;
    }

    override get descriptor() {
        return {
            name: "NormalAttack",
            type: "Action",
            desc: "普通攻击",
            input: ["{目标}"],
            doc: `
                + 目标可以是单个实体，也可以是数组`,
        };
    }
}
