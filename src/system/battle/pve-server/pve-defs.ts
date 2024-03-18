import { IVector3Like } from "../../../core/laya";

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

    collectType?: number; // 资源车上采集物的实体类型
}

export interface UpdateHp {
    hp: number;
    maxHp: number;
    subHp?: number;
    isCrit?: boolean;
}

export interface UpdateTruck {
    collecter: number;
    collection: number;
    collectCnt: number;
}

export class TruckFormation {
    public static readonly WOOD: IVector3Like[] = [
        { x: 0.6, y: 0, z: 0 },
        { x: 0.2, y: 0, z: 0 },
        { x: -0.2, y: 0, z: 0 },
        { x: -0.6, y: 0, z: 0 },
    ];
    public static readonly FOOD: IVector3Like[] = [
        { x: 0.35, y: 0, z: 0.5 },
        { x: -0.35, y: 0, z: 0.5 },
        { x: 0.35, y: 0, z: -0.5 },
        { x: -0.35, y: 0, z: -0.5 },
    ];
    public static readonly STONE: IVector3Like[] = [
        { x: 0.35, y: 0, z: 0.5 },
        { x: -0.35, y: 0, z: 0.5 },
        { x: 0.35, y: 0, z: -0.5 },
        { x: -0.35, y: 0, z: -0.5 },
    ];
}
