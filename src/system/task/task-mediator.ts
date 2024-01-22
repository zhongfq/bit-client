import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ui } from "../../misc/ui";
import { TaskItemBox } from "../../ui-runtime/prefab/task/TaskItemBox";
import { TaskUI } from "../../ui-runtime/prefab/task/TaskUI";
import { TaskVo } from "../../misc/vo/task/task-vo";

const { regClass, property } = Laya;

@regClass()
export class TaskMediator extends Mediator {
    owner!: TaskUI;
    private tlTaskData!: TaskVo[];

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this.initBtn();
        this.initEvent();
        this.tlTaskData = app.service.task.taskBag.toArray();
        this.owner.List.renderHandler = new Laya.Handler(this, this.onListRender);
        this.owner.List.mouseHandler = new Laya.Handler(this, this.onListClick);
        this.updateList();
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

    initBtn() {}

    initEvent() {}

    updateList() {
        this.owner.List.array = this.tlTaskData;
    }
}
