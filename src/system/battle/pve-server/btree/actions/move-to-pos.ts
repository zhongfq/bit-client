import { b3 } from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { ElementComponent } from "../../ecs/components/element-component";

export class MoveToPos extends b3.Process {
    override run(node: b3.Node, env: AiTreeEnv, target?: ElementComponent[] | ElementComponent) {
        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "MoveToPos",
            type: "Action",
            desc: "移动到坐标点",
            args: [
                { name: "x", type: "int?", desc: "x" },
                { name: "y", type: "int?", desc: "y" },
            ],
            input: ["坐标"],
            doc: `
                + 优先输入变量`,
        };
    }
}
