import { b3 } from "../../behavior";

interface CheckArgs {
    value: string;
}

export class Check extends b3.Process {
    override check(node: b3.Node): void {
        const args = node.args as CheckArgs;
        if (typeof args.value !== "string" || args.value.length == 0) {
            this.error(node, `args.value is not a expr string`);
        }
        node.tree.context.compileExpr(args.value);
    }

    override run(node: b3.Node, env: b3.Env) {
        const args = node.args as CheckArgs;
        const value = env.eval(args.value);
        if (typeof value === "number") {
            throw new Error(`code error: ${args.value}`);
        } else {
            return value ? b3.Status.SUCCESS : b3.Status.FAILURE;
        }
    }

    override get descriptor() {
        return {
            name: "Check",
            type: "Condition",
            desc: "检查True或False",
            args: [{ name: "value", type: "code?", desc: "值" }],
            doc: `
                + 做简单数值公式判定，返回成功或失败`,
        };
    }
}
