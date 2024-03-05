import { b3 } from "../../../../../core/behavior3/behavior";
import { MathUtil } from "../../../../../core/utils/math-util";
import { RoleEnv, SoldierComponent, TroopComponent } from "../../ecs/components/role-component";
import { AiSystem } from "../../ecs/systems/ai-system";

const tmpTarget = new Laya.Vector3();
const tmpSpeed = new Laya.Vector3();

export class FollowHero extends b3.Process {
    override check(node: b3.Node) {}

    override run(node: b3.Node, env: RoleEnv) {
        const soldier = env.owner.getComponent(SoldierComponent);
        if (!soldier) {
            console.warn(`'SoldierComponent' not found `);
            return b3.Status.SUCCESS;
        }
        const leader = soldier.hero;
        const movement = soldier.role.movement;
        const transform = soldier.role.transform;

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
            const velocity = distance / AiSystem.TICK;
            if (movement.velocity < leader.movement.velocity) {
                movement.velocity = leader.movement.velocity;
            }
            if (movement.velocity < velocity) {
                movement.velocity += 0.1;
            } else {
                movement.velocity = velocity;
            }
            tmpSpeed.x = movement.velocity * Math.cos(rad);
            tmpSpeed.z = movement.velocity * Math.sin(rad);
            env.context.moveStart(env.owner, tmpSpeed);
        }

        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "FollowHero",
            type: "Action",
            desc: "跟随主将",
            doc: `
                + 跟随自身主将`,
        };
    }
}
