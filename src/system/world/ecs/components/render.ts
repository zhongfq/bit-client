import { ecs } from "../../../../core/ecs";

export class Renderable extends ecs.Component {
    path: string = "";
    view!: Laya.Sprite3D;
}

export class Animation extends Renderable {
    animator!: Laya.Animator;
}

export class Shadow extends ecs.Component {}
