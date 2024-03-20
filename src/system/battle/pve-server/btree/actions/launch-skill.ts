import * as b3 from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { SkillOption } from "../btree-dev";

export class LaunchSkill extends b3.Process {
    public override check(node: b3.Node): void {}

    public override run(node: b3.Node, env: AiTreeEnv, target?: unknown) {
        console.log("启动技能", (env as any).skill.data.id);
        return b3.Status.SUCCESS;
    }

    public override get descriptor() {
        return {
            name: "LaunchSkill",
            type: "Action",
            desc: "启动技能",
            input: ["目标"],
            args: [{ name: "skill", type: "enum", desc: "技能id", options: SkillOption }],
            doc: `
                + 目标可以是单个实体，也可以是数组`,
        };
    }
}
