import { Node, Process, Status, TreeEnv } from "../../behavior";

interface WaitArgs {
    time: number;
}

export class Wait extends Process {
    public override check(node: Node): void {
        const args = node.args as WaitArgs;
        if (typeof args.time !== "number") {
            this.error(node, `args.time is not a number`);
        }
    }

    public override run(node: Node, env: TreeEnv) {
        const t = node.resume(env);
        if (typeof t === "number") {
            if (env.context.time >= t) {
                return Status.SUCCESS;
            } else {
                return Status.RUNNING;
            }
        } else {
            const args = node.args as WaitArgs;
            return node.yield(env, env.context.time + args.time);
        }
    }

    public override get descriptor() {
        return {
            name: "Wait",
            type: "Action",
            desc: "等待",
            args: [{ name: "time", type: "int", desc: "时间/tick" }],
        };
    }
}
