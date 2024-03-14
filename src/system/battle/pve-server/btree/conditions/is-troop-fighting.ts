import * as b3 from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";

export class IsTroopFighting extends b3.Process {
    public override run(node: b3.Node, env: AiTreeEnv) {
        if (env.context.isTroopFighting(env.owner)) {
            return b3.Status.SUCCESS;
        } else {
            return b3.Status.FAILURE;
        }
    }

    public override get descriptor() {
        return {
            name: "IsTroopFighting",
            type: "Condition",
            desc: "判断部队是否交战中",
        };
    }
}
