import { Node, Process, Status, TreeEnv } from "../../behavior";

interface CheckArgs {
    value: string;
}

export class Check extends Process {
    public override check(node: Node): void {
        const args = node.args as CheckArgs;
        if (typeof args.value !== "string" || args.value.length == 0) {
            this.error(node, `args.value is not a expr string`);
        }
        node.tree.context.compileCode(args.value);
    }

    public override run(node: Node, env: TreeEnv) {
        const args = node.args as CheckArgs;
        const value = env.eval(args.value);
        return value ? Status.SUCCESS : Status.FAILURE;
    }

    public override get descriptor() {
        return {
            name: "Check",
            type: "Condition",
            desc: "检查True或False",
            args: [{ name: "value", type: "code", desc: "值" }],
            doc: `
                + 做简单数值公式判定，返回成功或失败`,
        };
    }
}
