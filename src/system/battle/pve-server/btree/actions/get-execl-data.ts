import * as b3 from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";

export class GetExeclData extends b3.Process {
    public override run(node: b3.Node, env: AiTreeEnv) {
        return b3.Status.SUCCESS;
    }

    public override get descriptor() {
        return {
            name: "GetExeclData",
            type: "Action",
            desc: "获取表格数据",
            args: [
                { name: "sheet", type: "string", desc: "表格" },
                { name: "index", type: "code", desc: "索引" },
                { name: "field", type: "string", desc: "字段" },
            ],
            output: ["获取的数据"],
            doc: `
                + 从 execl 表格中获取数据
                `,
        };
    }
}
