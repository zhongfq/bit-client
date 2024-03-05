import { b3 } from "../../../../../core/behavior3/behavior";
import { RoleTreeEnv } from "../../ecs/components/role-component";

export class GetHeroDistance extends b3.Process {
    override run(node: b3.Node, env: RoleTreeEnv) {
        const hero = env.owner.soldier!.hero;
        env.lastRet.results.push(
            Laya.Vector3.distance(hero.transform.position, env.owner.transform.position)
        );
        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "GetHeroDistance",
            type: "Action",
            desc: "计算与主将之间的距离",
            output: ["距离"],
        };
    }
}
