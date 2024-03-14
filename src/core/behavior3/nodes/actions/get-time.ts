import { Node, Process, Status, TreeEnv } from "../../behavior";

export class GetTime extends Process {
    public override check(node: Node) {}

    public override run(node: Node, env: TreeEnv) {
        env.lastRet.results.push(env.context.time);
        return Status.SUCCESS;
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
