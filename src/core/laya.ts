import { Callback, ConstructorType } from "./dispatcher";
import { Bezier3D } from "./utils/besier-3d";

type EaseFunc = (t: number, b: number, c: number, d: number, ...any: any[]) => number;

export class Tween {
    public static to<T>(target: T, props: ConstructorType<T>, duration: number, ease?: EaseFunc) {
        return Laya.Tween.to(target, props, duration, ease);
    }

    /**
     * 2D贝塞尔曲线动画
     * @param target 执行动作的目标
     * @param speed 速度
     * @param points 用于计算贝塞尔曲线的坐标，2次贝塞尔3个point 3次4个point，目前最大支持3次
     * @param backFunc 回调函数
     * @param inSertCount 运动轨迹的坐标数量 >=5,值越大 轨迹越明显
     */
    public static toBezier(
        target: any,
        speed: number,
        points: Laya.Point[],
        backFunc?: Callback,
        inSertCount: number = 5
    ) {
        const _points = [];
        for (const point of points) {
            _points.push(point.x);
            _points.push(point.y);
        }
        const bezierPoints = Laya.Bezier.I.getBezierPoints(
            _points,
            inSertCount,
            points.length > 3 ? 3 : 2
        );
        function to(num: number) {
            const distance = new Laya.Point(bezierPoints[num], bezierPoints[num + 1]).distance(
                bezierPoints[num + 2],
                bezierPoints[num + 3]
            );
            return Laya.Tween.to(
                target,
                { x: bezierPoints[num + 2], y: bezierPoints[num + 3] },
                distance / speed,
                null,
                Laya.Handler.create(
                    null,
                    () => {
                        if (num + 4 >= bezierPoints.length) {
                            if (backFunc) {
                                return backFunc();
                            }
                            return;
                        } else {
                            to(num + 2);
                        }
                    },
                    null,
                    true
                )
            );
        }
        to(0);
    }

    /**
     * 3D贝塞尔曲线动画
     * @param target 执行动作的目标
     * @param speed 速度
     * @param points 用于计算贝塞尔曲线的坐标，2次贝塞尔3个point 3次4个point，目前最大支持3次
     * @param backFunc 回调函数
     * @param inSertCount 运动轨迹的坐标数量 >=5,值越大 轨迹越明显
     */
    public static toBezier3D(
        target: any,
        speed: number,
        points: Laya.Vector3[],
        backFunc?: Callback,
        inSertCount: number = 5
    ) {
        const _points = [];
        for (const point of points) {
            _points.push(point.x);
            _points.push(point.y);
            _points.push(point.z);
        }
        const bezierPoints = Bezier3D.I.getBezierPoints(
            _points,
            inSertCount,
            points.length > 3 ? 3 : 2
        );
        function to(idx: number) {
            const fromPos = new Laya.Vector3(
                bezierPoints[idx],
                bezierPoints[idx + 1],
                bezierPoints[idx + 2]
            );
            const toPos = new Laya.Vector3(
                bezierPoints[idx + 3],
                bezierPoints[idx + 4],
                bezierPoints[idx + 5]
            );
            const distance = Laya.Vector3.distance(fromPos, toPos);
            return Laya.Tween.to(
                target,
                { localPositionX: toPos.x, localPositionY: toPos.y, localPositionZ: toPos.z },
                distance / speed,
                null,
                Laya.Handler.create(null, () => {
                    if (idx + 6 >= bezierPoints.length) {
                        if (backFunc) {
                            return backFunc();
                        }
                        return;
                    } else {
                        to(idx + 3);
                    }
                })
            );
        }
        to(0);
    }
}

export interface IVector2Like {
    x: number;
    y: number;
}
export interface IVector3Like {
    x: number;
    y: number;
    z: number;
}
export interface IVector4Like {
    x: number;
    y: number;
    z: number;
    w: number;
}

declare global {
    module Laya {
        interface Vector2 {
            normalize(): void;
            clone(): Vector2;
            cloneTo(value: IVector2Like): IVector2Like;
            cloneFrom(value: IVector2Like): void;
            set(x: number, y: number): void;
            vadd<T extends IVector2Like>(b: T, out: T): T;
            vsub<T extends IVector2Like>(b: T, out: T): T;

            get length(): number;
        }

        module Vector2 {
            export function transformCoordinate(
                coordinate: Vector2,
                transform: Matrix3x3,
                result: Vector2
            ): void;
            export function distance(p1: IVector2Like, p2: IVector2Like): number;
        }

        interface Sprite3D {
            clone(): Sprite3D;
        }

        interface UIComponent {
            onClick(callback: Callback): void;
        }

        interface Vector3 {
            clone(): Vector3;
            cloneTo(value: IVector3Like): IVector3Like;
            cloneFrom(value: IVector3Like): void;
        }

        interface Node {
            getChildByPath(path: string): Node | null;
        }
    }
}

Laya.Vector2.prototype.normalize = function () {
    Laya.Vector2.normalize(this, this);
};

Laya.Vector2.prototype.cloneFrom = function (value) {
    this.x = value.x;
    this.y = value.y;
};

Laya.Vector2.prototype.set = Laya.Vector2.prototype.setValue;

Laya.Vector2.prototype.vadd = function <T extends IVector2Like>(b: T, out: T) {
    out.x = this.x + b.x;
    out.y = this.y + b.y;
    return out;
};

Laya.Vector2.prototype.vsub = function <T extends IVector2Like>(b: T, out: T) {
    out.x = this.x - b.x;
    out.y = this.y - b.y;
    return out;
};

Object.defineProperty(Laya.Vector2.prototype, "length", {
    get() {
        const { x, y } = this as Laya.Vector2;
        return Math.sqrt(x * x + y * y);
    },
    configurable: true,
});

Laya.Vector2.transformCoordinate = function (
    coordinate: Laya.Vector2,
    transform: Laya.Matrix3x3,
    result: Laya.Vector2
) {
    const { x, y } = coordinate;
    const transformElem = transform.elements;
    result.x = x * transformElem[0] + y * transformElem[3] + transformElem[6];
    result.y = x * transformElem[1] + y * transformElem[4] + transformElem[7];
};

Laya.Vector2.distance = function (p1, p2) {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
};

Laya.UIComponent.prototype.onClick = function (callback) {
    this.on(Laya.Event.CLICK, callback);
};

Laya.Vector3.prototype.cloneFrom = function (value: IVector3Like) {
    this.x = value.x;
    this.y = value.y;
    this.z = value.z;
};

Laya.Node.prototype.getChildByPath = function (path) {
    const names = path.match(/[^/]+/g);
    if (names) {
        let child: Laya.Node | null = this as Laya.Node;
        for (const n of names) {
            child = child.getChildByName(n);
            if (!child) {
                break;
            }
        }
        return child;
    } else {
        return null;
    }
};
