import { Env, Node, Process, Status } from "../../../../../core/behavior3/behavior";

interface WaitArgs {
    ms: number;
    random?: number;
}

export class Wait extends Process {
    override check(node: Node): void {
        const args = node.args as WaitArgs;
        if (typeof args.ms !== "number") {
            this.error(node, `args.ms is not a number`);
        }
    }

    override run(node: Node, env: Env) {
        const t = node.resume(env);
        if (typeof t === "number") {
            if (env.context.time >= t) {
                return Status.SUCCESS;
            } else {
                return Status.RUNNING;
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
                ["ms", "int", "时间/毫秒"],
                ["random", "int?", "随机范围"],
            ],
        };
    }
}
