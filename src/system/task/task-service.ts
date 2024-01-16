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
    private _onLoad(data: proto.bag.s2c_load) {
        if (data.err === errcode.OK) {
            // this.itemBag.init(data);
        }
    }
    private _onreceiveReward(data: proto.bag.s2c_use_item) {}
    private _noNotifyTasks(data: proto.bag.notify_items) {
        // for (let item of data.items as proto.bag.Item[]) {
        //     let vo = new ItemVo();
        //     vo.initByCmd(item);
        //     if (!this.itemBag.get(item.id)) {
        //         this.itemBag.onAdd(vo);
        //     } else if (item.num == 0) {
        //         this.itemBag.onRemove(item.id);
        //     } else {
        //         this.itemBag.onUpdate(vo);
        //     }
        // }
        // this.event(BagService.ITEM_UPDATE);
        // if(data.items)
    }
    private _noNotifyRemoveTasks(data: proto.bag.notify_items) {
        // for (let item of data.items as proto.bag.Item[]) {
        //     let vo = new ItemVo();
        //     vo.initByCmd(item);
        //     if (!this.itemBag.get(item.id)) {
        //         this.itemBag.onAdd(vo);
        //     } else if (item.num == 0) {
        //         this.itemBag.onRemove(item.id);
        //     } else {
        //         this.itemBag.onUpdate(vo);
        //     }
        // }
        // this.event(BagService.ITEM_UPDATE);
        // if(data.items)
    }

    // ------------------------------------------------------------------------
    // rpc call
    // ------------------------------------------------------------------------
    public async load(data: proto.bag.Ic2s_load) {
        await this._network.call(proto.bag.c2s_load.create(data), proto.bag.s2c_load);
    }
    public async callUseItem(data: proto.bag.Ic2s_use_item) {
        await this._network.call(proto.bag.c2s_use_item.create(data), proto.bag.s2c_use_item);
    }
    public async callCompositeItem(data: proto.bag.Ic2s_composite_item) {
        await this._network.call(
            proto.bag.c2s_composite_item.create(data),
            proto.bag.s2c_composite_item
        );
    }
    public async callDiscardItem(data: proto.bag.Ic2s_discard_item) {
        await this._network.call(
            proto.bag.c2s_discard_item.create(data),
            proto.bag.s2c_discard_item
        );
    }
}
