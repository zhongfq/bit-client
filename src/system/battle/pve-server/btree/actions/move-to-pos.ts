import { b3 } from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { PveDef } from "../../pve-defs";

interface MoveToPosArgs {
    x?: number;
    y?: number;
    rate?: number;
}

const tmpVelocity = new Laya.Vector3();

export class MoveToPos extends b3.Process {
    override run(node: b3.Node, env: AiTreeEnv, target?: Laya.Vector3) {
        if (!target || !(target instanceof Laya.Vector3)) {
            this.error(node, "no target position to move");
        }
        const args = node.args as MoveToPosArgs;
        const speed = PveDef.MOVE_SPEED * (args.rate ?? 1);
        const p0 = env.owner.transform.position;
        const p1 = target as Laya.Vector3;
        const rad = Math.atan2(p1.z - p0.z, p1.x - p0.x);
        tmpVelocity.x = speed * Math.cos(rad);
        tmpVelocity.z = speed * Math.sin(rad);
        env.context.moveStart(env.owner, tmpVelocity, p1);
        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "MoveToPos",
            type: "Action",
            desc: "移动到坐标点",
            args: [
                { name: "x", type: "int?", desc: "x" },
                { name: "y", type: "int?", desc: "y" },
                { name: "rate", type: "float?", desc: "速率" },
            ],
            input: ["坐标"],
            doc: `
                + 优先输入变量`,
        };
    }
}
