import { b3 } from "../../../../../core/behavior3/behavior";
import { SkillTreeEnv } from "../../ecs/components/skill-component";

export class PlaySkillAnim extends b3.Process {
    override run(node: b3.Node, env: SkillTreeEnv) {
        if (!(env instanceof SkillTreeEnv)) {
            this.error(node, `env is not a SkillTreeEnv`);
        }
        const data = env.skill.data;
        if (data.anim) {
            env.context.playAnim(env.skill.owner, data.anim);
        }
        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "PlaySkillAnim",
            type: "Action",
            desc: "播放动画",
            args: [{ name: "name", type: "string?", desc: "动画名" }],
        };
    }
}
