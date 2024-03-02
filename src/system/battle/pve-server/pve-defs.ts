export interface RoleCreator {
    eid: number;
    etype: number;

    tid: number;
    maxHp: number;
    hp: number;
    positioin: Laya.Vector3;
}

export interface TreeCreator {
    eid: number;
    etype: number;

    wid: number;
    hp: number;
    maxHp: number;
}
