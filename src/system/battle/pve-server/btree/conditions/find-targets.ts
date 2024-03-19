import * as b3 from "../../../../../core/behavior3/behavior";
import { BattleConf } from "../../../../../def/battle";
import { AiTreeEnv } from "../../ecs/components/ai-component";

interface FindTargetsArgs {
    radius?: number;
    hero?: boolean;
    soldier?: boolean;
    collection?: boolean;
    skillId?: number;
}

export class FindTargets extends b3.Process {
    public override check(node: b3.Node) {}

    public override run(node: b3.Node, env: AiTreeEnv) {
        const args = node.args as FindTargetsArgs;
        const findHero = args.hero;
        const findSoldier = args.soldier;
        const findCollection = args.collection;
        let radius = args.radius ?? 0;
        if (typeof args.skillId === "number") {
            const skill = env.owner.launcher?.skills[args.skillId];
            if (skill) {
                radius = skill.data.radius;
            }
        }
        const ETYPE = BattleConf.ENTITY_TYPE;
        const position = env.owner.transform.position;
        const arr = env.context.find((element) => {
            const etype = element.entity.etype;
            if (
                ((findHero && etype === ETYPE.HERO) ||
                    (findSoldier && etype === ETYPE.SOLDIER) ||
                    (findCollection &&
                        (etype === ETYPE.WOOD || etype == ETYPE.FOOD || etype == ETYPE.STONE))) &&
                element.aid !== env.owner.aid &&
                element.hp > 0
            ) {
                const distance = Laya.Vector3.distance(element.transform.position, position);
                if (distance < radius) {
                    element.tmpDistance = distance;
                    return true;
                } else {
                    return false;
                }
            }

            return false;
        });
        if (arr && arr.length > 0) {
            arr.sort((a, b) => a.tmpDistance - b.tmpDistance);
            env.lastRet.results.push(arr);
            return b3.Status.SUCCESS;
        } else {
            return b3.Status.FAILURE;
        }
    }

    public override get descriptor() {
        return {
            name: "FindTargets",
            type: "Condition",
            desc: "给定的范围内查找多个目标",
            args: [
                { name: "hero", type: "boolean?", desc: "找英雄" },
                { name: "soldier", type: "boolean?", desc: "找士兵" },
                { name: "collection", type: "boolean?", desc: "找采集物" },
                { name: "friend", type: "boolean?", desc: "友方" },
                { name: "skillId", type: "int?", desc: "技能id" },
                { name: "radius", type: "int?", desc: "半径" },
                { name: "limit", type: "int?", desc: "数量限制" },
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
        };
    }
}
