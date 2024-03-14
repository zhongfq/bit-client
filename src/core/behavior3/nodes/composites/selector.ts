import { Node, Process, Status, TreeEnv } from "../../behavior";

export class Selector extends Process {
    public override run(node: Node, env: TreeEnv) {
        const last = node.resume(env);
        let i = 0;

        if (typeof last === "number") {
            if (env.lastRet.status === Status.FAILURE) {
                i = last + 1;
            } else {
                return env.lastRet.status;
            }
        }

        for (; i < node.children.length; i++) {
            const status = node.children[i].run(env);
            if (status === Status.SUCCESS) {
                return Status.SUCCESS;
            } else if (status === Status.RUNNING) {
                return node.yield(env, i);
            }
        }

        return Status.FAILURE;
    }

    public override get descriptor() {
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
