import { b3 } from "../../behavior";

export class AlwaysFail extends b3.Process {
    override check(node: b3.Node): void {
        if (node.children.length == 0) {
            this.error(node, `at least one children`);
        }
    }

    override run(node: b3.Node, env: b3.Env) {
        const isYield = node.resume(env);
        if (typeof isYield === "boolean") {
            if (env.lastRet.status === b3.Status.RUNNING) {
                return b3.Status.RUNNING;
            }
            return b3.Status.FAILURE;
        }
        const status = node.children[0].run(env);
        if (status === b3.Status.RUNNING) {
            return node.yield(env);
        }
        return b3.Status.FAILURE;
    }

    override get descriptor() {
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
