import { b3 } from "../../behavior";

export class AlwaysSuccess extends b3.Process {
    public override check(node: b3.Node): void {
        if (node.children.length == 0) {
            this.error(node, `${node.tree.name}#${node.id}: at least one children`);
        }
    }

    public override run(node: b3.Node, env: b3.TreeEnv) {
        const isYield = node.resume(env);
        if (typeof isYield === "boolean") {
            if (env.lastRet.status === b3.Status.RUNNING) {
                return b3.Status.RUNNING;
            }
            return b3.Status.SUCCESS;
        }
        const status = node.children[0].run(env);
        if (status === b3.Status.RUNNING) {
            return node.yield(env);
        }
        return b3.Status.SUCCESS;
    }

    public override get descriptor() {
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
