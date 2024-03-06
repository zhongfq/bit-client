import { b3 } from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";

export class ClearStance extends b3.Process {
    override run(node: b3.Node, env: AiTreeEnv) {
        env.context.clearStance(env.owner);
        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "ClearStance",
            type: "Action",
            desc: "清除攻击占位",
        };
    }
}