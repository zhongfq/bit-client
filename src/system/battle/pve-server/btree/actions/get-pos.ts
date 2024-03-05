import { b3 } from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { ElementComponent } from "../../ecs/components/element-component";

export class GetPos extends b3.Process {
    override run(node: b3.Node, env: AiTreeEnv, target?: ElementComponent[] | ElementComponent) {
        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "GetPos",
            type: "Action",
            desc: "获取单位坐标",
            args: [],
            input: ["目标"],
            output: ["坐标"],
            doc: `
                + 如果输入变量为空，则默认为行为树当前归属的实体`,
        };
    }
}
