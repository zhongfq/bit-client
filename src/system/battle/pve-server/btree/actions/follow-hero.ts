import { b3 } from "../../../../../core/behavior3/behavior";
import { RoleEnv, SoldierComponent } from "../../ecs/components/role-component";

export class FollowHero extends b3.Process {
    override check(node: b3.Node) {}

    override run(node: b3.Node, env: RoleEnv) {
        const soldier = env.owner.getComponent(SoldierComponent);
        if (!soldier) {
            console.warn(`'SoldierComponent' not found `);
            return b3.Status.SUCCESS;
        }
        const leader = soldier.leader;
        const movement = soldier.role.movement;
        const transform = soldier.role.transform;

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
