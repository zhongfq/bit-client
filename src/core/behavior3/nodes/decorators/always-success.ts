import { Env, Node, Process, Status } from "../../behavior";

export class AlwaysSuccess extends Process {
    override check(node: Node): void {
        if (node.children.length == 0) {
            this.error(node, `${node.tree.name}#${node.id}: at least one children`);
        }
    }

    override run(node: Node, env: Env) {
        const isYield = node.resume(env);
        if (typeof isYield === "boolean") {
            if (env.lastRet.status === Status.RUNNING) {
                return Status.RUNNING;
            }
            return Status.SUCCESS;
        }
        const status = node.children[0].run(env);
        if (status === Status.RUNNING) {
            return node.yield(env);
        }
        return Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "AlwaysSuccess",
            type: "Decorator",
            desc: "始终返回成功",
            doc: `
                + 只能有一个子节点,多个仅执行第一个
                + 不管子节点是否成功都返回成功`,
        };
    }
}
