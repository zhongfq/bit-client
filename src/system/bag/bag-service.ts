import { Constructor } from "../../core/dispatcher";
import { Service } from "../../core/service";
import proto from "../../def/proto.js";
import { errcode, opcode } from "../../def/protocol";
import { NetworkService } from "../network/network-service";
import { GoodsVo } from "./vo/goods/goods-vo";
import { GoodsVoBag } from "./vo/goods/goods-vo-bag";
import { ItemVo } from "./vo/goods/item-vo";
import { ItemBag } from "./vo/goods/item-vo-bag";
import { VO } from "./vo/vo";
import { VOBag } from "./vo/vo-bag";

export class BagService extends Service<NetworkService> {
    constructor(network: NetworkService) {
        super(network);
        this.handle(opcode.bag.s2c_load, this._onLoad);
        this.handle(opcode.bag.notify_items, this._noNotify);
    }
    private _onLoad(data: proto.bag.s2c_load) {
        if (data.err === errcode.OK) {
            this.itemBag.init(data);
        }
    }
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
            item.uid;
        }
        // if(data.items)
    }

    /**
     * 创建一个背包(不具备删的功能)
     */
    private createBag<T extends VOBag<VO<any, any>>>(clazz: Constructor<T>): T {
        let bag = new clazz();
        return bag;
    }
    /**
     * 创建一个道具背包(具有增查删改的功能)
     */
    private createGoodsBag<T extends GoodsVoBag<GoodsVo<any, any>>>(clazz: Constructor<T>): T {
        let bag = this.createBag(clazz);
        return bag;
    }

    // ------------------------------------------------------------------------
    // rpc call
    // ------------------------------------------------------------------------
    public async load() {
        await this._network.call(proto.bag.c2s_load.create(), proto.chest.s2c_load);
    }

    /**道具背包*/
    itemBag = this.createGoodsBag(ItemBag);
}
