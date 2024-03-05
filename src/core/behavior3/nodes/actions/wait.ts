import { b3 } from "../../behavior";

interface WaitArgs {
    time: number;
}

export class Wait extends b3.Process {
    override check(node: b3.Node): void {
        const args = node.args as WaitArgs;
        if (typeof args.time !== "number") {
            this.error(node, `args.time is not a number`);
        }
    }

    override run(node: b3.Node, env: b3.TreeEnv) {
        const t = node.resume(env);
        if (typeof t === "number") {
            if (env.context.time >= t) {
                return b3.Status.SUCCESS;
            } else {
                return b3.Status.RUNNING;
            }
        } else {
            const args = node.args as WaitArgs;
            return node.yield(env, env.context.time + args.time);
        }
    }

    override get descriptor() {
        return {
            name: "Wait",
            type: "Action",
            desc: "等待",
            args: [{ name: "time", type: "int", desc: "时间/tick" }],
        };
    }
}
