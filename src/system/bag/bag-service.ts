import { app } from "../../app";
import { Service } from "../../core/service";
import proto from "../../def/proto.js";
import { errcode, opcode } from "../../def/protocol";
import { NetworkService } from "../network/network-service";
import { ItemVo } from "../../misc/vo/goods/item-vo";
import { VoUtil } from "../../misc/vo-util";
import { ItemBag } from "../../misc/vo/goods/item-vo-bag";

export class BagService extends Service<NetworkService> {
    static readonly ITEM_UPDATE = "item-update";
    readonly itemBag = VoUtil.createGoodsBag(ItemBag);
    constructor(network: NetworkService) {
        super(network);
        this.handle(opcode.bag.s2c_load, this._onLoad);
        this.handle(opcode.bag.s2c_use_item, this._onUseItem);
        this.handle(opcode.bag.s2c_composite_item, this._onCompositeItem);
        this.handle(opcode.bag.s2c_discard_item, this._onDiscardItem);
        this.handle(opcode.bag.notify_items, this._noNotify);
    }
    private _onLoad(data: proto.bag.s2c_load) {
        if (data.err === errcode.OK) {
            this.itemBag.init(data);
        }
    }
    private _onUseItem(data: proto.bag.s2c_use_item) {}
    private _onCompositeItem(data: proto.bag.s2c_composite_item) {}
    private _onDiscardItem(data: proto.bag.s2c_discard_item) {}
    private _noNotify(data: proto.bag.notify_items) {
        for (let item of data.items as proto.bag.Item[]) {
            let vo = new ItemVo();
            vo.initByCmd(item);
            if (!this.itemBag.get(item.id)) {
                this.itemBag.onAdd(vo);
            } else if (item.num == 0) {
                this.itemBag.onRemove(item.id);
            } else {
                this.itemBag.onUpdate(vo);
            }
        }
        this.event(BagService.ITEM_UPDATE);
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
