import { Node, Process, Status, TreeEnv } from "../../behavior";

export class AlwaysFail extends Process {
    public override check(node: Node): void {
        if (node.children.length == 0) {
            this.error(node, `at least one children`);
        }
    }

    public override run(node: Node, env: TreeEnv) {
        const isYield = node.resume(env);
        if (typeof isYield === "boolean") {
            if (env.lastRet.status === Status.RUNNING) {
                return Status.RUNNING;
            }
            return Status.FAILURE;
        }
        const status = node.children[0].run(env);
        if (status === Status.RUNNING) {
            return node.yield(env);
        }
        return Status.FAILURE;
    }

    public override get descriptor() {
        return {
            name: "AlwaysFail",
            type: "Decorator",
            desc: "始终返回失败",
            doc: `
                + 只能有一个子节点,多个仅执行第一个
                + 不管子节点是否成功都返回失败`,
        };
    }
}
