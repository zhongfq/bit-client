import { b3 } from "../../../../../core/behavior3/behavior";

interface FindTargetsArgs {
    radius?: number;
    hero?: boolean;
    soldier?: boolean;
    wood?: boolean;
    attack?: boolean;
    skill?: boolean;
}

export class FindTargets extends b3.Process {
    override check(node: b3.Node) {}

    override run(node: b3.Node, env: b3.TreeEnv) {
        const args = node.args as FindTargets;

        return b3.Status.FAILURE;
    }

    override get descriptor() {
        return {
            name: "FindTargets",
            type: "Condition",
            desc: "给定的范围内查找多个目标",
            args: [
                { name: "hero", type: "boolean?", desc: "找英雄" },
                { name: "soldier", type: "boolean?", desc: "找士兵" },
                { name: "wood", type: "boolean?", desc: "找树" },
                { name: "friend", type: "boolean?", desc: "友方" },
                { name: "attack", type: "boolean?", desc: "普攻范围" },
                { name: "skill", type: "boolean?", desc: "技能范围" },
                { name: "radius", type: "int?", desc: "半径" },
                { name: "limit", type: "int?", desc: "数量限制" },
            ],
            output: ["目标单位"],
            doc: `
                + 没有找到返回失败
                + 默认查找敌对单位
                + 范围优先级，普攻>技能>半径
                + 如果找到多个取最近那个
                + etype 在 battle/battle_entity 表中有定义, 默认查找所有可攻击类型
                `,
        };
    }
}
