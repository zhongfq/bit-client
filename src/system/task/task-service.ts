import { app } from "../../app";
import { Constructor } from "../../core/dispatcher";
import { Service } from "../../core/service";
import proto from "../../def/proto";
import { errcode, errmsg, opcode } from "../../def/protocol";
import { VoUtil } from "../../misc/vo-util";
import { TaskBag } from "../../misc/vo/task/task-vo-bag";
import { NetworkService } from "../network/network-service";

export class TaskService extends Service<NetworkService> {
    taskBag = VoUtil.createBag(TaskBag);
    constructor(network: NetworkService) {
        super(network);
        this.handle(opcode.task.s2c_load, this._onLoad);
        this.handle(opcode.task.s2c_receive_reward, this._onreceiveReward);
        this.handle(opcode.task.notify_tasks, this._noNotifyTasks);
        this.handle(opcode.task.notify_remove_tasks, this._noNotifyRemoveTasks);
    }
    private _onLoad(data: proto.task.s2c_load) {
        if (data.err === errcode.OK) {
            this.taskBag.init(data);
        } else {
            console.log(errmsg[data.err as errcode]);
        }
    }
    private _onreceiveReward(data: proto.task.s2c_receive_reward) {
        if (data.err != errcode.OK) {
            console.log(errmsg[data.err as errcode]);
        }
    }
    private _noNotifyTasks(data: proto.bag.notify_items) {}
    private _noNotifyRemoveTasks(data: proto.bag.notify_items) {}

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
