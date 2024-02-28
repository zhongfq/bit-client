import { Env, Node, Process, Result, Status } from "../../behavior";

export class Selector extends Process {
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
            if (ret.status === Status.SUCCESS) {
                return Result.SUCCESS;
            } else if (ret.status === Status.RUNNING) {
                return node.yield(env, i);
            }
        }

        return Result.FAIL;
    }

    override get descriptor() {
        return {
            name: "Selector",
            type: "Composite",
            desc: "选择执行",
            doc: `
                + 一直往下执行，有子节点返回成功则返回成功，若全部节点返回失败则返回失败
                + 子节点是或 (OR) 的关系`,
        };
    }
}
