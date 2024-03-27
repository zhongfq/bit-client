import * as b3 from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { SoldierComponent, TruckComponent } from "../../ecs/components/element-component";
import { AiSystem } from "../../ecs/systems/ai-system";
import { PveDef } from "../../pve-defs";

const tmpTarget = new Laya.Vector3();
const tmpVelocity = new Laya.Vector3();

export class FollowHero extends b3.Process {
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
        if (distance <= 0.05) {
            if (movement.velocity.x !== 0 || movement.velocity.z !== 0) {
                movement.velocity.set(0, 0, 0);

                if (leader.movement.velocity.x === 0 && leader.movement.velocity.z === 0) {
                    env.context.moveStop(env.owner);
                } else {
                    env.context.moveStart(env.owner, movement.velocity);
                }
            }
        } else {
            const rad = Math.atan2(p1.z - p0.z, p1.x - p0.x);
            const speed = distance / AiSystem.TICK;
            let currSpeed = Math.max(movement.velocity.length(), PveDef.MOVE_SPEED);
            if (currSpeed < speed) {
                currSpeed += 0.1;
            } else {
                currSpeed = speed;
            }
            if (currSpeed > PveDef.MAX_FOLLOW_SPEED) {
                currSpeed = PveDef.MAX_FOLLOW_SPEED;
            }
            tmpVelocity.x = currSpeed * Math.cos(rad);
            tmpVelocity.z = currSpeed * Math.sin(rad);
            env.context.moveStart(env.owner, tmpVelocity);
        }

        return b3.Status.SUCCESS;
    }

    public override get descriptor() {
        return {
            name: "FollowHero",
            type: "Action",
            desc: "跟随主将",
            doc: `
                + 跟随自身主将`,
        };
    }
}
