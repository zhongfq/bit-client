export class PveDef {
    static readonly MOVE_SPEED = 1;
    static readonly MAX_FOLLOW_SPEED = PveDef.MOVE_SPEED * 2;
    static readonly MAX_ADJUST_SPEED = PveDef.MOVE_SPEED * 2;
    static readonly MAX_BACK_SPEED = PveDef.MOVE_SPEED * 3;
}

export interface ElementCreator {
    eid: number;
    etype: number;

    entityId: number; // id in battle_entity.xlsx
    tableId: number; // 配置表id
    maxHp: number;
    hp: number;
    position: Laya.Vector3;
    animation?: boolean;
}

export interface UpdateHp {
    hp: number;
    maxHp: number;
    subHp?: number;
    isCrit?: boolean;
}
