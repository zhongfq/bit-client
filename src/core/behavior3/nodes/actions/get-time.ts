import { b3 } from "../../behavior";

export class GetTime extends b3.Process {
    public override check(node: b3.Node) {}

    public override run(node: b3.Node, env: b3.TreeEnv) {
        env.lastRet.results.push(env.context.time);
        return b3.Status.SUCCESS;
    }

    public override get descriptor() {
        return {
            name: "GetTime",
            type: "Action",
            desc: "获取当前时间",
            output: ["当前时间"],
        };
    }
}
