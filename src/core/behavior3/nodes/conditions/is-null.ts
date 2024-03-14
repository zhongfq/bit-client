import { Node, Process, Status, TreeEnv } from "../../behavior";

export class IsNull extends Process {
    public override run(node: Node, env: TreeEnv, value: unknown) {
        if (value === undefined || value === null) {
            return Status.SUCCESS;
        } else {
            return Status.FAILURE;
        }
    }

    public override get descriptor() {
        return {
            name: "IsNull",
            type: "Condition",
            desc: "判断变量是否不存在",
            input: ["判断的变量"],
        };
    }
}
