import { Env, Node, Process, Status } from "../../behavior";

export class Sequence extends Process {
    override run(node: Node, env: Env) {
        const last = node.resume(env);
        let i = 0;

        if (typeof last === "number") {
            if (env.lastRet.status === Status.SUCCESS) {
                i = last + 1;
            } else {
                return env.lastRet.status;
            }
        }

        for (; i < node.children.length; i++) {
            const status = node.children[i].run(env);
            if (status === Status.FAILURE) {
                return Status.FAILURE;
            } else if (status === Status.RUNNING) {
                return node.yield(env, i);
            }
        }

        return Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "Sequence",
            type: "Composite",
            desc: "顺序执行",
            doc: `
                + 一直往下执行，只有当所有子节点都返回成功, 才返回成功
                + 子节点是与（AND）的关系`,
        };
    }
}
