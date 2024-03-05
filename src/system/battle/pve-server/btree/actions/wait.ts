import { b3 } from "../../../../../core/behavior3/behavior";

interface WaitArgs {
    time: number;
    random?: number;
}

export class Wait extends b3.Process {
    override check(node: b3.Node): void {
        const args = node.args as WaitArgs;
        if (typeof args.time !== "number") {
            this.error(node, `args.ms is not a number`);
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
            let expired = args.time;
            if (typeof args.random === "number") {
                expired += (Math.random() - 0.5) * args.random;
            }
            return node.yield(env, env.context.time + expired);
        }
    }

    override get descriptor() {
        return {
            name: "Wait",
            type: "Action",
            desc: "等待",
            args: [
                { name: "time", type: "int", desc: "时间/秒" },
                { name: "random", type: "int?", desc: "随机范围" },
            ],
        };
    }
}
