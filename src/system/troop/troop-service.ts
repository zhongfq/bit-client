import { app } from "../../app";
import { Service } from "../../core/service";
import proto from "../../def/proto";
import { errcode, opcode } from "../../def/protocol";
import { SoldierConf } from "../../def/soldier";
import { RoleConfRow } from "../../def/table";
import { NetworkService } from "../network/network-service";

export class TroopService extends Service<NetworkService> {
    public list: proto.troop.ITroop[] = [];
    public mapTroop: Map<number, proto.troop.ITroop> = new Map();

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
                    this.mapTroop.set(v.idx, v);
                }
            });
        }
    }

    private _onEditTroop(data: proto.troop.s2c_edit_troop) {
        if (data.err === errcode.OK) {
            console.log("编辑部队成功");
        }
    }

    /**
     * 获取部队前中后某位置的士兵id
     * @param troopIdx 部队id 不传的
     * @param pos 士兵所在的位置
     * @param _troop 传入部队属性
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

    // ------------------------------------------------------------------------
    // rpc call
    // ------------------------------------------------------------------------
    public async load() {
        return await this._network.call(proto.troop.c2s_load.create(), proto.troop.s2c_load);
    }

    public async requestEditTroop(data: proto.troop.Ic2s_edit_troop) {
        return await this._network.call(
            proto.troop.c2s_edit_troop.create(data),
            proto.troop.s2c_edit_troop
        );
    }
}
