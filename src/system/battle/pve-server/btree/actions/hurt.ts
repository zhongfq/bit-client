import { b3 } from "../../../../../core/behavior3/behavior";
import { ElementComponent } from "../../ecs/components/element-component";
import { SkillTreeEnv } from "../../ecs/components/skill-component";

interface HurtArgs {
    add?: number;
}

export class Hurt extends b3.Process {
    override check(node: b3.Node) {}

    override run(node: b3.Node, env: SkillTreeEnv, target?: ElementComponent) {
        if (target instanceof ElementComponent) {
            const args = node.args as HurtArgs;
            const ratio = args.add ?? 1;
            env.context.hurt(env.skill, target, ratio);
        } else {
            this.warn(node, `enemy not found`);
        }
        return b3.Status.SUCCESS;
    }

    override get descriptor(): b3.ProcessDescriptor {
        return {
            name: "Hurt",
            type: "Action",
            desc: "造成伤害",
            args: [{ name: "add", type: "float?", desc: "伤害加成(百分比)" }],
            input: ["目标单位"],
        };
    }
}
