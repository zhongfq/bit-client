import { Node, Process, Status, TreeEnv } from "../../behavior";

export class Parallel extends Process {
    public override run(node: Node, env: TreeEnv) {
        const last = node.resume(env);
        let i = 0;

        if (typeof last === "number") {
            if (env.lastRet.status === Status.RUNNING) {
                return Status.RUNNING;
            }
            i = last + 1;
        }

        for (; i < node.children.length; i++) {
            const status = node.children[i].run(env);
            if (status === Status.RUNNING) {
                return node.yield(env, i);
            }
        }

        return Status.SUCCESS;
    }

    public override get descriptor() {
        return {
            name: "Parallel",
            type: "Composite",
            desc: "并行执行",
            doc: `执行所有子节点并返回成功`,
        };
    }
}
