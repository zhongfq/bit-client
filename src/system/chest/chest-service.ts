import { app } from "../../app";
import { Service } from "../../core/service";
import proto from "../../def/proto.js";
import { errcode, opcode } from "../../def/protocol";
import { NetworkService } from "../network/network-service";

export type EquipAttr = {
    id: number;
    name: string;
    value: number;
};

export type Equip = {
    id: number;
    name: string;
    level: number;
    color: number;
    slot: number;
    icon: string;
    attrs: EquipAttr[];
};

export class ChestService extends Service<NetworkService> {
    amount: number = 0;

    equips: Map<number, Equip> = new Map();
    newEquip: Equip | null = null;

    constructor(network: NetworkService) {
        super(network);
        this.handle(opcode.chest.s2c_load, this._onLoad);
        this.handle(opcode.chest.s2c_open, this._onOpen);
        this.handle(opcode.chest.s2c_replace, this._onReplace);
        this.handle(opcode.chest.s2c_abandon, this._onAbandon);
    }

    private _onLoad(data: proto.chest.s2c_load) {
        if (data.err === errcode.OK) {
            this._updateEquipes(data.info as proto.chest.ChestInfo);
        }
    }

    private _onOpen(data: proto.chest.s2c_open) {
        if (data.err === errcode.OK) {
            this._updateEquipes(data.info as proto.chest.ChestInfo);
        }
    }

    private _onReplace(data: proto.chest.s2c_replace) {
        if (data.err === errcode.OK) {
            this._updateEquipes(data.info as proto.chest.ChestInfo);
        }
    }

    private _onAbandon(data: proto.chest.s2c_abandon) {
        if (data.err === errcode.OK) {
            this.newEquip = null;
        }
    }

    private _updateEquipes(data: proto.chest.ChestInfo) {
        this.amount = data.amount;
        this.equips.clear();
        for (const slot in data.equips) {
            const equip = this._createEquip(data.equips[slot] as proto.chest.EquipItem);
            this.equips.set(equip.slot, equip);
        }
        if (data.new && data.new.id) {
            this.newEquip = this._createEquip(data.new as proto.chest.EquipItem);
        } else {
            this.newEquip = null;
        }
    }

    private _createEquip(data: proto.chest.EquipItem): Equip {
        const equipItem = app.datad.equipTable.items[data.id - 1];
        const attrs: EquipAttr[] = [];
        for (const id in data.attrs) {
            const attrItem = app.datad.attrTable[id];
            attrs.push({
                id: attrItem.id,
                name: attrItem.name,
                value: data.attrs[id],
            });
        }

        return {
            id: equipItem.id,
            name: equipItem.name,
            level: equipItem.lv,
            color: equipItem.color,
            slot: equipItem.slot,
            icon: `icon/equip/${equipItem.icon}`,
            attrs: attrs,
        };
    }

    // ------------------------------------------------------------------------
    // rpc call
    // ------------------------------------------------------------------------
    async load() {
        return await this._network.call(proto.chest.c2s_load.create(), proto.chest.s2c_load);
    }

    async open() {
        return await this._network.call(proto.chest.c2s_open.create(), proto.chest.s2c_open);
    }

    async replace() {
        return await this._network.call(proto.chest.c2s_replace.create(), proto.chest.s2c_replace);
    }

    async abandon() {
        return await this._network.call(proto.chest.c2s_abandon.create(), proto.chest.s2c_abandon);
    }

    async challengeDungeon(id: number) {
        return await this._network.call(
            proto.chest.c2s_challenge_dungeon.create({ dungeonId: id }),
            proto.chest.s2c_challenge_dungeon
        );
    }
}
