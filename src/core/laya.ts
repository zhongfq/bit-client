import { Constructor, ConstructorType } from "./dispatcher";

type EaseFunc = (t: number, b: number, c: number, d: number, ...any: any[]) => number;

export class Tween {
    static to<T>(target: T, props: ConstructorType<T>, duration: number, ease?: EaseFunc) {
        return Laya.Tween.to(target, props, duration, ease);
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

            get length(): number;
        }

        interface Vector3 {
            clone(): Vector3;
            cloneTo(value: IVector3Like): IVector3Like;
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

Object.defineProperty(Laya.Vector2.prototype, "length", {
    get() {
        const { x, y } = this as Laya.Vector2;
        return Math.sqrt(x * x + y * y);
    },
    configurable: true,
});

Laya.Pool.obtain = function <T>(cls: Constructor<T>): T {
    return Laya.Pool.createByClass(cls);
};

Laya.Pool.free = function <T>(obj: T): void {
    if (obj) {
        Laya.Pool.recoverByClass(obj);
    }
};
