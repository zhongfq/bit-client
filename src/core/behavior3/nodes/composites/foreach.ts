import { Env, Node, Process, Status } from "../../behavior";
import { ValueType } from "../../expression-evaluator";

export class Foreach extends Process {
    override check(node: Node): void {
        const varName = node.data.output?.[0];
        if (!varName) {
            this.error(node, `args.time is not a number`);
        }
    }

    override run(node: Node, env: Env, arr: ValueType[]) {
        let last = node.resume(env);
        let i: number = 0;
        let j: number = 0;

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

        for (; i < arr.length; i++) {
            env.setVar(node.data.output![0], arr[i]);
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

    override get descriptor() {
        return {
            name: "ForEach",
            type: "Composite",
            desc: "遍历数组",
            input: ["[{数组}]"],
            output: ["{变量}"],
            doc: `
                + 每次执行子节点前会设置当前遍历到的变量
                + 会执行所有子节点
                + 永远返回成功/正在运行`,
        };
    }
}
