import { ecs } from "../../../../../core/ecs";

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

export class TrackVector3 extends Laya.Vector3 {
    /** 与前一个坐标点的距离差 */
    offset: number = 0;

    constructor(x?: number, y?: number, z?: number, offset?: number) {
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
    static readonly POSITION = 5;
    static readonly ROTATION = 7;
    static readonly SOLDIER_POSITION = 5;
    static readonly SOLDIER_ROTATION = 4;
}

class RotationInterpolation {
    rotation: number = 0;
    percent: number = 1;
    rate: number = 1;
}

export class MovementComponent extends ecs.Component {
    type: MovementType = MovementType.NONE;

    target: Laya.Vector3 | null = null;
    velocity: Laya.Vector3 = new Laya.Vector3();

    // 轨迹方式移动
    track: Track | null = null;
    trackType: TrackType = TrackType.NONE;

    // 改变角度
    rotationInterpolation: RotationInterpolation = new RotationInterpolation();
}
