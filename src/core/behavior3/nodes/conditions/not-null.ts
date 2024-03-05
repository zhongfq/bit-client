import { b3 } from "../../behavior";

export class NotNull extends b3.Process {
    override run(node: b3.Node, env: b3.Env, value: unknown) {
        if (value === undefined || value === null) {
            return b3.Status.FAILURE;
        } else {
            return b3.Status.SUCCESS;
        }
    }

    override get descriptor() {
        return {
            name: "NotNull",
            type: "Condition",
            desc: "判断变量是否存在",
            input: ["判断的变量"],
        };
    }
}
