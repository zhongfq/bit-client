import { ecs } from "../../../../../core/ecs";
import { IVector3Like } from "../../../../../core/laya";
import { MovementComponent, TransformComponent } from "./movement-component";
import { AnimationComponent } from "./render-component";

export class OwnerComponent extends ecs.Component {
    rid: number = 0;
    aid: number = 0;
    name: string = "";
}

export enum ElementAnimation {
    IDLE = "idle",
    RUN = "run",
    ATTACK = "attack",
}

export class ElementComponent extends ecs.Component {
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

    tid: number = 0;
}

type SoliderAttack = {
    time: number;
    target: number | null;
    position: Laya.Vector3;
};

export class SoldierComponent extends ecs.Component {
    leader!: number;
    offset!: IVector3Like;
    index: number = 0;

    // 攻击的小兵对象
    attack: SoliderAttack = { target: null, time: 0, position: new Laya.Vector3() };
}

export class HeroComponent extends ecs.Component {
    formation!: Readonly<IVector3Like>[];
    soldiers: SoldierComponent[] = [];
    hp: number = 0;
    maxHp: number = 0;

    // 攻击的主角对象
    attackTarget: number = 0;
}
