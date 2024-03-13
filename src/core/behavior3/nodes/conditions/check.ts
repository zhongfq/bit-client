import { b3 } from "../../behavior";

interface CheckArgs {
    value: string;
}

export class Check extends b3.Process {
    public override check(node: b3.Node): void {
        const args = node.args as CheckArgs;
        if (typeof args.value !== "string" || args.value.length == 0) {
            this.error(node, `args.value is not a expr string`);
        }
        node.tree.context.compileExpr(args.value);
    }

    public override run(node: b3.Node, env: b3.TreeEnv) {
        const args = node.args as CheckArgs;
        const value = env.eval(args.value);
        return value ? b3.Status.SUCCESS : b3.Status.FAILURE;
    }

    public override get descriptor() {
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
