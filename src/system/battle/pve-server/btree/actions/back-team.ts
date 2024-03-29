import * as b3 from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { SoldierComponent, TruckComponent } from "../../ecs/components/element-component";
import { AiSystem } from "../../ecs/systems/ai-system";
import { PveDef } from "../../pve-defs";

const tmpTarget = new Laya.Vector3();
const tmpVelocity = new Laya.Vector3();

export class BackTeam extends b3.Process {
    public override check(node: b3.Node) {}

    public override run(node: b3.Node, env: AiTreeEnv) {
        const follower =
            env.owner.getComponent(SoldierComponent) || env.owner.getComponent(TruckComponent);
        if (!follower) {
            console.warn(`'SoldierComponent | TruckComponent' not found `);
            return b3.Status.SUCCESS;
        }
        const leader = follower.hero;
        const movement = follower.element.movement;
        const transform = follower.element.transform;

        const p1 = tmpTarget;
        const p0 = transform.position;
        env.context.calcFollowerPosition(leader, follower, p1);
        const distance = Laya.Vector3.distance(p1, p0);
        // 与阵型位置在0.5格内认为已经归队了，剩下交给 FollowHero 节点
        if (distance <= 0.5) {
            return b3.Status.SUCCESS;
        } else {
            const rad = Math.atan2(p1.z - p0.z, p1.x - p0.x);
            const speed = distance / AiSystem.TICK;
            let currSpeed = Math.max(movement.velocity.length(), PveDef.MOVE_SPEED);
            if (currSpeed < speed) {
                currSpeed += 0.2;
            } else {
                currSpeed = speed;
            }
            if (currSpeed > PveDef.MAX_BACK_SPEED) {
                currSpeed = PveDef.MAX_BACK_SPEED;
            }
            tmpVelocity.x = currSpeed * Math.cos(rad);
            tmpVelocity.z = currSpeed * Math.sin(rad);
            env.context.moveStart(env.owner, tmpVelocity);
            return node.yield(env);
        }
    }

    public override get descriptor() {
        return {
            name: "BackTeam",
            type: "Action",
            desc: "士兵归队",
            doc: `
                + 士兵归队，归队过程中不执行其它命令`,
        };
    }
}
