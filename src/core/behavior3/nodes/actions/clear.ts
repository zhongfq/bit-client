import { b3 } from "../../behavior";

export class Clear extends b3.Process {
    override check(node: b3.Node) {}

    override run(node: b3.Node, env: b3.Env) {
        env.lastRet.results.push(undefined);
        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "Clear",
            type: "Action",
            desc: "清除变量",
            output: ["清除的变量名"],
        };
    }
}
