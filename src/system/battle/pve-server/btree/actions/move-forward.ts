import { b3 } from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { ElementComponent } from "../../ecs/components/element-component";

export class MoveForward extends b3.Process {
    override run(node: b3.Node, env: AiTreeEnv, target?: ElementComponent[] | ElementComponent) {
        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "MoveForward",
            type: "Action",
            desc: "向前移动(pvp专用)",
            doc: `
                + 往战场的中心点移动`,
        };
    }
}
