import { Env, Node, Process, Result, Status } from "../../behavior";

export class Sequence extends Process {
    override run(node: Node, env: Env) {
        const last = node.resume(env);
        let i = 0;

        if (typeof last === "number") {
            if (env.lastStatus === Status.RUNNING) {
                return Result.RUNNING;
            } else if (env.lastStatus === Status.SUCCESS) {
                return Result.SUCCESS;
            } else {
                i = last + 1;
            }
        }

        for (; i < node.children.length; i++) {
            const ret = node.children[i].run(env);
            if (ret.status === Status.FAIL) {
                return Result.FAIL;
            } else if (ret.status === Status.RUNNING) {
                return node.yield(env, i);
            }
        }

        return Result.SUCCESS;
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
