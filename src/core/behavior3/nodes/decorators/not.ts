import { Env, Node, Process, Result, Status } from "../../behavior";

export class Not extends Process {
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
            } else {
                return this._retNot(env.lastStatus);
            }
        }
        const ret = node.children[0].run(env);
        if (ret.status === Status.RUNNING) {
            return node.yield(env);
        }
        return this._retNot(ret.status);
    }

    private _retNot(status: Status) {
        return status === Status.FAIL ? Result.SUCCESS : Result.FAIL;
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
