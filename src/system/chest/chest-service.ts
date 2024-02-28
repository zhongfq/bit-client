import { Service } from "../../core/service";
import proto from "../../def/proto";
import { errcode, opcode } from "../../def/protocol";
import { NetworkService } from "../network/network-service";
import { ItemVo } from "../../misc/vo/goods/item-vo";
import { VoUtil } from "../../misc/vo-util";
import { ItemBag } from "../../misc/vo/goods/item-vo-bag";

export class ChestService extends Service<NetworkService> {
    // static readonly ITEM_UPDATE = "item-update";

    // readonly itemBag = VoUtil.createGoodsBag(ItemBag); //创建道具背包
    scoreInfo: proto.chest.ScoreInfo | null = null; //积分数据
    chestInfo: Map<number, proto.chest.ChestInfo> = new Map();
    heroId!: number;

    constructor(network: NetworkService) {
        super(network);
        this.handle(opcode.chest.s2c_load, this._onLoad);
        this.handle(opcode.chest.s2c_open_chest, this._onOpenChest);
        this.handle(opcode.chest.s2c_score_receive, this._onScoreReceive);
        this.handle(opcode.chest.s2c_switch_hero, this._onSwitchHero);
        this.handle(opcode.chest.notify, this._noNotify);
    }

    private _onLoad(data: proto.chest.s2c_load) {
        if (data.err === errcode.OK) {
            if (data.score) {
                this.scoreInfo = data.score as proto.chest.ScoreInfo;
            }
            for (const chest of data.chests) {
                this.chestInfo.set(Number(chest.id), chest as proto.chest.ChestInfo);
            }
            this.heroId = data.heroId;
        }
    }

    private _onOpenChest(data: proto.chest.s2c_open_chest) {}

    private _onScoreReceive(data: proto.chest.s2c_score_receive) {}

    private _onSwitchHero(data: proto.chest.s2c_switch_hero) {}

    private _noNotify(data: proto.chest.notify) {}

    // ------------------------------------------------------------------------
    // rpc call
    // ------------------------------------------------------------------------
    public async load(data: proto.bag.Ic2s_load) {
        return await this._network.call(proto.bag.c2s_load.create(data), proto.bag.s2c_load);
    }

    /**
     *请求打开宝箱
     * @param data
     */
    public async requestOpenChest(data: proto.chest.Ic2s_open_chest) {
        return await this._network.call(
            proto.chest.c2s_open_chest.create(data),
            proto.chest.s2c_open_chest
        );
    }

    /**
     *请求领取积分
     * @param data
     */
    public async requestScoreReceive(data: proto.chest.Ic2s_score_receive) {
        return await this._network.call(
            proto.chest.c2s_score_receive.create(data),
            proto.chest.s2c_score_receive
        );
    }

    /**
     *请求切换武将
     * @param data
     */
    public async requestSwitchHero(data: proto.chest.c2s_switch_hero) {
        return await this._network.call(
            proto.chest.c2s_switch_hero.create(data),
            proto.chest.s2c_switch_hero
        );
    }
}
