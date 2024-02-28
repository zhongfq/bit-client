import { TaskVo } from "../../../misc/vo/task/task-vo";
import { TaskUIBase } from "./TaskUI.generated";

const { regClass } = Laya;

@regClass()
export class TaskUI extends TaskUIBase {
    override onAwake(): void {
        this.listTask.array = [];
        this.btnClose.on(Laya.Event.CLICK, () => {
            this.close();
        });
    }
}
