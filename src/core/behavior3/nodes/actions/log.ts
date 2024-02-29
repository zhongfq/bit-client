import { Env, Node, Process, Status } from "../../behavior";

interface LogArgs {
    str: string;
}

export class Log extends Process {
    override run(node: Node, env: Env) {
        const args = node.args as LogArgs;
        console.log("behavior3 -> log:", args.str);
        return Status.SUCCESS;
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
