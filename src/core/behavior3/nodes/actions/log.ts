import { Env, Node, Process, Result } from "../../behavior";

interface LogArgs {
    str: string;
}

export class Log extends Process {
    override run(node: Node, env: Env) {
        const args = node.args as LogArgs;
        console.log("behavior3 -> log:", args.str);
        return Result.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "Log",
            type: "Action",
            desc: "打印日志",
            args: [["str", "string", "日志"]],
        };
    }
}
