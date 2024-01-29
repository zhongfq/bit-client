import { ecs } from "../../../../core/ecs";

export class Renderable extends ecs.Component {
    path: string = "";
    view: Laya.Sprite3D | null = null;
}

export class AnimationComponent extends Renderable {
    animator: Laya.Animator | null = null;
}

export class ShadowComponent extends ecs.Component {}
