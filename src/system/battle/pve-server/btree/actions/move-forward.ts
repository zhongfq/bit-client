import { b3 } from "../../../../../core/behavior3/behavior";
import { RoleComponent, RoleEnv } from "../../ecs/components/role-component";

export class MoveForward extends b3.Process {
    override run(node: b3.Node, env: RoleEnv, target?: RoleComponent[] | RoleComponent) {
        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "MoveForward",
            type: "Action",
            desc: "向前移动(pvp专用)",
            doc: `
                + 往战场的中心点移动`,
        };
    }
}
