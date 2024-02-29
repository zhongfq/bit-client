import { b3 } from "../../behavior";

interface LogArgs {
    str: string;
}

export class Log extends b3.Process {
    override run(node: b3.Node, env: b3.Env) {
        const args = node.args as LogArgs;
        console.log("behavior3 -> log:", args.str);
        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "Log",
            type: "Action",
            desc: "打印日志",
            args: [{ name: "str", type: "string", desc: "日志" }],
        };
    }
}
