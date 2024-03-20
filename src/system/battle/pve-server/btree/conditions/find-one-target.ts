import * as b3 from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { SkillOption, SkillRangeOption } from "../btree-dev";
import { FindTargets } from "./find-targets";

export class FindOneTarget extends FindTargets {
    public override check(node: b3.Node) {}

    public override run(node: b3.Node, env: AiTreeEnv) {
        const status = super.run(node, env);
        if (status === b3.Status.SUCCESS) {
            const target = (env.lastRet.results[0] as Array<unknown>)[0];
            env.lastRet.results.length = 0;
            env.lastRet.results.push(target);
        }
        return status;
    }

    public override get descriptor() {
        return {
            name: "FindOneTarget",
            type: "Condition",
            desc: "给定的范围内查找1个目标",
            args: [
                { name: "hero", type: "boolean?", desc: "找英雄" },
                { name: "soldier", type: "boolean?", desc: "找士兵" },
                { name: "collection", type: "boolean?", desc: "找采集物" },
                { name: "friend", type: "boolean?", desc: "友方" },
                { name: "skillId", type: "enum?", desc: "筛选范围", options: SkillRangeOption },
                { name: "radius", type: "int?", desc: "半径" },
            ],
            output: ["目标单位"],
            doc: `
                + 没有找到返回失败
                + 默认查找敌对单位
                + 范围优先级，普攻>技能>半径
                + 如果找到多个取最近那个
                + 普攻 id 为 0，技能1 id 为 1，以次类推
                + etype 在 battle/battle_entity 表中有定义, 默认查找所有可攻击类型
                `,
        } as b3.ProcessDescriptor;
    }
}
