import { b3 } from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";

export class BackSpawnpoint extends b3.Process {
    override check(node: b3.Node) {}

    override run(node: b3.Node, env: AiTreeEnv) {
        let speed = node.resume(env) as Laya.Vector3 | undefined;

        const movement = env.owner.movement;
        const transform = env.owner.transform;

        const p1 = env.owner.spawnpoint;
        const p0 = transform.position;
        const distance = Laya.Vector3.distance(p1, p0);

        if (distance <= 0.01) {
            return b3.Status.SUCCESS;
        } else if (!speed) {
            const rad = Math.atan2(p1.z - p0.z, p1.x - p0.x);
            speed = new Laya.Vector3();
            speed.x = movement.velocity * Math.cos(rad);
            speed.z = movement.velocity * Math.sin(rad);
            env.context.moveStart(env.owner, speed, p1);
        }
        return node.yield(env, speed);
    }

    override get descriptor() {
        return {
            name: "BackSpawnpoint",
            type: "Action",
            desc: "回归出生点",
            doc: `
                + 士兵归队，归队过程中，主执行其它命令`,
        };
    }
}
