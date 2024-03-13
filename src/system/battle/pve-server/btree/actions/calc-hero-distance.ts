import { b3 } from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";

export class CalcHeroDistance extends b3.Process {
    public override run(node: b3.Node, env: AiTreeEnv) {
        const hero = env.owner.soldier!.hero;
        env.lastRet.results.push(
            Laya.Vector3.distance(hero.transform.position, env.owner.transform.position)
        );
        return b3.Status.SUCCESS;
    }

    public override get descriptor() {
        return {
            name: "CalcHeroDistance",
            type: "Action",
            desc: "计算与主将之间的距离",
            output: ["距离"],
        };
    }
}
