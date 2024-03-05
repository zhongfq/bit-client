import { b3 } from "../../../../../core/behavior3/behavior";

export class Hurt extends b3.Process {
    override check(node: b3.Node) {}

    override run(node: b3.Node, env: b3.TreeEnv) {
        return b3.Status.SUCCESS;
    }

    override get descriptor(): b3.ProcessDescriptor {
        return {
            name: "Hurt",
            type: "Action",
            desc: "造成伤害",
            args: [{ name: "add", type: "int?", desc: "伤害加成(百分比)" }],
            input: ["目标单位"],
        };
    }
}
