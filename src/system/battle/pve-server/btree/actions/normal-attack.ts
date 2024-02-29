import { b3 } from "../../../../../core/behavior3/behavior";

export class NormalAttack extends b3.Process {
    override run(node: b3.Node, env: b3.Env, ...any: unknown[]) {
        return b3.Status.FAILURE;
    }

    override get descriptor() {
        return {
            name: "NormalAttack",
            type: "Action",
            desc: "普通攻击",
            input: ["{目标}"],
            doc: `
                + 目标可以是单个实体，也可以是数组`,
        };
    }
}
