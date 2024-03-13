import { b3 } from "../../behavior";

export class Clear extends b3.Process {
    public override check(node: b3.Node) {}

    public override run(node: b3.Node, env: b3.TreeEnv) {
        env.lastRet.results.push(undefined);
        return b3.Status.SUCCESS;
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
