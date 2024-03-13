import { b3 } from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { ElementComponent } from "../../ecs/components/element-component";

export class Collect extends b3.Process {
    public override run(node: b3.Node, env: AiTreeEnv, target?: unknown) {
        if (!(target instanceof ElementComponent)) {
            this.error(node, `target '${target}' is not an ElementComponent`);
        }
        env.context.collect(env.owner, target as ElementComponent);
        return b3.Status.SUCCESS;
    }

    public override get descriptor() {
        return {
            name: "Collect",
            type: "Action",
            desc: "采集",
            input: ["目标"],
        };
    }
}
