import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ui } from "../../misc/ui";
import { TaskItemBox } from "../../ui-runtime/prefab/task/TaskItemBox";
import { TaskUI } from "../../ui-runtime/prefab/task/TaskUI";
import { TaskVo } from "../../misc/vo/task/task-vo";
import { TaskConf } from "../../def/task";
import { TaskService } from "./task-service";

const { regClass, property } = Laya;

interface TaskItemData {
    taskVo: TaskVo;
    isShowTips: boolean;
}
const itemNodeY = 28;
@regClass()
export class TaskMediator extends Mediator {
    public declare owner: TaskUI;
    private tlTaskData: TaskItemData[] = [];

    public override onAwake(): void {
        this.initUIEvent();
        this.initServiceEvent();

        this.tlTaskData.push({ taskVo: app.service.task.mainTask, isShowTips: true });
        let index = 0;
        for (const task of app.service.task.branchTaskBag.toArray()) {
            this.tlTaskData.push({ taskVo: task, isShowTips: index == 0 });
            index++;
        }
        // this.tlTaskData = this.tlTaskData.concat(app.service.task.branchTaskBag.toArray());
        // this.updateList();
    }

    public override onStart(): void {
        this.updateList();
    }

    private initUIEvent() {
        this.owner.listTaskNew.setRenderHandler((item: TaskItemBox, data: TaskItemData) => {
            if (data.isShowTips) {
                item.boxInfo.y = itemNodeY;
                item.height = 110 + itemNodeY;
                item.labelTips.text = data.taskVo.tipsName;
            } else {
                item.height = 110;
                item.labelTips.text = "";
            }

            // item.labelName.text = data.taskVo.name;
            item.labelDesc.text = data.taskVo.desc;
            if (data.taskVo.cmd?.finish) {
                item.btnUse.label = "领取";
            } else {
                item.btnUse.label = "前往";
            }
            item.btnUse.on(Laya.Event.CLICK, () => {
                const taskCmd = data.taskVo.cmd;
                const ids: number[] = [];
                if (data.taskVo.ref.type == TaskConf.TASK_TYPE.BRANCH) {
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
            });
            // item.height = 127;
            // const a = 1;
        });
    }

    private initServiceEvent() {
        this.$(app.service.task).on(TaskService.TASK_UPDATE, () => {
            this.tlTaskData = [];
            this.tlTaskData.push({ taskVo: app.service.task.mainTask, isShowTips: true });
            let index = 0;
            for (const task of app.service.task.branchTaskBag.toArray()) {
                this.tlTaskData.push({ taskVo: task, isShowTips: index == 0 });
                index++;
            }
            this.updateList();
        });
    }

    private onListRender(item: TaskItemBox, index: number) {
        item.updateInfo(item.dataSource);
    }

    private updateList() {
        // this.owner.listTask.array = this.tlTaskData;
        this.owner.listTaskNew.setArrayData(this.tlTaskData);
    }
}
