import { TaskVo } from "../../../misc/vo/task/task-vo";
import { TaskUIBase } from "./TaskUI.generated";

const { regClass } = Laya;

@regClass()
export class TaskUI extends TaskUIBase {
    public override onAwake(): void {}
}
