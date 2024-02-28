import { Env, Node, Process, Result } from "../../behavior";

interface WaitArgs {
    time: number;
}

export class Wait extends Process {
    override check(node: Node): void {
        const args = node.args as WaitArgs;
        if (typeof args.time !== "number") {
            this.error(node, `args.time is not a number`);
        }
    }

    override run(node: Node, env: Env) {
        const t = node.resume(env);
        if (typeof t === "number") {
            if (env.context.time >= t) {
                return Result.SUCCESS;
            } else {
                return Result.RUNNING;
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
            args: [["time", "int", "时间/tick"]],
        };
    }
}
