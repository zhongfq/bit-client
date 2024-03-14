import * as b3 from "../../../../../core/behavior3/behavior";
import { SkillTreeEnv } from "../../ecs/components/skill-component";

export class PlayAnim extends b3.Process {
    public override run(node: b3.Node, env: SkillTreeEnv) {
        if (!(env instanceof SkillTreeEnv)) {
            this.error(node, `env is not a SkillTreeEnv`);
        }
        const data = env.skill.data;
        if (data.anim) {
            env.context.playAnim(env.skill.owner, data.anim);
        }
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
