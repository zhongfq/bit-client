import { b3 } from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { ElementComponent } from "../../ecs/components/element-component";

export class GetPos extends b3.Process {
    public override run(node: b3.Node, env: AiTreeEnv, target?: unknown) {
        if (target instanceof Array) {
            this.error(node, "target is array");
        }
        const element = target as ElementComponent;
        env.lastRet.results.push(element.transform.position);
        return b3.Status.SUCCESS;
    }

    public override get descriptor() {
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
