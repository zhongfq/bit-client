import { b3 } from "../../behavior";

export class GetTime extends b3.Process {
    override check(node: b3.Node) {}

    override run(node: b3.Node, env: b3.Env) {
        env.lastRet.results.push(env.context.time);
        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "GetTime",
            type: "Action",
            desc: "获取当前时间",
            output: ["当前时间"],
        };
    }
}
