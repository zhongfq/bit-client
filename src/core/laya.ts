import { ConstructorType } from "./dispatcher";

export namespace LayaExt {
    export class Tween {
        static to<T>(target: T, props: ConstructorType<T>, duration: number, ease?: Function) {
            return Laya.Tween.to(target, props, duration, ease);
        }
    }
}
