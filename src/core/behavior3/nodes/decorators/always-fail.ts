import { Env, Node, Process, Result, Status } from "../../behavior";

export class AlwaysFail extends Process {
    override check(node: Node): void {
        if (node.children.length == 0) {
            this.error(node, `at least one children`);
        }
    }

    override run(node: Node, env: Env) {
        const isYield = node.resume(env);
        if (typeof isYield === "boolean") {
            if (env.lastStatus === Status.RUNNING) {
                return Result.RUNNING;
            }
            return Result.FAIL;
        }
        const ret = node.children[0].run(env);
        if (ret.status === Status.RUNNING) {
            return node.yield(env);
        }
        return Result.FAIL;
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
