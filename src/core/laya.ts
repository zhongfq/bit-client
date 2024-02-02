import { Constructor, ConstructorType } from "./dispatcher";

export class Tween {
    static to<T>(target: T, props: ConstructorType<T>, duration: number, ease?: Function) {
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

export class Pool {
    static obtain<T>(cls: Constructor<T>) {
        return Laya.Pool.createByClass(cls);
    }

    static free<T>(obj: T) {
        Laya.Pool.recoverByClass(obj);
    }
}

declare global {
    module Laya {
        interface Vector2 {
            normalize(): void;
            clone(): Vector2;

            get length(): number;
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
});
