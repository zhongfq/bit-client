import * as ecs from "../../../../../core/ecs";
import { PveDef } from "../../pve-defs";

export class TransformComponent extends ecs.Component {
    public position: Laya.Vector3 = new Laya.Vector3();
    public rotation: number = 0;
    public index?: number;
}

export class MovementComponent extends ecs.Component {
    public speed: number = 0;
    public target: Laya.Vector3 = new Laya.Vector3();
    public velocity: Laya.Vector3 = new Laya.Vector3();
}
