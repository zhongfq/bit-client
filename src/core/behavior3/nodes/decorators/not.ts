import { Node, Process, Status, TreeEnv } from "../../behavior";

export class Not extends Process {
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
            } else {
                return this._retNot(env.lastRet.status);
            }
        }
        const status = node.children[0].run(env);
        if (status === Status.RUNNING) {
            return node.yield(env);
        }
        return this._retNot(status);
    }

    private _retNot(status: Status) {
        return status === Status.FAILURE ? Status.SUCCESS : Status.FAILURE;
    }

    public override get descriptor() {
        return {
            name: "Not",
            type: "Decorator",
            desc: "取反",
            doc: `
                + 将子节点的返回值取反`,
        };
    }
}
