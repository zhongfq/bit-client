import { b3 } from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { ElementComponent } from "../../ecs/components/element-component";

export class NormalAttack extends b3.Process {
    override run(node: b3.Node, env: AiTreeEnv, target?: unknown) {
        if (target instanceof Array) {
            this.error(node, "target is array");
        } else if (!(target instanceof ElementComponent)) {
            this.error(node, "target is not an ElementComponent");
        }
        env.context.playAnim(env.owner, "attack");
        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "NormalAttack",
            type: "Action",
            desc: "普通攻击",
            input: ["目标"],
            doc: `
                + 目标可以是单个实体，也可以是数组`,
        };
    }
}
