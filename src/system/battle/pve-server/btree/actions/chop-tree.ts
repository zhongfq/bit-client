import { b3 } from "../../../../../core/behavior3/behavior";
import { RoleEnv } from "../../ecs/components/role-component";
import { TreeComponent } from "../../ecs/components/tree-component";

export class ChopTree extends b3.Process {
    override run(node: b3.Node, env: RoleEnv, wood?: TreeComponent) {
        if (!wood) {
            this.warn(node, "not found wood");
            return b3.Status.SUCCESS;
        }

        env.context.chopTree(env.owner, wood);

        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "ChopTree",
            type: "Action",
            desc: "砍树",
            input: ["目标"],
        };
    }
}
