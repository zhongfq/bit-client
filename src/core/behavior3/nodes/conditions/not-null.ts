import { Node, Process, Status, TreeEnv } from "../../behavior";

export class NotNull extends Process {
    public override run(node: Node, env: TreeEnv, value: unknown) {
        if (value === undefined || value === null) {
            return Status.FAILURE;
        } else {
            return Status.SUCCESS;
        }
    }

    public override get descriptor() {
        return {
            name: "NotNull",
            type: "Condition",
            desc: "判断变量是否存在",
            input: ["判断的变量"],
        };
    }
}
