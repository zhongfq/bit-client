import { Vec2, Vec3 } from "cc";
import { ecs } from "../../../../core/ecs";

export const enum TrackType {
    NONE = 0,
    /** 直线 */
    LINE = 1,
    /** 直线，调整朝向 */
    ORIENTATION = 2,
    /** 曲线 */
    CURVE = 3,
}

export type Track = {
    time: number;
    duration: number;
    p0: Vec3; // 起始点
    p1?: Vec3 | null; // 中间穿过点
    p2: Vec3; // 终点
    cp?: Vec3 | null; // 控制点
};

export class Movement extends ecs.Component {
    /** 位置 */
    position: Vec3 = new Vec3();
    /** 速度 */
    speed: Vec2 = new Vec2();
    /** 目标位置 */
    target: Vec3 | null = null;
    /** -1: 朝左 1: 朝右 */
    face: number = 1;
    /** 影响速度和动画 */
    rate: number = 1;

    /** 轨迹类型 */
    type: TrackType = TrackType.NONE;
    track?: Track;

    constructor(entity: ecs.Entity) {
        super(entity);
    }

    isCurvedTrack() {
        return this.type == TrackType.CURVE;
    }

    shouldUpdateRotaion() {
        return this.type == TrackType.ORIENTATION || this.type == TrackType.CURVE;
    }
}
