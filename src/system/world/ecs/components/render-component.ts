import { ecs } from "../../../../core/ecs";
import { HeroInfoUI, HpStyle } from "../../../../ui-runtime/prefab/battle/HeroInfoUI";

export class Renderable3D extends ecs.Component {
    path: string = "";
    view: Laya.Sprite3D | null = null;
}

export class Renderable2D extends ecs.Component {
    path: string = "";
    view: Laya.Sprite | null = null;
}

export class AnimationComponent extends Renderable3D {
    animator: Laya.Animator | null = null;
}

export class ShadowComponent extends ecs.Component {}

export class HeroInfoComponent extends Renderable2D {
    declare view: HeroInfoUI | null;
    hpStyle: HpStyle = HpStyle.GREEN;
}
