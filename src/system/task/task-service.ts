import { app } from "../../app";
import { Constructor } from "../../core/dispatcher";
import { Service } from "../../core/service";
import proto, { task } from "../../def/proto";
import { errcode, errmsg, opcode } from "../../def/protocol";
import { TaskConf } from "../../def/task";
import { VoUtil } from "../../misc/vo-util";
import { TaskVo } from "../../misc/vo/task/task-vo";
import { TaskBag } from "../../misc/vo/task/task-vo-bag";
import { NetworkService } from "../network/network-service";
import { TableUtil } from "../table/table-util";

export class TaskService extends Service<NetworkService> {
    public static readonly TASK_UPDATE = "task-update";
    public static readonly TASK_REMOVE = "task-remove";

    public declare mainTask: TaskVo;
    public branchTaskBag = VoUtil.createBag(TaskBag);

    public constructor(network: NetworkService) {
        super(network);
        this.handle(opcode.task.s2c_load, this._onLoad);
        this.handle(opcode.task.s2c_receive_reward, this._onreceiveReward);
        this.handle(opcode.task.notify_tasks, this._noNotifyTasks);
        this.handle(opcode.task.notify_remove_tasks, this._noNotifyRemoveTasks);
    }

    private _onLoad(data: proto.task.s2c_load, request: proto.task.c2s_load) {
        if (data.err === errcode.OK) {
            switch (request.taskType) {
                case TaskConf.TASK_TYPE.MAIN:
                    this.mainTask = new TaskVo();
                    this.mainTask.initByCmd(data.tasks[0] as task.TaskInfo);
                    break;
                case TaskConf.TASK_TYPE.BRANCH:
                    this.branchTaskBag.init(data);
                    break;
            }
        } else {
            console.log(errmsg[data.err as errcode]);
        }
    }

    private _onreceiveReward(data: proto.task.s2c_receive_reward) {
        if (data.err != errcode.OK) {
            console.log(errmsg[data.err as errcode]);
        }
    }

    private _noNotifyTasks(data: proto.task.notify_tasks) {
        for (const taskInfo of data.tasks) {
            const taskRow = app.service.table.task[Number(taskInfo.id)];
            if (taskRow.type == TaskConf.TASK_TYPE.MAIN) {
                this.mainTask.initByCmd(taskInfo as task.TaskInfo);
            } else if (taskRow.type == TaskConf.TASK_TYPE.BRANCH) {
                if (this.branchTaskBag.getOne()) {
                    const taskVo = new TaskVo();
                    taskVo.initByCmd(taskInfo as task.TaskInfo);
                    this.branchTaskBag.onUpdate(taskVo);
                }
            }
        }
        this.event(TaskService.TASK_UPDATE);
    }

    private _noNotifyRemoveTasks(data: proto.task.notify_remove_tasks) {
        for (const taskId of data.taskIds) {
            const taskRow = app.service.table.task[taskId];
            if (taskRow.type == TaskConf.TASK_TYPE.MAIN) {
                this.mainTask.initByCmd({} as task.TaskInfo);
            } else if (taskRow.type == TaskConf.TASK_TYPE.BRANCH) {
                this.branchTaskBag.onRemove(taskId);
            }
        }
        this.event(TaskService.TASK_REMOVE);
    }

    // ------------------------------------------------------------------------
    // rpc call
    // ------------------------------------------------------------------------
    public async load(data: proto.task.Ic2s_load) {
        return await this._network.call(proto.task.c2s_load.create(data), proto.task.s2c_load);
    }

    public async requestReceiveReward(data: proto.task.Ic2s_receive_reward) {
        return await this._network.call(
            proto.task.c2s_receive_reward.create(data),
            proto.task.s2c_receive_reward
        );
    }
}
