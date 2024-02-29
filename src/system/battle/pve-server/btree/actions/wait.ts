import { b3 } from "../../../../../core/behavior3/behavior";

interface WaitArgs {
    ms: number;
    random?: number;
}

export class Wait extends b3.Process {
    override check(node: b3.Node): void {
        const args = node.args as WaitArgs;
        if (typeof args.ms !== "number") {
            this.error(node, `args.ms is not a number`);
        }
    }

    override run(node: b3.Node, env: b3.Env) {
        const t = node.resume(env);
        if (typeof t === "number") {
            if (env.context.time >= t) {
                return b3.Status.SUCCESS;
            } else {
                return b3.Status.RUNNING;
            }
        } else {
            const args = node.args as WaitArgs;
            let ms = args.ms;
            if (typeof args.random === "number") {
                ms += (Math.random() - 0.5) * args.random;
            }
            return node.yield(env, env.context.time + ms);
        }
    }

    override get descriptor() {
        return {
            name: "Wait",
            type: "Action",
            desc: "等待",
            args: [
                { name: "ms", type: "int", desc: "时间/毫秒" },
                { name: "random", type: "int?", desc: "随机范围" },
            ],
        };
    }
}
