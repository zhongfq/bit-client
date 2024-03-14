import { Callback, Constructor, ConstructorType } from "./dispatcher";

type EaseFunc = (t: number, b: number, c: number, d: number, ...any: any[]) => number;

export class Tween {
    public static to<T>(target: T, props: ConstructorType<T>, duration: number, ease?: EaseFunc) {
        return Laya.Tween.to(target, props, duration, ease);
    }

    /**
     * Laya.timer.once(1000, this, () => {
            Tween.toBezier(this, 8, [
                new Laya.Point(50, 1000),
                new Laya.Point(100, 500),
                new Laya.Point(350, 500),
                new Laya.Point(500, 1000),
            ],12);
        });
     * @param target 执行动作的目标
     * @param speed 速度
     * @param points 用于计算贝塞尔曲线的坐标，2次贝塞尔3个point 3次4个point，目前最大支持3次
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
            _points.length > 2 * 3 ? 3 : 2
        );
        function to(num: number) {
            const distance = new Laya.Point(bezierPoints[num - 2], bezierPoints[num - 2]).distance(
                bezierPoints[num],
                bezierPoints[num + 1]
            );
            return Laya.Tween.to(
                target,
                { x: bezierPoints[num], y: bezierPoints[num + 1] },
                distance / speed,
                null,
                Laya.Handler.create(
                    null,
                    () => {
                        if (num + 2 >= bezierPoints.length) {
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
        to(2);
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

            get length(): number;
        }

        namespace Vector2 {
            export function transformCoordinate(
                coordinate: Vector2,
                transform: Matrix3x3,
                result: Vector2
            ): void;
            export function distance(p1: IVector2Like, p2: IVector2Like): number;
        }

        interface Vector3 {
            clone(): Vector3;
            cloneTo(value: IVector3Like): IVector3Like;
            cloneFrom(value: IVector3Like): void;
        }

        interface Node {
            getChildByPath(path: string): Node | null;
        }

        namespace Pool {
            export function obtain<T>(cls: Constructor<T>): T;
            export function free<T>(obj: T): void;
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

Laya.Pool.obtain = function <T>(cls: Constructor<T>): T {
    return Laya.Pool.createByClass(cls);
};

Laya.Pool.free = function <T>(obj: T): void {
    if (obj) {
        Laya.Pool.recoverByClass(obj);
    }
};
