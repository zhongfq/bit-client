import { Node, Process, Status, TreeEnv } from "../../behavior";

interface LoopArgs {
    count: number;
}

export class Loop extends Process {
    public override run(node: Node, env: TreeEnv, count?: number) {
        count = count ?? (node.args as LoopArgs).count;

        let last = node.resume(env);
        let i = 0;
        let j = 0;

        if (last instanceof Array) {
            i = last[0];
            j = last[1];
            if (env.lastRet.status === Status.RUNNING) {
                return Status.RUNNING;
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
                const status = node.children[j].run(env);
                if (status === Status.RUNNING) {
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
        return Status.SUCCESS;
    }

    public override get descriptor() {
        return {
            name: "Loop",
            type: "Composite",
            desc: "循环执行",
            args: [{ name: "count", type: "int?", desc: "次数" }],
            input: ["次数(int)?"],
        };
    }
}
