import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ui } from "../../misc/ui";
import { TaskItemBox } from "../../ui-runtime/prefab/task/TaskItemBox";
import { TaskUI } from "../../ui-runtime/prefab/task/TaskUI";
import { TaskVo } from "../../misc/vo/task/task-vo";

const { regClass, property } = Laya;

@regClass()
export class TaskMediator extends Mediator {
    declare owner: TaskUI;
    private tlTaskData!: TaskVo[];

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this.initEvent();
        this.tlTaskData = app.service.task.taskBag.toArray();
        this.updateList();
    }

    initEvent() {
        this.owner.listTask.renderHandler = new Laya.Handler(this, this.onListRender);
        this.owner.listTask.mouseHandler = new Laya.Handler(this, this.onListClick);
    }
    onListClick(e: Laya.Event, index: number) {
        if (e.type == Laya.Event.CLICK) {
            if (e.target.name === "btnUse") {
                app.service.task.requestReceiveReward({ taskIds: [this.tlTaskData[index].id] });
            }
        }
    }
    onListRender(item: TaskItemBox, index: number) {
        item.updateInfo(item.dataSource);
    }

    updateList() {
        this.owner.listTask.array = this.tlTaskData;
    }
}
