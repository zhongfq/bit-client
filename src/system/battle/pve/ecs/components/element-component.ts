import * as ecs from "../../../../../core/ecs";
import { MovementComponent, TransformComponent } from "./movement-component";
import { AnimationComponent } from "./render-component";

// export class OwnerComponent extends ecs.Component {
//     public rid: number = 0;
//     public aid: number = 0;
//     public name: string = "";
// }

export enum ElementAnimation {
    IDLE = "idle",
    RUN = "run",
    ATTACK = "attack",
    DIE = "die",
    CHOP = "chop",
}

export class ElementComponent extends ecs.Component {
    // 缓存组件方便快速访问？
    private _movement: MovementComponent | null = null;
    private _transform: TransformComponent | null = null;
    private _animation: AnimationComponent | null = null;

    public get movement() {
        return (this._movement ||= this.getComponent(MovementComponent)!);
    }

    public get transform() {
        return (this._transform ||= this.getComponent(TransformComponent)!);
    }

    public get animation() {
        return (this._animation ||= this.getComponent(AnimationComponent)!);
    }

    /** entity 表格中实体 id */
    public teid: number = 0;
    /** hero, soldier, monster, event, building 表格中的数据 id */
    public tid: number = 0;
}

export class TruckComponent extends ecs.Component {
    public collectType!: number;
    public collectCnt: number = 0;
    public collectObjCnt: number = 0;
    public collectObjs: Laya.Sprite3D[] = [];
}
