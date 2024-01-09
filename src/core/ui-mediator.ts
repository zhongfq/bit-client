import { AnyFunction, Callback, toEventType } from "./dispatcher";
import { Timer } from "./timer";

type Listener = {
    type: string | number;
    target: Laya.EventDispatcher;
    callback: AnyFunction;
    thisArg?: unknown;
};

export class Mediator extends Laya.Script {
    private _timer: Timer;

    constructor() {
        super();
        this._timer = new Timer();
    }

    protected _listeners: Listener[] = [];

    on(target: Laya.EventDispatcher, type: string | number, callback: Callback, thisArg?: unknown) {
        this._listeners.push({
            type,
            target,
            callback,
            thisArg,
        });
        target.on(toEventType(type), thisArg, callback);
    }

    onDestroy() {
        for (const listener of this._listeners) {
            const { type, target, callback, thisArg } = listener;
            target.off(toEventType(type), thisArg, callback);
        }
        super.onDestroy();
    }

    get timer() {
        return this._timer;
    }

    onCreate?(args?: any): void;

    onUpdate() {
        super.onUpdate?.();
        this.timer.update(Laya.timer.delta / 1000);
    }
}
