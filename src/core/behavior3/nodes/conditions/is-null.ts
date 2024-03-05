import { b3 } from "../../behavior";

export class IsNull extends b3.Process {
    override run(node: b3.Node, env: b3.TreeEnv, value: unknown) {
        if (value === undefined || value === null) {
            return b3.Status.SUCCESS;
        } else {
            return b3.Status.FAILURE;
        }
    }

    override get descriptor() {
        return {
            name: "IsNull",
            type: "Condition",
            desc: "判断变量是否不存在",
            input: ["判断的变量"],
        };
    }
}
