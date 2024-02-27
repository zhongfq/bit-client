import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { task } from "../../def/proto";
import { ui } from "../../misc/ui";
import { TaskVo } from "../../misc/vo/task/task-vo";
import { HomeTaskBoxUI } from "../../ui-runtime/prefab/home/HomeTaskBoxUI";
import { TaskService } from "../task/task-service";

const { regClass, property } = Laya;

@regClass()
export class homeTaskMediator extends Mediator {
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    declare owner: HomeTaskBoxUI;

    onAwake(): void {
        this.initEvent();
        this.owner.on(Laya.Event.CLICK, this, () => {
            app.ui.show(ui.TASK);
        });
        // this.owner.imgIcon.skin = "";
        this.updateInfo();
    }

    initEvent() {
        this.on(app.service.task, TaskService.TASK_UPDATE, () => {
            this.updateInfo();
        });
    }

    updateInfo() {
        const taskInfo = app.service.task.mainTask;
        if (!taskInfo.cmd) {
            this.owner.visible = false;
            return;
        }
        this.owner.labelDesc.text = taskInfo.ref.desc || "";
        this.owner.labelValue.text = `${taskInfo.cmd.num}/${taskInfo.cmd.max}`;
        this.owner.ProgressBar.value = Number(taskInfo.cmd.num) / Number(taskInfo.cmd.max);
        if (taskInfo.cmd.num >= taskInfo.cmd.max && taskInfo.ref.receive_type) {
            //完成任务
            app.service.task.requestReceiveReward({ taskIds: [taskInfo.cmd.id] });
        }
    }
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}
