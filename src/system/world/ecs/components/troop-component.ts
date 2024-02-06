import { ecs } from "../../../../core/ecs";
import { IVector3Like } from "../../../../core/laya";
import { MovementComponent, TrackVector3, TransformComponent } from "./movement-component";
import { AnimationComponent } from "./render-component";

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

export abstract class CharacterComponent extends ecs.Component {
    // 缓存组件方便快速访问？
    private _movement: MovementComponent | null = null;
    private _transform: TransformComponent | null = null;
    private _animation: AnimationComponent | null = null;

    get movement() {
        return (this._movement ||= this.getComponent(MovementComponent)!);
    }

    get transform() {
        return (this._transform ||= this.getComponent(TransformComponent)!);
    }

    get animation() {
        return (this._animation ||= this.getComponent(AnimationComponent)!);
    }
}

export class SoldierComponent extends CharacterComponent {
    order: SoliderOrder = SoliderOrder.IDLE;
    leader!: number;
    offset!: IVector3Like;
    velocity: number = 0;

    // 攻击的小兵对象
    attackInfo: AttackInfo = { target: null, time: 0, position: new Laya.Vector3() };
}

export class TroopComponent extends CharacterComponent {
    soldiers: SoldierComponent[] = [];

    // 攻击的主角对象
    attackTarget: number = 0;
}
