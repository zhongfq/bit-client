import { ecs } from "../../../../../core/ecs";
import { PveDef } from "../../pve-defs";

export class TransformComponent extends ecs.Component {
    position: Laya.Vector3 = new Laya.Vector3();
    rotation: number = 0;
    index?: number;
}

export class MovementComponent extends ecs.Component {
    speed: number = PveDef.MOVE_SPEED;
    target?: Laya.Vector3;
    velocity: Laya.Vector3 = new Laya.Vector3();
}
