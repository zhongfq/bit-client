import * as b3 from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";

interface GetSkillTargetArgs {
    multi?: boolean;
}

export class GetSkillTarget extends b3.Process {
    public override run(node: b3.Node, env: AiTreeEnv) {
        const targets = env.getValue("__skill_targets__") as unknown[];
        const args = node.args as GetSkillTargetArgs;
        if (args.multi) {
            env.lastRet.results.push(targets);
        } else {
            env.lastRet.results.push(targets[0]);
        }
        return b3.Status.SUCCESS;
    }

    public override get descriptor() {
        return {
            name: "GetSkillTarget",
            type: "Action",
            desc: "获取技能目标",
            args: [{ name: "multi", type: "boolean?", desc: "多个目标" }],
            output: ["目标单位"],
            doc: `
                + 此节点只能在技能行为树使用!
                + 默认返回单个目标
                + 如果勾选多个目标，返回数组
            `,
        };
    }
}
