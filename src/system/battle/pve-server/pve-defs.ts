import { IVector3Like } from "../../../core/laya";

export class PveDef {
    public static readonly MOVE_SPEED = 1.5;
    public static readonly MAX_FOLLOW_SPEED = PveDef.MOVE_SPEED * 2;
    public static readonly MAX_ADJUST_SPEED = PveDef.MOVE_SPEED * 2;
    public static readonly MAX_BACK_SPEED = PveDef.MOVE_SPEED * 3;

    public static readonly COLLECT_PER_HP = 10; // 每采集一次，采集物扣多少血
    public static readonly COLLECT_MAX_CNT = 100; // 每个资源车最大承载资源数量
    public static readonly COLLECT_CNT_PER_OBJ = 1; // 每个资源对象相当于多少资源数量
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
    public static readonly WOOD: Laya.Vector3[] = [
        new Laya.Vector3(0.6, 0, 0),
        new Laya.Vector3(0.2, 0, 0),
        new Laya.Vector3(-0.2, 0, 0),
        new Laya.Vector3(-0.6, 0, 0),
    ];
    public static readonly FOOD: Laya.Vector3[] = [
        new Laya.Vector3(0.35, 0, 0.5),
        new Laya.Vector3(-0.35, 0, 0.5),
        new Laya.Vector3(0.35, 0, -0.5),
        new Laya.Vector3(-0.35, 0, -0.5),
    ];
    public static readonly STONE: Laya.Vector3[] = [
        new Laya.Vector3(0.35, 0, 0.5),
        new Laya.Vector3(-0.35, 0, 0.5),
        new Laya.Vector3(0.35, 0, -0.5),
        new Laya.Vector3(-0.35, 0, -0.5),
    ];
}
