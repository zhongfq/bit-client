import { b3 } from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { SoldierComponent } from "../../ecs/components/element-component";
import { AiSystem } from "../../ecs/systems/ai-system";

const tmpTarget = new Laya.Vector3();
const tmpSpeed = new Laya.Vector3();

export class BackTeam extends b3.Process {
    override check(node: b3.Node) {}

    override run(node: b3.Node, env: AiTreeEnv) {
        const soldier = env.owner.getComponent(SoldierComponent);
        if (!soldier) {
            console.warn(`'SoldierComponent' not found `);
            return b3.Status.SUCCESS;
        }
        const leader = soldier.hero;
        const movement = soldier.element.movement;
        const transform = soldier.element.transform;

        const p1 = tmpTarget;
        const p0 = transform.position;
        env.context.calcSoldierPosition(leader, soldier, p1);
        const distance = Laya.Vector3.distance(p1, p0);
        // 与阵型位置在0.5格内认为已经归队了，剩下交给 FollowHero 节点
        if (distance <= 0.5) {
            return b3.Status.SUCCESS;
        } else {
            const rad = Math.atan2(p1.z - p0.z, p1.x - p0.x);
            const velocity = distance / AiSystem.TICK;
            if (movement.velocity < leader.movement.velocity) {
                movement.velocity = leader.movement.velocity;
            }
            if (movement.velocity < velocity) {
                movement.velocity += 0.2;
            } else {
                movement.velocity = velocity;
            }
            // TODO: 需要定义最大的归队速度
            if (movement.velocity > 3) {
                movement.velocity = 3;
            }
            tmpSpeed.x = movement.velocity * Math.cos(rad);
            tmpSpeed.z = movement.velocity * Math.sin(rad);
            env.context.moveStart(env.owner, tmpSpeed);
            return node.yield(env);
        }
    }

    override get descriptor() {
        return {
            name: "BackTeam",
            type: "Action",
            desc: "士兵归队",
            doc: `
                + 士兵归队，归队过程中，主执行其它命令`,
        };
    }
}
