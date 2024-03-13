import { b3 } from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";

export class MoveStop extends b3.Process {
    public override run(node: b3.Node, env: AiTreeEnv) {
        env.context.moveStop(env.owner);
        return b3.Status.SUCCESS;
    }

    public override get descriptor() {
        return {
            name: "MoveStop",
            type: "Action",
            desc: "停止移动",
        };
    }
}
