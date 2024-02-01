import { ecs } from "../../../../core/ecs";
import { IVector3Like } from "../../../../core/laya";
import { TrackVector3 } from "./movement-component";

export class OwnerComponent extends ecs.Component {
    rid: number = 0;
    name: string = "";
}

export enum TroopType {
    PLAYER,
    SOLDIER,
}

export enum SoliderOrder {
    IDLE,
    MOVE,
    FIGHT,
}

export class SoldierComponent extends ecs.Component {
    order: SoliderOrder = SoliderOrder.IDLE;
    leader!: number;
    offset!: IVector3Like;
    destination: Laya.Vector3 = new Laya.Vector3();
}

export class TroopComponent extends ecs.Component {
    soldiers: Map<number, SoldierComponent> = new Map();
    // 主角的位置轨迹
    latestIndex: number = 0;
    positions: TrackVector3[] = [];
}
