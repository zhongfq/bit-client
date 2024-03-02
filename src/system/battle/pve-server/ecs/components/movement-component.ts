import { ecs } from "../../../../../core/ecs";

export class TransformComponent extends ecs.Component {
    position: Laya.Vector3 = new Laya.Vector3();
    rotation: number = 0;
}

export class MovementComponent extends ecs.Component {
    velocity: number = 1;
    target: Laya.Vector3 | null = null;
    speed: Laya.Vector3 = new Laya.Vector3();
}
