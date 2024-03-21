import * as b3 from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { SkillTreeEnv } from "../../ecs/components/skill-component";
import { SkillOption } from "../btree-def";

interface LaunchSkillArgs {
    skill: number;
}

export class LaunchSkill extends b3.Process {
    public override check(node: b3.Node) {}

    public override run(node: b3.Node, env: AiTreeEnv) {
        const args = node.args as LaunchSkillArgs;
        let skill;
        if (args.skill === -1) {
            if (env instanceof SkillTreeEnv) {
                skill = env.skill;
            } else {
                throw new Error(`env is not SkillTreeEnv: ${env}`);
            }
        } else {
            skill = env.owner.launcher?.skills[args.skill];
        }
        if (skill) {
            // env.context.launchBullet(skill);
            return b3.Status.SUCCESS;
        } else {
            return b3.Status.FAILURE;
        }
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
