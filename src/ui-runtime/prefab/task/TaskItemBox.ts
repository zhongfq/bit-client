const { regClass } = Laya;
import { TaskVo } from "../../../misc/vo/task/task-vo";
import { TaskItemBoxBase } from "./TaskItemBox.generated";

@regClass()
export class TaskItemBox extends TaskItemBoxBase {
    updateInfo(data: TaskVo) {
        this.labelName.text = data.name;
        this.labelDesc.text = data.desc;
        if (data.cmd?.finish) {
            this.btnUse.label = "领取";
        } else {
            this.btnUse.label = "前往";
        }
    }
}
