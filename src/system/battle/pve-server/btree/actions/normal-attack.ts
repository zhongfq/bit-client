import {
    Env,
    Node,
    Process,
    ProcessDescriptor,
    Status,
} from "../../../../../core/behavior3/behavior";

export class NormalAttack extends Process {
    override run(node: Node, env: Env, ...any: unknown[]): Status {
        return Status.FAILURE;
    }

    override get descriptor(): ProcessDescriptor {
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
