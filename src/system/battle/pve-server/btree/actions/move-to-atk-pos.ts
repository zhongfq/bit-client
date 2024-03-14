import * as b3 from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { ElementComponent } from "../../ecs/components/element-component";

export class MoveToAtkPos extends b3.Process {
    public override run(
        node: b3.Node,
        env: AiTreeEnv,
        target?: ElementComponent[] | ElementComponent
    ) {
        return b3.Status.SUCCESS;
    }

    public override get descriptor() {
        return {
            name: "MoveToAtkPos",
            type: "Action",
            desc: "移动到普攻范围内",
            input: ["目标"],
            doc: `
                + 目标可以是单个实体，也可以是数组`,
        };
    }
}
