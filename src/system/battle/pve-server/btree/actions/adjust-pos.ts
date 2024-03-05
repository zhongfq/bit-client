import { b3 } from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";

export class AdjustPos extends b3.Process {
    override run(node: b3.Node, env: AiTreeEnv) {
        const owner = env.owner;
        const target = env.context.findAtPosition(owner.transform.position);
        if (target === owner) {
            return b3.Status.FAILURE;
        }

        return node.yield(env);
    }

    override get descriptor() {
        return {
            name: "AdjustPos",
            type: "Action",
            desc: "调整站位",
        };
    }
}
