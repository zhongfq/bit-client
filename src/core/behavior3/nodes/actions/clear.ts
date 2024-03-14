import { Node, Process, Status, TreeEnv } from "../../behavior";

export class Clear extends Process {
    public override check(node: Node) {}

    public override run(node: Node, env: TreeEnv) {
        env.lastRet.results.push(undefined);
        return Status.SUCCESS;
    }

    public override get descriptor() {
        return {
            name: "Clear",
            type: "Action",
            desc: "清除变量",
            output: ["清除的变量名"],
        };
    }
}
