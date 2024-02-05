import { ecs } from "../../../../core/ecs";
import { IVector3Like } from "../../../../core/laya";
import { TrackVector3 } from "./movement-component";

export class OwnerComponent extends ecs.Component {
    rid: number = 0;
    aid: number = 0;
    name: string = "";
}

export enum TroopType {
    PLAYER,
    SOLDIER,
}

export enum SoliderOrder {
    IDLE,
    MOVE,
    RUSH, // 快速移动到指定位置
    FIGHT, // 战斗中
    RETURN, // 归队
}

type AttackInfo = {
    time: number;
    target: number | null;
    position: Laya.Vector3;
};

export class SoldierComponent extends ecs.Component {
    order: SoliderOrder = SoliderOrder.IDLE;
    leader!: number;
    offset!: IVector3Like;
    velocity: number = 0;

    // 攻击的小兵对象
    attackInfo: AttackInfo = { target: null, time: 0, position: new Laya.Vector3() };
}

export class TroopComponent extends ecs.Component {
    soldiers: SoldierComponent[] = [];
    // 主角的位置轨迹
    latestIndex: number = 0;
    positions: TrackVector3[] = [];

    // 攻击的主角对象
    attackTarget: number = 0;
}
