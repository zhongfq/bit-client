import * as b3 from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";

interface GetSkillTimeArgs {
    skill: number;
}

export class GetSkillTime extends b3.Process {
    public override check(node: b3.Node) {
        const args = node.args as GetSkillTimeArgs;
        if (!(typeof args.skill === "number" && args.skill >= 1 && args.skill <= 2)) {
            this.error(node, `skill id error: ${args.skill}`);
        }
    }

    public override run(node: b3.Node, env: AiTreeEnv) {
        const args = node.args as GetSkillTimeArgs;
        const skill = env.owner.launcher?.skills[args.skill];
        if (skill) {
            return b3.Status.SUCCESS;
        } else {
            return b3.Status.FAILURE;
        }
    }

    public override get descriptor() {
        return {
            name: "GetSkillTime",
            type: "Action",
            desc: "获取技能上次释放的时间",
            args: [{ name: "skill", type: "int", desc: "技能id" }],
            output: ["上次释放时间"],
            doc: `+ 技能不存在则返回 FAILURE`,
        } as b3.ProcessDescriptor;
    }
}
