import { b3 } from "../../../../../core/behavior3/behavior";

export class BackTeam extends b3.Process {
    override check(node: b3.Node) {}

    override run(node: b3.Node, env: b3.Env) {
        return b3.Status.FAILURE;
    }

    override get descriptor() {
        return {
            name: "BackTeam",
            type: "Action",
            desc: "士兵归队",
            doc: `
                + 士兵归队，归队过程中，主执行其它命令`,
        };
    }
}
