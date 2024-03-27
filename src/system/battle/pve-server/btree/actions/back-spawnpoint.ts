import * as b3 from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { PveDef } from "../../pve-defs";

export class BackSpawnpoint extends b3.Process {
    public override check(node: b3.Node) {}

    public override run(node: b3.Node, env: AiTreeEnv) {
        let velocity = node.resume(env) as Laya.Vector3 | undefined;

        const transform = env.owner.transform;

        const p1 = env.owner.spawnpoint;
        const p0 = transform.position;
        const distance = Laya.Vector3.distance(p1, p0);

        if (distance <= 0.01) {
            return b3.Status.SUCCESS;
        } else if (!velocity) {
            const rad = Math.atan2(p1.z - p0.z, p1.x - p0.x);
            velocity = new Laya.Vector3();
            velocity.x = PveDef.MOVE_SPEED * Math.cos(rad);
            velocity.z = PveDef.MOVE_SPEED * Math.sin(rad);
            env.context.moveStart(env.owner, velocity, p1);
        }
        return node.yield(env, velocity);
    }

    public override get descriptor() {
        return {
            name: "BackSpawnpoint",
            type: "Action",
            desc: "回归出生点",
            doc: `
                + 士兵归队，归队过程中，主执行其它命令`,
        };
    }
}
