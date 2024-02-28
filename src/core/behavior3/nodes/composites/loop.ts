import { Env, Node, Process, Result, Status } from "../../behavior";

interface LoopArgs {
    count: number;
}

export class Loop extends Process {
    override run(node: Node, env: Env, count?: number) {
        count = count ?? (node.args as LoopArgs).count;

        let last = node.resume(env);
        let i = 0;
        let j = 0;

        if (last instanceof Array) {
            i = last[0];
            j = last[1];
            if (env.lastStatus === Status.RUNNING) {
                return Result.RUNNING;
            } else {
                j++;
                if (j >= node.children.length) {
                    i++;
                    j = 0;
                }
            }
        }

        for (; i < count; i++) {
            for (; j < node.children.length; j++) {
                const ret = node.children[j].run(env);
                if (ret.status === Status.RUNNING) {
                    if (last instanceof Array) {
                        last[0] = i;
                        last[1] = j;
                    } else {
                        last = [i, j];
                    }
                    return node.yield(env, last);
                }
            }
        }
        return Result.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "Loop",
            type: "Composite",
            desc: "循环执行",
            args: [["count", "int?", "次数"]],
            input: ["次数(int)?"],
        };
    }
}
