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

    onAwake(): void {
        this.initUIEvent();
        this.tlTaskData = app.service.task.taskBag.toArray();
        this.updateList();
    }

    initUIEvent() {
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
