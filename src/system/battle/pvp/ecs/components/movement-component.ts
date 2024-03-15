import * as ecs from "../../../../../core/ecs";
import { IVector3Like } from "../../../../../core/laya";

export class TransformComponent extends ecs.Component {
    public static readonly POSITION = 1 << 0;
    public static readonly ROTATION = 1 << 1;

    public flag: number = 0;
    public position: Laya.Vector3 = new Laya.Vector3();
    public rotation: number = 0;
}

class Location extends Laya.Vector3 {
    public cursor: number = 0;
}

export class MovementComponent extends ecs.Component {
    public startTime: number = 0; // 开始时间(秒)
    public speed: number = 0; // 每秒多少格
    public paths: Laya.Vector3[] = [];

    public current: Location = new Location();
    public next: Location = new Location();
}
