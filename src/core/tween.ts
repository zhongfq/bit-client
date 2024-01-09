type Props<T> = {
    [K in keyof T]?: T[K];
};

export class tween {
    static to<T>(target: T, props: Props<T>, duration: number, ease?: Function) {
        return Laya.Tween.to(target, props, duration, ease);
    }
}
