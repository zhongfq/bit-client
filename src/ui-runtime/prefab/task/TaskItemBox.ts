const { regClass } = Laya;
import { TaskVo } from "../../../misc/vo/task/task-vo";
import { TaskItemBoxBase } from "./TaskItemBox.generated";

@regClass()
export class TaskItemBox extends TaskItemBoxBase {
    public updateInfo(data: TaskVo) {
        this.labelDesc.text = data.desc;
        if (data.cmd?.finish) {
            this.btnUse.label = "领取";
        } else {
            this.btnUse.label = "前往";
        }
    }
}
