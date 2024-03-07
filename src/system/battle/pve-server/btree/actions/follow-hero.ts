import { b3 } from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { SoldierComponent } from "../../ecs/components/element-component";
import { AiSystem } from "../../ecs/systems/ai-system";
import { PveDef } from "../../pve-defs";

const tmpTarget = new Laya.Vector3();
const tmpSpeed = new Laya.Vector3();

interface FollowHeroArgs {
    rate?: number;
}

export class FollowHero extends b3.Process {
    override check(node: b3.Node) {}

    override run(node: b3.Node, env: AiTreeEnv) {
        const args = node.args as FollowHeroArgs;
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
        if (distance <= 0.05) {
            if (movement.speed.x !== 0 || movement.speed.z !== 0) {
                movement.speed.x = 0;
                movement.speed.y = 0;
                movement.speed.z = 0;

                if (leader.movement.speed.x === 0 && leader.movement.speed.z === 0) {
                    env.context.moveStop(env.owner);
                } else {
                    env.context.moveStart(env.owner, movement.speed);
                }
            }
        } else {
            const rad = Math.atan2(p1.z - p0.z, p1.x - p0.x);
            const rate = args.rate ?? 1;
            const velocity = distance / AiSystem.TICK;
            if (movement.velocity < leader.movement.velocity) {
                movement.velocity = leader.movement.velocity;
            }
            if (movement.velocity < velocity) {
                movement.velocity += 0.1;
            } else {
                movement.velocity = velocity;
            }
            // TODO: 需要定义最大的归队速度
            if (movement.velocity > PveDef.MAX_FOLLOW_SPEED) {
                movement.velocity = PveDef.MAX_FOLLOW_SPEED;
            }
            tmpSpeed.x = movement.velocity * Math.cos(rad) * rate;
            tmpSpeed.z = movement.velocity * Math.sin(rad) * rate;
            env.context.moveStart(env.owner, tmpSpeed);
        }

        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "FollowHero",
            type: "Action",
            desc: "跟随主将",
            args: [{ name: "rate", type: "number?", desc: "速率" }],
            doc: `
                + 跟随自身主将`,
        };
    }
}
