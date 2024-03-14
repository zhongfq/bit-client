import * as ecs from "../../../../../core/ecs";
import { IVector3Like } from "../../../../../core/laya";
import { MovementComponent, TransformComponent } from "./movement-component";
import { AnimationComponent } from "./render-component";

export class OwnerComponent extends ecs.Component {
    public rid: number = 0;
    public aid: number = 0;
    public name: string = "";
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

type SoliderAttack = {
    time: number;
    target: number | null;
    position: Laya.Vector3;
};

export class SoldierComponent extends ecs.Component {
    public leader!: number;
    public offset!: IVector3Like;
    public index: number = 0;

    // 攻击的小兵对象
    public attack: SoliderAttack = { target: null, time: 0, position: new Laya.Vector3() };
}

export class HeroComponent extends ecs.Component {
    public formation!: Readonly<IVector3Like>[];
    public soldiers: SoldierComponent[] = [];
    public hp: number = 0;
    public maxHp: number = 0;

    // 攻击的主角对象
    public attackTarget: number = 0;
}
