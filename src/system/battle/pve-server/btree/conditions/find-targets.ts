import { b3 } from "../../../../../core/behavior3/behavior";

interface FindTargetsArgs {
    x?: number;
    y?: number;
    w?: number;
    h?: number;
    etype?: number;
    attack?: boolean;
    skill?: boolean;
}

export class FindTargets extends b3.Process {
    override check(node: b3.Node) {}

    override run(node: b3.Node, env: b3.Env, ...any: unknown[]) {
        return b3.Status.FAILURE;
    }

    override get descriptor() {
        return {
            name: "FindTargets",
            type: "Condition",
            desc: "给定的范围内查找多个目标",
            args: [
                { name: "x", type: "int?", desc: "x" },
                { name: "y", type: "int?", desc: "y" },
                { name: "w", type: "int?", desc: "宽" },
                { name: "h", type: "int?", desc: "高" },
                { name: "etype", type: "int", desc: "类型" },
                { name: "attack", type: "boolean?", desc: "普攻范围" },
                { name: "skill", type: "boolean?", desc: "普攻范围" },
            ],
            output: ["目标单位"],
            doc: `
                + 没有找到返回失败
                + x y 相对于当前单位的坐标，默认居中，也就是-w/2, -h/2
                + etype 在 battle/battle_entity 表中有定义, 默认查找所有可攻击类型`,
        };
    }
}
