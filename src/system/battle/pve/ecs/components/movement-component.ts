import * as ecs from "../../../../../core/ecs";

export class TransformComponent extends ecs.Component {
    public static readonly POSITION = 1 << 0;
    public static readonly ROTATION = 1 << 1;

    public flag: number = 0;
    public position: Laya.Vector3 = new Laya.Vector3();
    public rotation: number = 0;
}

export const enum TrackType {
    NONE = 0,
    LINE = 1,
    ORIENTATION = 2,
    CURVE = 3,
}

export class TrackVector3 extends Laya.Vector3 {
    /** 与前一个坐标点的距离差 */
    public offset: number = 0;

    public constructor(x?: number, y?: number, z?: number, offset?: number) {
        super(x, y, z);
        this.offset = offset ?? 0;
    }
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
    WHEEL,
    TARGET,
}

export class InterpolationRate {
    public static readonly POSITION = 5;
    public static readonly ROTATION = 7;
    public static readonly SOLDIER_POSITION = 5;
    public static readonly SOLDIER_ROTATION = 4;
}

class RotationInterpolation {
    public rotation: number = 0;
    public percent: number = 1;
    public rate: number = 1;
}

export class MovementComponent extends ecs.Component {
    public type: MovementType = MovementType.NONE;

    public target?: Laya.Vector3;
    public velocity: Laya.Vector3 = new Laya.Vector3();

    // 轨迹方式移动
    public track?: Track;
    public trackType: TrackType = TrackType.NONE;

    // 改变角度
    public rotationInterpolation: RotationInterpolation = new RotationInterpolation();
}
