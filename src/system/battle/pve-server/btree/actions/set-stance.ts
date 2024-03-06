import { b3 } from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";

export class SetStance extends b3.Process {
    override run(node: b3.Node, env: AiTreeEnv) {
        env.context.setStance(env.owner);
        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "SetStance",
            type: "Action",
            desc: "设置攻击占位",
        };
    }
}
