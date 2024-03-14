import * as ecs from "../../../../../core/ecs";
import {
    HeadInfoData,
    HeadInfoUI,
    HeadInfoStyle,
} from "../../../../../ui-runtime/prefab/battle/HeadInfoUI";
import { MovementComponent, TransformComponent } from "./movement-component";

export class Renderable3D extends ecs.Component {
    public res: string = "";
    public view?: Laya.Sprite3D | null;
}

export class Renderable2D extends ecs.Component {
    public res: string = "";
    public view?: Laya.Sprite | null;
}

interface AnimationState {
    name: string;
    clip: string;
}

export class AnimationComponent extends Renderable3D {
    // 当前播放的动画
    public current: AnimationState = { name: "idle", clip: "idle" };
    // 非循环动画完成后的动画
    public default: AnimationState = { name: "idle", clip: "idle" };
    // 循环播放
    public loop: boolean = true;
    // 冲锋状态
    public rushing: boolean = false;

    public animator?: Laya.Animator | null;
}

export class ShadowComponent extends Renderable3D {}

export class BoardComponent extends Renderable3D {}

export class HeadInfoComponent extends Renderable2D {
    public declare view: HeadInfoUI | null;
    public data: HeadInfoData = {
        hp: 0,
        maxHp: 1,
        mp: 100,
        maxMp: 100,
        style: HeadInfoStyle.OUR,
        offset: 0,
    };
}

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
