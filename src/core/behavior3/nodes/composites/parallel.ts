import { Env, Node, Process, Result, Status } from "../../behavior";

export class Parallel extends Process {
    override run(node: Node, env: Env) {
        const last = node.resume(env);
        let i = 0;

        if (typeof last === "number") {
            if (env.lastStatus === Status.RUNNING) {
                return Result.RUNNING;
            }
            i = last + 1;
        }

        for (; i < node.children.length; i++) {
            const ret = node.children[i].run(env);
            if (ret.status === Status.RUNNING) {
                return node.yield(env, i);
            }
        }

        return Result.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "Parallel",
            type: "Composite",
            desc: "并行执行",
            doc: `执行所有子节点并返回成功`,
        };
    }
}
