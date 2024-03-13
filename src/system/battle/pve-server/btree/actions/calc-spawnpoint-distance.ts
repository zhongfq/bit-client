import { b3 } from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";

export class CalcSpawnDistance extends b3.Process {
    public override run(node: b3.Node, env: AiTreeEnv) {
        const spawnpoint = env.owner.spawnpoint;
        const positioin = env.owner.transform.position;
        env.lastRet.results.push(Laya.Vector3.distance(spawnpoint, positioin));
        return b3.Status.SUCCESS;
    }

    public override get descriptor() {
        return {
            name: "CalcSpawnDistance",
            type: "Action",
            desc: "计算与出生点之间的距离",
            output: ["距离"],
        };
    }
}
