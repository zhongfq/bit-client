import * as b3 from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";

interface LaunchSkillArgs {
    skill: number;
}

export class LaunchSkill extends b3.Process {
    public override check(node: b3.Node): void {
        const args = node.args as LaunchSkillArgs;
        if (!(typeof args.skill === "number" && args.skill >= 1 && args.skill <= 2)) {
            this.error(node, `skill id error: ${args.skill}`);
        }
    }

    public override run(node: b3.Node, env: AiTreeEnv, target?: unknown) {
        return b3.Status.SUCCESS;
    }

    public override get descriptor() {
        return {
            name: "LaunchSkill",
            type: "Action",
            desc: "启动技能",
            args: [{ name: "skill", type: "int", desc: "技能id" }],
            input: ["目标"],
            doc: `
                + 目标可以是单个实体，也可以是数组`,
        };
    }
}
