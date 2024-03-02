import { ecs } from "../../../../../core/ecs";
import { HeroInfoUI, HpStyle } from "../../../../../ui-runtime/prefab/battle/HeroInfoUI";
import { SoldierInfoUI } from "../../../../../ui-runtime/prefab/battle/SoldierInfoUI";

export class Renderable3D extends ecs.Component {
    res: string = "";
    view: Laya.Sprite3D | null = null;
}

export class Renderable2D extends ecs.Component {
    res: string = "";
    view: Laya.Sprite | null = null;
}

export class AnimationComponent extends Renderable3D {
    animator: Laya.Animator | null = null;
}

export class ShadowComponent extends Renderable3D {}

export class HeroInfoComponent extends Renderable2D {
    declare view: HeroInfoUI | null;
    hpStyle: HpStyle = HpStyle.GREEN;
}

export class SoliderInfoComponent extends Renderable2D {
    declare view: SoldierInfoUI | null;
    hpStyle: HpStyle = HpStyle.GREEN;
}
