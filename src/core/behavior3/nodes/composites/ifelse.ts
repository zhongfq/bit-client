import { Env, Node, Process, Result, Status } from "../../behavior";

export class Ifelse extends Process {
    override check(node: Node): void {
        if (node.children.length < 2) {
            this.error(node, `at least tow children`);
        }
    }

    override run(node: Node, env: Env) {
        const last = node.resume(env);
        if (typeof last === "number") {
            if (env.lastStatus === Status.RUNNING) {
                return Result.RUNNING;
            } else if (last === 0) {
                return this._ifelse(node, env, env.lastStatus);
            } else if (last === 1 || last === 2) {
                if (env.lastStatus === Status.SUCCESS) {
                    return Result.SUCCESS;
                } else {
                    return Result.FAIL;
                }
            }
        }

        const ret = node.children[0].run(env);
        if (ret.status === Status.RUNNING) {
            return node.yield(env, 0);
        } else {
            return this._ifelse(node, env, ret.status);
        }
    }

    private _retChild(node: Node, env: Env, idx: number) {
        const ret = node.children[idx].run(env);
        if (ret.status === Status.RUNNING) {
            return node.yield(env, idx);
        } else if (ret.status === Status.SUCCESS) {
            return Result.SUCCESS;
        } else {
            return Result.FAIL;
        }
    }

    private _ifelse(node: Node, env: Env, status: Status) {
        if (status === Status.RUNNING) {
            return Result.RUNNING;
        } else if (status === Status.SUCCESS) {
            return this._retChild(node, env, 1);
        } else if (node.children.length >= 3) {
            return this._retChild(node, env, 2);
        } else {
            return Result.FAIL;
        }
    }

    override get descriptor() {
        return {
            name: "IfElse",
            type: "Composite",
            desc: "If判断",
            doc: `
                + 拥有三个子节点(至少两个)
                + 当第一个子节点返回SUCCESS的时候执行第二个子节点并返回此子节点的返回值
                + 否则执行第三个子节点并返回这个节点的返回值,若无第三个子节点,则返回FAIL`,
        };
    }
}
