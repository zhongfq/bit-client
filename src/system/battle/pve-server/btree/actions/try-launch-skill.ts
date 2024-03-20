import * as b3 from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { SkillOption } from "../btree-def";

interface LaunchSkillArgs {
    skill: number;
}

export class TryLaunchSkill extends b3.Process {
    public override check(node: b3.Node) {}

    public override run(node: b3.Node, env: AiTreeEnv) {
        const args = node.args as LaunchSkillArgs;
        const skill = env.owner.launcher?.skills[args.skill];
        if (!skill) {
            console.warn(`skill not found: ${args.skill}`);
            return b3.Status.FAILURE;
        }

        if (
            !skill.tree ||
            !skill.env ||
            skill.running ||
            skill.lastLaunch + skill.data.cd > env.context.time
        ) {
            return b3.Status.FAILURE;
        }

        // TODO：目标查找可以考虑使用主行为树的变量
        const status = skill.tree.run(skill.env);
        skill.running = true;
        if (status === b3.Status.FAILURE) {
            return b3.Status.FAILURE;
        } else {
            skill.lastLaunch = env.context.time;
            return b3.Status.SUCCESS;
        }
    }

    public override get descriptor() {
        return {
            name: "TryLaunchSkill",
            type: "Action",
            desc: "尝试启动技能",
            args: [{ name: "skill", type: "enum", desc: "技能id", options: SkillOption }],
            doc: `
                + 检查技能 CD
                + 根据技能范围筛选敌人
                + 如果没有技能、技能运行中、没有敌人、CD时间未到返回 FAILURE`,
        } as b3.ProcessDescriptor;
    }
}
