import { b3 } from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { ElementComponent } from "../../ecs/components/element-component";

export class AddBuff extends b3.Process {
    override run(node: b3.Node, env: AiTreeEnv, target?: ElementComponent[] | ElementComponent) {
        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "AddBuff",
            type: "Action",
            desc: "添加BUFF",
            args: [
                { name: "buff_id", type: "int", desc: "buff id" },
                { name: "stack", type: "int?", desc: "层级" },
            ],
            input: ["目标"],
            doc: `
                + 目标单位不填默认自己
                + 层级默认加一层
                `,
        };
    }
}
