export class PveDef {
    static readonly MOVE_SPEED = 1;
    static readonly MAX_FOLLOW_SPEED = PveDef.MOVE_SPEED * 2;
    static readonly MAX_ADJUST_SPEED = PveDef.MOVE_SPEED * 2;
    static readonly MAX_BACK_SPEED = PveDef.MOVE_SPEED * 3;
}

export interface ElementCreator {
    eid: number;
    etype: number;

    tid: number; // id in battle_entity.xlsx
    maxHp: number;
    hp: number;
    positioin: Laya.Vector3;
}
