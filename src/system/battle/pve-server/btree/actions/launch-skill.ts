import { b3 } from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { ElementComponent } from "../../ecs/components/element-component";

export class LaunchSkill extends b3.Process {
    override run(node: b3.Node, env: AiTreeEnv, target?: ElementComponent[] | ElementComponent) {
        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "LaunchSkill",
            type: "Action",
            desc: "释放技能",
            args: [{ name: "idx", type: "int", desc: "技能编号" }],
            input: ["目标"],
            doc: `
                + 目标可以是单个实体，也可以是数组`,
        };
    }
}
