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

    public entityId: number = 0;
    public tableId: number = 0;
}

export class TruckComponent extends ecs.Component {
    public static readonly COLLECT_CNT_PER_OBJ = 5;

    public collectType!: number;
    public collectCnt: number = 0;
    public collectObjs: Laya.Sprite3D[] = [];
}
