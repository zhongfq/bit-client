import { b3 } from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { ElementComponent } from "../../ecs/components/element-component";

export class ChopWood extends b3.Process {
    override run(node: b3.Node, env: AiTreeEnv, wood?: ElementComponent) {
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
