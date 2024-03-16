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

    public constructor() {
        super();
        this._timer = new Timer();
    }

    protected _listeners: Listener[] = [];

    public on(
        target: Laya.EventDispatcher,
        type: string | number,
        callback: Callback,
        thisArg?: unknown
    ) {
        this._listeners.push({
            type,
            target,
            callback,
            thisArg,
        });
        target.on(toEventType(type), thisArg, callback);
    }

    public override onDestroy() {
        console.debug(`[DEBUG] destroy ${this.constructor.name}`);
        for (const listener of this._listeners) {
            const { type, target, callback, thisArg } = listener;
            target.off(toEventType(type), thisArg, callback);
        }
        super.onDestroy();
    }

    public get timer() {
        return this._timer;
    }

    public onCreate?(args?: any): void;

    public override onUpdate(): void {
        this.timer.update(Laya.timer.delta / 1000);
    }
}
