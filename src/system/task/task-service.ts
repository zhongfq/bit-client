import { app } from "../../app";
import { Constructor } from "../../core/dispatcher";
import { Service } from "../../core/service";
import proto from "../../def/proto.js";
import { errcode, opcode } from "../../def/protocol";
import { NetworkService } from "../network/network-service";

export class TaskService extends Service<NetworkService> {
    constructor(network: NetworkService) {
        super(network);
        this.handle(opcode.task.s2c_load, this._onLoad);
        this.handle(opcode.task.s2c_receive_reward, this._onreceiveReward);
        this.handle(opcode.task.notify_tasks, this._noNotifyTasks);
        this.handle(opcode.task.notify_remove_tasks, this._noNotifyRemoveTasks);
    }
    private _onLoad(data: proto.task.s2c_load) {
        if (data.err === errcode.OK) {
            app.vo.taskBag.init(data);
        }
    }
    private _onreceiveReward(data: proto.bag.s2c_use_item) {}
    private _noNotifyTasks(data: proto.bag.notify_items) {}
    private _noNotifyRemoveTasks(data: proto.bag.notify_items) {}

    // ------------------------------------------------------------------------
    // rpc call
    // ------------------------------------------------------------------------
    public async load(data: proto.task.Ic2s_load) {
        await this._network.call(proto.task.c2s_load.create(data), proto.task.s2c_load);
    }
    public async callReceiveReward(data: proto.task.Ic2s_receive_reward) {
        await this._network.call(
            proto.task.c2s_receive_reward.create(data),
            proto.bag.s2c_use_item
        );
    }
}
