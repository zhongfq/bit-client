import { ecs } from "../../../../core/ecs";
import { world } from "../../../../def/world";

export class TransformComponent extends ecs.Component {
    static readonly POSITION = 1 << 0;
    static readonly ROTATION = 1 << 1;

    flag: number = 0;
    position: Laya.Vector3 = new Laya.Vector3();
    rotation: number = 0;
}

export const enum TrackType {
    NONE = 0,
    LINE = 1,
    ORIENTATION = 2,
    CURVE = 3,
}

export type Track = {
    time: number;
    duration: number;
    p0: Laya.Vector3; // 起始点
    p1?: Laya.Vector3 | null; // 中间穿过点
    p2: Laya.Vector3; // 终点
    cp?: Laya.Vector3 | null; // 控制点
};

export const enum MovementType {
    NONE,
    PATH,
    WHEEL,
    TARGET,
}

type Rotation = {
    from: number;
    to: number;
    ration: number;
};

export class MovementComponent extends ecs.Component {
    type: MovementType = MovementType.NONE;
    velocity: number = 1;

    target: Laya.Vector3 | null = null;
    speed: Laya.Vector3 = new Laya.Vector3();

    // 路点方式移动
    paths: Laya.Vector2[] = [];

    // 轨迹方式移动
    track: Track | null = null;
    trackType: TrackType = TrackType.NONE;

    // 改变角度
    rotation: Rotation = { from: 0, to: 0, ration: 1 };
}
