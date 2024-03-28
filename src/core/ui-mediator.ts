import { AnyFunction, Callback, toEventType } from "./dispatcher";
import { Timer } from "./timer";

type Listener = {
    type: string;
    target: Laya.EventDispatcher;
    callback: AnyFunction;
    thisArg?: unknown;
};

interface IAutoDestroy {
    destroy(): void;
    get destroyed(): boolean;
}

class EventAgent {
    public target!: Laya.EventDispatcher;

    public constructor(public readonly listeners: Listener[]) {}

    public on(type: string | number, callback: Callback, thisArg?: unknown) {
        type = toEventType(type);
        this.target.on(type, thisArg, callback);
        this.listeners.push({
            type,
            target: this.target,
            callback,
            thisArg,
        });
    }
}

export class Mediator extends Laya.Script {
    private _timer: Timer;
    private _agent: EventAgent;
    private _destoryList: IAutoDestroy[] = [];

    private _listeners: Listener[] = [];

    public constructor() {
        super();
        this._agent = new EventAgent(this._listeners);
        this._timer = new Timer();
    }

    public $(target: Laya.EventDispatcher) {
        this._agent.target = target;
        return this._agent;
    }

    public override onDestroy() {
        console.debug(`[DEBUG] destroy ${this.constructor.name}`);
        for (const listener of this._listeners) {
            const { type, target, callback, thisArg } = listener;
            target.off(type, thisArg, callback);
        }
        for (const obj of this._destoryList) {
            if (!obj.destroyed) {
                obj.destroy();
            }
        }
        this._destoryList.length = 0;
        super.onDestroy();
    }

    public get timer() {
        return this._timer;
    }

    public override onUpdate(): void {
        this.timer.update(Laya.timer.delta / 1000);
    }

    protected autoDestroy(...args: IAutoDestroy[]) {
        for (const obj of args) {
            if (obj && this._destoryList.indexOf(obj) === -1) {
                this._destoryList.push(obj);
            }
        }
    }
}
