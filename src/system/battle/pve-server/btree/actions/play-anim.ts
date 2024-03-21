import * as b3 from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { SkillTreeEnv } from "../../ecs/components/skill-component";

interface PlayAnimArgs {
    name: string;
}

export class PlayAnim extends b3.Process {
    public override run(node: b3.Node, env: AiTreeEnv) {
        if (!(env instanceof SkillTreeEnv)) {
            this.error(node, `env is not a SkillTreeEnv`);
        }
        const args = node.args as PlayAnimArgs;
        env.context.playAnim(env.owner, args.name);
        return b3.Status.SUCCESS;
    }

    public override get descriptor() {
        return {
            name: "PlayAnim",
            type: "Action",
            desc: "播放动画",
            args: [{ name: "name", type: "string", desc: "动画名" }],
        };
    }
}
