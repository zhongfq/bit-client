import { b3 } from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { ElementComponent } from "../../ecs/components/element-component";

export class DelBuff extends b3.Process {
    public override run(
        node: b3.Node,
        env: AiTreeEnv,
        target?: ElementComponent[] | ElementComponent
    ) {
        return b3.Status.SUCCESS;
    }

    public override get descriptor() {
        return {
            name: "DelBuff",
            type: "Action",
            desc: "移除BUFF",
            args: [{ name: "buff_id", type: "int", desc: "buff id" }],
            input: ["目标单位"],
            doc: `
                + 目标单位不填默认自己`,
        };
    }
}
