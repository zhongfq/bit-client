import { Service } from "../../core/service";
import proto from "../../def/proto";
import { errcode, opcode } from "../../def/protocol";
import { NetworkService } from "../network/network-service";
import { VoUtil } from "../../misc/vo-util";
import { SoldierBag } from "../../misc/vo/soldier/soldier-vo-bag";
import { SoldierPendantBag } from "../../misc/vo/soldier/soldier-pendant-vo-bag";
import { TrainBag } from "../../misc/vo/soldier/train-vo-bag";
import { SoldierVo } from "../../misc/vo/soldier/soldier-vo";
import { SoldierPendantVo } from "../../misc/vo/soldier/soldier-pendant-vo";
import { TrainVo } from "../../misc/vo/soldier/train-vo";

export class SoldierService extends Service<NetworkService> {
    public static readonly ITEM_UPDATE = "item-update";

    public readonly soldierBag = VoUtil.createBag(SoldierBag); //创建士兵背包
    public readonly soldierPendantBag = VoUtil.createBag(SoldierPendantBag); //创建士兵挂件背包
    public readonly trainBag = VoUtil.createBag(TrainBag); //创建训练属性背包

    public constructor(network: NetworkService) {
        super(network);
        this.handle(opcode.soldier.s2c_load_soldier, this._onLoadSoldier);
        this.handle(opcode.soldier.s2c_load_pendant, this._onLoadPendant);
        this.handle(opcode.soldier.s2c_load_train, this._onLoadTrain);
        this.handle(opcode.soldier.s2c_pendant_upgrade, this._onPendantUpgrade);
        this.handle(opcode.soldier.s2c_soldier_upgrade, this._onSoldierUpgrade);
        this.handle(opcode.soldier.s2c_train_upgrade, this._onTrainUpgrade);
    }

    private _onLoadSoldier(data: proto.soldier.s2c_load_soldier) {
        this.soldierBag.init(data);
    }

    private _onLoadPendant(data: proto.soldier.s2c_load_pendant) {
        this.soldierPendantBag.init(data);
    }

    private _onLoadTrain(data: proto.soldier.s2c_load_train) {
        this.trainBag.init(data);
    }

    private _onPendantUpgrade(
        data: proto.soldier.s2c_pendant_upgrade,
        req: proto.soldier.c2s_pendant_upgrade
    ) {
        if (data.err === errcode.OK) {
            const cmd = (this.soldierPendantBag.get(req.id) as SoldierPendantVo)
                .cmd as proto.soldier.PendantInfo;
            cmd.lv += 1;
            const vo = new SoldierPendantVo();
            vo.initByCmd(cmd);
            this.soldierPendantBag.onUpdate(vo);
        }
    }

    private _onSoldierUpgrade(
        data: proto.soldier.s2c_soldier_upgrade,
        req: proto.soldier.c2s_soldier_upgrade
    ) {
        if (data.err === errcode.OK) {
            const cmd = (this.soldierBag.get(req.id) as SoldierVo).cmd as proto.soldier.SoldierInfo;
            cmd.lv += 1;
            const vo = new SoldierVo();
            vo.initByCmd(cmd);
            this.soldierBag.onUpdate(vo);
        }
    }

    private _onTrainUpgrade(
        data: proto.soldier.s2c_train_upgrade,
        req: proto.soldier.c2s_train_upgrade
    ) {
        if (data.err === errcode.OK) {
            const cmd = (this.trainBag.get(req.id) as TrainVo).cmd as proto.soldier.TrainInfo;
            cmd.lv += req.num;
            const vo = new TrainVo();
            vo.initByCmd(cmd);
            this.trainBag.onUpdate(vo);
        }
    }

    /**
     * 加载士兵
     * @param data
     * @returns
     */
    public async loadSoldier() {
        return await this._network.call(
            proto.soldier.c2s_load_soldier.create(),
            proto.soldier.s2c_load_soldier
        );
    }

    /**
     * 加载士兵挂件
     * @param data
     * @returns
     */
    public async loadPendant() {
        return await this._network.call(
            proto.soldier.c2s_load_pendant.create(),
            proto.soldier.s2c_load_pendant
        );
    }

    /**
     * 加载训练属性
     * @param data
     * @returns
     */
    public async loadTrain() {
        return await this._network.call(
            proto.soldier.c2s_load_train.create(),
            proto.soldier.s2c_load_train
        );
    }

    /**
     *请求挂件升级
     * @param data
     */
    public async requestPendantUpgrade(data: proto.soldier.Ic2s_pendant_upgrade) {
        return await this._network.call(
            proto.soldier.c2s_pendant_upgrade.create(data),
            proto.soldier.s2c_pendant_upgrade
        );
    }

    /**
     *请求士兵升级
     * @param data
     */
    public async requestSoldiertUpgrade(data: proto.soldier.Ic2s_soldier_upgrade) {
        return await this._network.call(
            proto.soldier.c2s_soldier_upgrade.create(data),
            proto.soldier.s2c_soldier_upgrade
        );
    }

    /**
     *请求属性升级
     * @param data
     */
    public async requestTrainUpgrade(data: proto.soldier.Ic2s_train_upgrade) {
        return await this._network.call(
            proto.soldier.c2s_train_upgrade.create(data),
            proto.soldier.s2c_train_upgrade
        );
    }
}
