import { Callback, assert } from "./dispatcher";

const DEFAULT_TAG = "__internal_tag__";

type LinkedEntry = {
    prev: LinkedEntry;
    next: LinkedEntry;
    tag: string;
    time: number;
    interval?: number;
    callback?: Callback | null;
};

type LinkedList = {
    head: LinkedEntry;
    tail: LinkedEntry;
};

export class Timer {
    private _timestamp = 0;

    private _delayer!: LinkedList;
    private _scheduler!: LinkedList;

    public constructor() {
        this.clear();
    }

    private _clearDelays() {
        const entry = {
            tag: "__delay_head__",
            time: Number.MAX_VALUE,
            prev: null!,
            next: null!,
        } as LinkedEntry;
        entry.next = entry;
        entry.prev = entry;
        this._delayer = { head: entry, tail: entry };
    }

    private _clearSchedules() {
        const entry = {
            tag: "__schedule_head__",
            time: Number.MAX_VALUE,
            interval: 0,
            prev: null!,
            next: null!,
        } as LinkedEntry;
        entry.next = entry;
        entry.prev = entry;
        this._scheduler = { head: entry, tail: entry };
    }

    public clear() {
        this._clearDelays();
        this._clearSchedules();
    }

    public delay(time: number, callback: Callback): void;

    public delay(time: number, tag: string, callback: Callback): void;

    public delay(time: number, callbackOrTag: string | Callback, callback?: Callback) {
        let tag: string;
        if (typeof callbackOrTag === "string") {
            tag = callbackOrTag;
            assert(tag !== DEFAULT_TAG, "tag error");
        } else {
            callback = callbackOrTag;
            tag = DEFAULT_TAG;
        }
        assert(callback !== undefined, "no callback");

        this.killDelay(tag);

        const entry: LinkedEntry = {
            tag: tag,
            time: time + this._timestamp,
            callback: callback,
            prev: null!,
            next: null!,
        };

        let prev = this._delayer.tail.prev;
        if (prev !== this._delayer.head) {
            while (prev.time > entry.time) {
                prev = prev.prev;
            }
        }
        const next = prev.next;
        entry.prev = prev;
        entry.next = next;
        prev.next = entry;
        next.prev = entry;
    }

    public killDelay(tag: string) {
        if (tag !== DEFAULT_TAG) {
            let current = this._delayer.head.next;
            while (current !== this._delayer.head) {
                if (tag === current.tag && current.callback) {
                    console.log(`kill callback tagged with ${tag}`);
                    current.callback = null;
                }
                current = current.next;
            }
        }
    }

    public killAll() {
        this._clearDelays();
    }

    public schedule(interval: number, callback: Callback): void;

    public schedule(interval: number, tag: string, callback: Callback): void;

    public schedule(time: number, callbackOrTag: string | Callback, callback?: Callback) {
        let tag: string;
        if (typeof callbackOrTag === "string") {
            tag = callbackOrTag;
            assert(tag !== DEFAULT_TAG, "tag error");
        } else {
            callback = callbackOrTag;
            tag = DEFAULT_TAG;
        }
        assert(callback !== undefined, "no callback");
        const entry: LinkedEntry = {
            tag: tag,
            time: time + this._timestamp,
            interval: time,
            callback: callback,
            prev: null!,
            next: null!,
        };

        const prev = this._scheduler.tail.prev;
        const next = prev.next;
        entry.prev = prev;
        entry.next = next;
        prev.next = entry;
        next.prev = entry;
    }

    public unschedule(tag: string) {
        assert(tag !== DEFAULT_TAG, "tag error");
        let current = this._scheduler.head.next;
        while (current !== this._scheduler.head) {
            if (tag === current.tag && current.callback) {
                current.callback = null;
            }
            current = current.next;
        }
    }

    public update(delta: number) {
        const timestamp = this._timestamp + delta;
        this._timestamp = timestamp;

        const delayer = this._delayer;
        const scheduler = this._scheduler;

        if (delayer.head.next !== delayer.head) {
            let current = delayer.head.next;
            while (timestamp >= current.time) {
                const callback = current.callback;
                current.callback = null;
                callback?.();
                current = current.next;
            }
            if (current !== delayer.head.next) {
                delayer.head.next = current;
                current.prev = delayer.head;
            }
        }
        if (scheduler.head.next !== scheduler.head) {
            let current = scheduler.head.next;
            while (current !== scheduler.head) {
                if (current.callback) {
                    while (timestamp > current.time) {
                        if (current.interval === 0) {
                            current.time = timestamp;
                            current.callback();
                            break;
                        } else {
                            current.time += current.interval!;
                            current.callback();
                        }
                    }
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                current = current.next;
            }
        }
    }
}
