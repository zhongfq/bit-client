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
        const skill = env.owner.skill?.skills[0];
        if (skill && skill.env && skill.tree) {
            skill.env.setValue("enemy", target);
            skill.running = true;
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
