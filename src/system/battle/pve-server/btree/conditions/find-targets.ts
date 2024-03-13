import { b3 } from "../../../../../core/behavior3/behavior";
import { BattleConf } from "../../../../../def/battle";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { ElementComponent } from "../../ecs/components/element-component";

interface FindTargetsArgs {
    radius?: number;
    hero?: boolean;
    soldier?: boolean;
    collection?: boolean;
    attack?: boolean;
    skill?: boolean;
}

export class FindTargets extends b3.Process {
    public override check(node: b3.Node) {}

    public override run(node: b3.Node, env: AiTreeEnv) {
        const args = node.args as FindTargetsArgs;
        const findHero = args.hero;
        const findSoldier = args.soldier;
        const findCollection = args.collection;
        let radius = args.radius ?? 0;
        if (args.attack) {
            radius = env.owner.data.attack_radius ?? radius;
        } else if (args.skill) {
            radius = env.owner.data.skill_radius ?? radius;
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
