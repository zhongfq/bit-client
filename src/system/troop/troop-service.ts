import { app } from "../../app";
import { Service } from "../../core/service";
import proto from "../../def/proto";
import { errcode, opcode } from "../../def/protocol";
import { SoldierConf } from "../../def/soldier";
import { RoleConfRow } from "../../def/table";
import { VoUtil } from "../../misc/vo-util";
import { TroopVo } from "../../misc/vo/troop/troop-vo";
import { TroopBag } from "../../misc/vo/troop/troop-vo-bag";
import { NetworkService } from "../network/network-service";

export class TroopService extends Service<NetworkService> {
    public list: proto.troop.ITroop[] = [];
    public mapTroop: Map<number, proto.troop.ITroop> = new Map();
    public readonly troopBag = VoUtil.createBag(TroopBag); //创建士兵背包

    //正在编辑的部队(考虑频繁切换士兵英雄及挂件对服务器造成压力，关闭部队界面后进行交互置空该属性)
    public _editingTroop: TroopVo | null = null;

    public constructor(network: NetworkService) {
        super(network);
        SoldierConf.SOLDIER_STATION;
        this.handle(opcode.troop.s2c_load, this._onLoad);
        this.handle(opcode.troop.s2c_edit_troop, this._onEditTroop);
    }

    private _onLoad(data: proto.troop.s2c_load) {
        if (data.err === errcode.OK) {
            this.list.length = 0;
            data.troopList.forEach((v) => {
                this.list.push(v);
                if (v.idx) {
                    this.troopBag.init(data);
                    this.mapTroop.set(v.idx, v);
                    if (v.soldierIds) {
                        for (const id of v.soldierIds) {
                            app.service.soldier.soldierBag.setSoldierTroopId(id, v.idx);
                        }
                    }
                }
            });
        }
    }

    private _onEditTroop(data: proto.troop.s2c_edit_troop) {
        if (data.err === errcode.OK) {
            console.log("编辑部队成功");
            this._editingTroop = null;
        }
    }

    public getEditingTroop(): TroopVo {
        if (!this._editingTroop) {
            this._editingTroop = new TroopVo();
            this._editingTroop.initByCmd({});
        }
        return this._editingTroop;
    }

    public setEditingTroop(idx: number) {
        if (this._editingTroop && this._editingTroop.idx) {
            return;
        }
        let troopVo = this.troopBag.get(idx);
        if (!troopVo) {
            troopVo = new TroopVo();
            troopVo.initByCmd({ idx: idx });
        }
        this._editingTroop = troopVo;
    }

    /**
     * 获取部队前中后某位置的士兵id
     * @param pos 士兵所在的位置
     * @param troop 传入部队属性
     * @returns
     */
    public getSoldierByTroopIdx(troop: proto.troop.ITroop | undefined, pos: number) {
        if (!troop || !troop.soldierIds) {
            return null;
        }
        for (const id of troop.soldierIds) {
            const soldierRow = app.service.table.soldier.soldier[id];
            if (soldierRow.position == pos) {
                return id;
            }
        }
        return null;
    }

    /**
     * 获取部队前中后某位置的挂件列表
     * @param pos 挂件所在的位置
     * @param troop 传入部队属性
     * @returns
     */
    public getPendantByTroopIdx(troop: proto.troop.ITroop | undefined, pos: number) {
        if (!troop || !troop.pendants) {
            return null;
        }
        const pendantList: proto.troop.IPendant[] = [];
        for (const pendantInfo of troop.pendants) {
            if (pendantInfo.station == pos) {
                pendantList.push(pendantInfo);
            }
        }
        return pendantList;
    }

    // ------------------------------------------------------------------------
    // rpc call
    // ------------------------------------------------------------------------
    public async load() {
        return await this._network.call(proto.troop.c2s_load.create(), proto.troop.s2c_load);
    }

    public async requestEditTroop() {
        if (!this._editingTroop) return;
        return await this._network.call(
            proto.troop.c2s_edit_troop.create({ troop: this._editingTroop.cmd }),
            proto.troop.s2c_edit_troop
        );
    }
}
