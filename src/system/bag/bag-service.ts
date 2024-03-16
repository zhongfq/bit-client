import { app } from "../../app";
import { Service } from "../../core/service";
import proto from "../../def/proto";
import { errcode, opcode } from "../../def/protocol";
import { NetworkService } from "../network/network-service";
import { ItemVo } from "../../misc/vo/goods/item-vo";
import { VoUtil } from "../../misc/vo-util";
import { ItemBag } from "../../misc/vo/goods/item-vo-bag";

export class BagService extends Service<NetworkService> {
    public static readonly ITEM_UPDATE = "item-update";

    public readonly itemBag = VoUtil.createGoodsBag(ItemBag); //创建道具背包

    public constructor(network: NetworkService) {
        super(network);
        this.handle(opcode.bag.s2c_load, this._onLoad);
        this.handle(opcode.bag.s2c_use_item, this._onUseItem);
        this.handle(opcode.bag.s2c_composite_item, this._onCompositeItem);
        this.handle(opcode.bag.s2c_discard_item, this._onDiscardItem);
        this.handle(opcode.bag.notify_items, this._noNotify);
    }

    private _onLoad(data: proto.bag.s2c_load) {
        if (data.err === errcode.OK) {
            if (this.itemBag.getOne()) {
                for (const item of data.items as proto.bag.Item[]) {
                    const vo = new ItemVo();
                    vo.initByCmd(item);
                    this.itemBag.onAdd(vo); //新增道具
                }
            } else {
                this.itemBag.init(data);
            }
        }
    }

    private _onUseItem(data: proto.bag.s2c_use_item) {}

    private _onCompositeItem(data: proto.bag.s2c_composite_item) {}

    private _onDiscardItem(data: proto.bag.s2c_discard_item) {}

    private _noNotify(data: proto.bag.notify_items) {
        for (const item of data.items as proto.bag.Item[]) {
            const vo = new ItemVo();
            vo.initByCmd(item);
            if (!this.itemBag.get(item.id)) {
                this.itemBag.onAdd(vo); //新增道具
            } else if (item.num == 0) {
                this.itemBag.onRemove(item.id); //删除道具
            } else {
                this.itemBag.onUpdate(vo); //更新道具
            }
        }
        this.event(BagService.ITEM_UPDATE);
        // if(data.items)
    }

    // ------------------------------------------------------------------------
    // rpc call
    // ------------------------------------------------------------------------
    public async load(data: proto.bag.Ic2s_load) {
        return await this._network.call(proto.bag.c2s_load.create(data), proto.bag.s2c_load);
    }

    /**
     *请求使用道具
     * @param data
     */
    public async requestUseItem(data: proto.bag.Ic2s_use_item) {
        return await this._network.call(
            proto.bag.c2s_use_item.create(data),
            proto.bag.s2c_use_item
        );
    }

    /**
     *请求合成道具
     * @param data
     */
    public async requestCompositeItem(data: proto.bag.Ic2s_composite_item) {
        return await this._network.call(
            proto.bag.c2s_composite_item.create(data),
            proto.bag.s2c_composite_item
        );
    }

    /**
     *请求丢弃道具
     * @param data
     */
    public async requestDiscardItem(data: proto.bag.Ic2s_discard_item) {
        return await this._network.call(
            proto.bag.c2s_discard_item.create(data),
            proto.bag.s2c_discard_item
        );
    }
}
