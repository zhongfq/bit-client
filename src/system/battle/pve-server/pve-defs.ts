export class PveDef {
    public static readonly MOVE_SPEED = 1.5;
    public static readonly MAX_FOLLOW_SPEED = PveDef.MOVE_SPEED * 2;
    public static readonly MAX_ADJUST_SPEED = PveDef.MOVE_SPEED * 2;
    public static readonly MAX_BACK_SPEED = PveDef.MOVE_SPEED * 3;
}

export interface ElementCreator {
    eid: number;
    etype: number;

    // 同盟id
    aid: number;

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
