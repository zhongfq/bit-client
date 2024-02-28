import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ui } from "../../misc/ui";
import { TaskItemBox } from "../../ui-runtime/prefab/task/TaskItemBox";
import { TaskUI } from "../../ui-runtime/prefab/task/TaskUI";
import { TaskVo } from "../../misc/vo/task/task-vo";
import { TaskConf } from "../../def/task";
import { TaskService } from "./task-service";

const { regClass, property } = Laya;

@regClass()
export class TaskMediator extends Mediator {
    declare owner: TaskUI;
    private tlTaskData: TaskVo[] = [];

    override onAwake(): void {
        this.initUIEvent();
        this.initServiceEvent();
        this.tlTaskData.push(app.service.task.mainTask);
        this.tlTaskData = this.tlTaskData.concat(app.service.task.branchTaskBag.toArray());
        this.updateList();
    }

    initUIEvent() {
        this.owner.listTask.renderHandler = new Laya.Handler(this, this.onListRender);
        this.owner.listTask.mouseHandler = new Laya.Handler(this, this.onListClick);
    }

    initServiceEvent() {
        this.on(app.service.task, TaskService.TASK_UPDATE, () => {
            this.tlTaskData = [];
            this.tlTaskData.push(app.service.task.mainTask);
            this.tlTaskData = this.tlTaskData.concat(app.service.task.branchTaskBag.toArray());
            this.updateList();
        });
    }

    onListClick(e: Laya.Event, index: number) {
        if (e.type == Laya.Event.CLICK) {
            if (e.target.name === "btnUse") {
                const taskCmd = this.tlTaskData[index].cmd;
                const ids: number[] = [];
                if (this.tlTaskData[index].ref.type == TaskConf.TASK_TYPE.BRANCH) {
                    for (const task of app.service.task.branchTaskBag.toArray()) {
                        if (task.cmd && task.cmd?.num >= task.cmd?.max) {
                            ids.push(task.cmd.id);
                        }
                    }
                } else {
                    if (taskCmd) {
                        ids.push(taskCmd.id);
                    }
                }
                app.service.task.requestReceiveReward({ taskIds: ids });
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
