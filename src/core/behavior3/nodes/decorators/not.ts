import { b3 } from "../../behavior";

export class Not extends b3.Process {
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
            } else {
                return this._retNot(env.lastRet.status);
            }
        }
        const status = node.children[0].run(env);
        if (status === b3.Status.RUNNING) {
            return node.yield(env);
        }
        return this._retNot(status);
    }

    private _retNot(status: b3.Status) {
        return status === b3.Status.FAILURE ? b3.Status.SUCCESS : b3.Status.FAILURE;
    }

    override get descriptor() {
        return {
            name: "Not",
            type: "Decorator",
            desc: "取反",
            doc: `
                + 将子节点的返回值取反`,
        };
    }
}
