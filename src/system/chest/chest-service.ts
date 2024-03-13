import { Service } from "../../core/service";
import proto from "../../def/proto";
import { errcode, opcode } from "../../def/protocol";
import { NetworkService } from "../network/network-service";
import { ItemVo } from "../../misc/vo/goods/item-vo";
import { VoUtil } from "../../misc/vo-util";
import { ItemBag } from "../../misc/vo/goods/item-vo-bag";

export class ChestService extends Service<NetworkService> {
    public static readonly CHEST_UPDATE = "chest-update";
    public static readonly CHEST_SCORE_UPDATE = "chest-score-update";
    public static readonly CHEST_Hero_UPDATE = "chest-hero-update";

    // readonly itemBag = VoUtil.createGoodsBag(ItemBag); //创建道具背包
    public scoreInfo!: proto.chest.ScoreInfo; //积分数据
    public chestInfo: Map<number, number> = new Map();
    public heroId!: number;
    public heroIds: number[] = [];

    public constructor(network: NetworkService) {
        super(network);
        this.handle(opcode.chest.s2c_load, this._onLoad);
        this.handle(opcode.chest.s2c_open_chest, this._onOpenChest);
        this.handle(opcode.chest.s2c_score_receive, this._onScoreReceive);
        this.handle(opcode.chest.s2c_switch_hero, this._onSwitchHero);
        this.handle(opcode.chest.notify_chest, this._noNotify_chest);
        this.handle(opcode.chest.notify_chest_hero, this._noNotify_Hero);
    }

    private _onLoad(data: proto.chest.s2c_load) {
        if (data.err === errcode.OK) {
            if (data.score) {
                this.scoreInfo = data.score as proto.chest.ScoreInfo;
            } else {
                console.error("宝箱积分数据出现异常");
            }
            for (const chest of data.chests) {
                this.chestInfo.set(Number(chest.id), chest.num ? chest.num : 0);
            }
            this.heroId = data.heroId;
            this.heroIds = data.heroIds;
        }
    }

    private _onOpenChest(data: proto.chest.s2c_open_chest) {
        this.scoreInfo = data.score as proto.chest.ScoreInfo;
        const cmdChest = data.chest as proto.chest.ChestInfo;
        if (data.chest) {
            this.chestInfo.set(cmdChest.id, cmdChest.num ? cmdChest.num : 0);
        }
    }

    private _onScoreReceive(data: proto.chest.s2c_score_receive) {
        this.scoreInfo = data.score as proto.chest.ScoreInfo;
    }

    private _onSwitchHero(data: proto.chest.s2c_switch_hero) {}

    private _noNotify_chest(data: proto.chest.notify_chest) {
        for (const chest of data.chests) {
            this.chestInfo.set(Number(chest.id), Number(chest.num));
        }
        this.event(ChestService.CHEST_UPDATE);
    }

    private _noNotify_Hero(data: proto.chest.notify_chest_hero) {
        for (const id of data.heroIds) {
            this.heroIds.push(id);
        }
        this.event(ChestService.CHEST_Hero_UPDATE);
    }

    private _updateScore(data: proto.chest.ScoreInfo) {}

    // ------------------------------------------------------------------------
    // rpc call
    // ------------------------------------------------------------------------
    public async load() {
        return await this._network.call(proto.chest.c2s_load.create(), proto.chest.s2c_load);
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
    public async requestScoreReceive() {
        return await this._network.call(
            proto.chest.c2s_score_receive.create(),
            proto.chest.s2c_score_receive
        );
    }

    /**
     *请求切换武将
     * @param data
     */
    public async requestSwitchHero(data: proto.chest.Ic2s_switch_hero) {
        return await this._network.call(
            proto.chest.c2s_switch_hero.create(data),
            proto.chest.s2c_switch_hero
        );
    }
}
