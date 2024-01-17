const { regClass } = Laya;
import { TaskVo } from "../../../system/vo/task/task-vo";
import { TaskItemBoxBase } from "./TaskItemBox.generated";

@regClass()
export class TaskItemBox extends TaskItemBoxBase {
    updateInfo(data: TaskVo) {
        this.labelName.text = data.name;
        this.labelDesc.text = data.desc;
        if (data.cmd?.finish) {
            this.btnUse.label = "已领取";
        } else if (Number(data.cmd?.num) >= Number(data.cmd?.max)) {
            this.btnUse.label = "领取";
        } else {
            this.btnUse.label = "前往";
        }
    }
}
