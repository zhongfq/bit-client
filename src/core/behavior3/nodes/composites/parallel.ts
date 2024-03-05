import { b3 } from "../../behavior";

export class Parallel extends b3.Process {
    override run(node: b3.Node, env: b3.TreeEnv) {
        const last = node.resume(env);
        let i = 0;

        if (typeof last === "number") {
            if (env.lastRet.status === b3.Status.RUNNING) {
                return b3.Status.RUNNING;
            }
            i = last + 1;
        }

        for (; i < node.children.length; i++) {
            const status = node.children[i].run(env);
            if (status === b3.Status.RUNNING) {
                return node.yield(env, i);
            }
        }

        return b3.Status.SUCCESS;
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
