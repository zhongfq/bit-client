/*
 Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 of the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

import { FiniteTimeAction, Action } from "./action";
import { ActionInstant } from "./action-instant";

export class ActionInterval extends FiniteTimeAction {
    protected MAX_VALUE = 2;
    protected _elapsed = 0;
    protected _firstTick = false;
    // eslint-disable-next-line @typescript-eslint/ban-types
    protected _easeList: Function[] = [];
    protected _speed = 1;
    protected _repeatForever = false;
    public _repeatMethod = false;
    protected _speedMethod = false;

    public constructor(d?: number) {
        super();
        if (d !== undefined && !Number.isNaN(d)) {
            this.initWithDuration(d);
        }
    }

    public getElapsed(): number {
        return this._elapsed;
    }

    public initWithDuration(d: number): boolean {
        this._duration = d === 0 ? Action.FLT_EPSILON : d;
        this._elapsed = 0;
        this._firstTick = true;
        return true;
    }

    public override isDone(): boolean {
        return this._elapsed >= this._duration;
    }

    protected _cloneDecoration(action: ActionInterval): void {
        action._repeatForever = this._repeatForever;
        action._speed = this._speed;
        action._timesForRepeat = this._timesForRepeat;
        action._easeList = this._easeList;
        action._speedMethod = this._speedMethod;
        action._repeatMethod = this._repeatMethod;
    }

    protected _reverseEaseList(action: ActionInterval): void {
        if (this._easeList) {
            action._easeList = [];
            for (let i = 0; i < this._easeList.length; i++) {
                action._easeList.push(this._easeList[i]);
            }
        }
    }

    public override clone(): ActionInterval {
        const action = new ActionInterval(this._duration);
        this._cloneDecoration(action);
        return action;
    }

    public easing(easeObj: any): ActionInterval {
        if (this._easeList) this._easeList.length = 0;
        else this._easeList = [];
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        for (let i = 0; i < arguments.length; i++) this._easeList.push(arguments[i]);
        return this;
    }

    protected _computeEaseTime(dt: any): any {
        return dt;
    }

    public override step(dt: number): void {
        if (this._firstTick) {
            this._firstTick = false;
            this._elapsed = 0;
        } else this._elapsed += dt;

        let t =
            this._elapsed /
            (this._duration > 0.0000001192092896 ? this._duration : 0.0000001192092896);
        t = t < 1 ? t : 1;
        this.update(t > 0 ? t : 0);

        if (this._repeatMethod && this._timesForRepeat > 1 && this.isDone()) {
            if (!this._repeatForever) {
                this._timesForRepeat--;
            }
            this.startWithTarget(this.target);

            this.step(this._elapsed - this._duration);
        }
    }

    public override startWithTarget(target: any): void {
        Action.prototype.startWithTarget.call(this, target);
        this._elapsed = 0;
        this._firstTick = true;
    }

    public override reverse(): ActionInterval {
        //logID(1010);
        return this;
    }

    public setAmplitudeRate(amp: any): void {
        // Abstract class needs implementation
        //logID(1011);
    }

    public getAmplitudeRate(): number {
        // Abstract class needs implementation
        //logID(1012);
        return 0;
    }

    public speed(speed: number): Action {
        if (speed <= 0) {
            //logID(1013);
            return this;
        }

        this._speedMethod = true;
        this._speed *= speed;
        return this;
    }

    public getSpeed(): number {
        return this._speed;
    }

    public setSpeed(speed: number): ActionInterval {
        this._speed = speed;
        return this;
    }

    public repeat(times: number): ActionInterval {
        times = Math.round(times);
        if (Number.isNaN(times) || times < 1) {
            // logID(1014);
            return this;
        }
        this._repeatMethod = true;
        this._timesForRepeat *= times;
        return this;
    }

    public repeatForever(): ActionInterval {
        this._repeatMethod = true;
        this._timesForRepeat = this.MAX_VALUE;
        this._repeatForever = true;
        return this;
    }
}

export class Sequence extends ActionInterval {
    public static _actionOneTwo = function (
        actionOne: ActionInterval,
        actionTwo: ActionInterval
    ): Sequence {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const sequence = new Sequence();
        sequence.initWithTwoActions(actionOne, actionTwo);
        return sequence;
    };

    private _actions: ActionInterval[] = [];
    private _split = 0;
    private _last = 0;
    private _reversed = false;

    public constructor(...actions: FiniteTimeAction[]);

    public constructor(tempArray: any) {
        super();

        const paramArray = tempArray instanceof Array ? tempArray : arguments;
        if (paramArray.length === 1) {
            //errorID(1019);
            return;
        }
        const last = paramArray.length - 1;
        //if (last >= 0 && paramArray[last] == null) logID(1015);

        if (last >= 0) {
            let prev = paramArray[0];
            let action1: any;
            for (let i = 1; i < last; i++) {
                if (paramArray[i]) {
                    action1 = prev;
                    prev = Sequence._actionOneTwo(
                        action1 as ActionInterval,
                        paramArray[i] as ActionInterval
                    );
                }
            }
            this.initWithTwoActions(prev, paramArray[last]);
        }
    }

    public initWithTwoActions(actionOne: any, actionTwo: any): boolean {
        if (!actionOne || !actionTwo) {
            //errorID(1025);
            return false;
        }

        let durationOne = actionOne._duration;
        let durationTwo = actionTwo._duration;
        durationOne *= actionOne._repeatMethod ? actionOne._timesForRepeat : 1;
        durationTwo *= actionTwo._repeatMethod ? actionTwo._timesForRepeat : 1;
        const d = durationOne + durationTwo;
        this.initWithDuration(d as number);

        this._actions[0] = actionOne;
        this._actions[1] = actionTwo;
        return true;
    }

    public override clone(): any {
        const action = new Sequence();
        this._cloneDecoration(action as ActionInterval);
        action.initWithTwoActions(this._actions[0].clone(), this._actions[1].clone());
        return action as any;
    }

    public override startWithTarget(target: any): void {
        ActionInterval.prototype.startWithTarget.call(this, target);
        this._split = this._actions[0]._duration / this._duration;
        this._split *= this._actions[0]._repeatMethod ? this._actions[0]._timesForRepeat : 1;
        this._last = -1;
    }

    public override stop(): void {
        if (this._last !== -1) this._actions[this._last].stop();
        Action.prototype.stop.call(this);
    }

    public override update(dt: number): void {
        let new_t: number;
        let found = 0;
        const locSplit = this._split;
        const locActions = this._actions;
        const locLast = this._last;
        let actionFound: ActionInterval;

        dt = this._computeEaseTime(dt);
        if (dt < locSplit) {
            new_t = locSplit !== 0 ? dt / locSplit : 1;

            if (found === 0 && locLast === 1 && this._reversed) {
                locActions[1].update(0);
                locActions[1].stop();
            }
        } else {
            found = 1;
            new_t = locSplit === 1 ? 1 : (dt - locSplit) / (1 - locSplit);

            if (locLast === -1) {
                locActions[0].startWithTarget(this.target);
                locActions[0].update(1);
                locActions[0].stop();
            }
            if (locLast === 0) {
                locActions[0].update(1);
                locActions[0].stop();
            }
        }

        // eslint-disable-next-line prefer-const
        actionFound = locActions[found];
        // Last action found and it is done.
        if (locLast === found && actionFound.isDone()) return;

        // Last action not found
        if (locLast !== found) actionFound.startWithTarget(this.target);

        new_t *= actionFound._timesForRepeat;
        actionFound.update(new_t > 1 ? new_t % 1 : new_t);
        this._last = found;
    }

    public override reverse(): any {
        const action = Sequence._actionOneTwo(
            this._actions[1].reverse(),
            this._actions[0].reverse()
        );
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        action._reversed = true;
        return action as any;
    }
}

export function sequence(/* Multiple Arguments */ tempArray: any): ActionInterval {
    const paramArray = tempArray instanceof Array ? tempArray : arguments;
    if (paramArray.length === 1) {
        return paramArray[0] as ActionInterval;
    }
    const last = paramArray.length - 1;
    // if (last >= 0 && paramArray[last] == null) logID(1015);

    let result: any = null;
    if (last >= 0) {
        result = paramArray[0];
        for (let i = 1; i <= last; i++) {
            if (paramArray[i]) {
                result = Sequence._actionOneTwo(
                    result as ActionInterval,
                    paramArray[i] as ActionInterval
                );
            }
        }
    }

    return result as ActionInterval;
}

export class Repeat extends ActionInterval {
    private _times = 0;
    private _total = 0;
    private _nextDt = 0;
    private _actionInstant = false;
    private _innerAction: FiniteTimeAction | null = null;

    public constructor(action?: any, times?: any) {
        super();
        times !== undefined && this.initWithAction(action as FiniteTimeAction, times as number);
    }

    public initWithAction(action: FiniteTimeAction, times: number): boolean {
        const duration = action._duration * times;

        if (this.initWithDuration(duration)) {
            this._times = times;
            this._innerAction = action;
            if (action instanceof ActionInstant) {
                this._actionInstant = true;
                this._times -= 1;
            }
            this._total = 0;
            return true;
        }
        return false;
    }

    public override clone(): Repeat {
        const action = new Repeat();
        this._cloneDecoration(action);
        action.initWithAction(this._innerAction!.clone(), this._times);
        return action;
    }

    public override startWithTarget(target: any): void {
        this._total = 0;
        this._nextDt = this._innerAction!._duration / this._duration;
        ActionInterval.prototype.startWithTarget.call(this, target);
        this._innerAction!.startWithTarget(target);
    }

    public override stop(): void {
        this._innerAction!.stop();
        Action.prototype.stop.call(this);
    }

    public override update(dt: number): void {
        dt = this._computeEaseTime(dt);
        const locInnerAction = this._innerAction!;
        const locDuration = this._duration;
        const locTimes = this._times;
        let locNextDt = this._nextDt;

        if (dt >= locNextDt) {
            while (dt > locNextDt && this._total < locTimes) {
                locInnerAction.update(1);
                this._total++;
                locInnerAction.stop();
                locInnerAction.startWithTarget(this.target);
                locNextDt += locInnerAction._duration / locDuration;
                this._nextDt = locNextDt > 1 ? 1 : locNextDt;
            }

            // fix for issue #1288, incorrect end value of repeat
            if (dt >= 1.0 && this._total < locTimes) {
                // fix for cocos-creator/fireball/issues/4310
                locInnerAction.update(1);
                this._total++;
            }

            // don't set a instant action back or update it, it has no use because it has no duration
            if (!this._actionInstant) {
                if (this._total === locTimes) {
                    locInnerAction.stop();
                } else {
                    // issue #390 prevent jerk, use right update
                    locInnerAction.update(
                        dt - (locNextDt - locInnerAction._duration / locDuration)
                    );
                }
            }
        } else {
            locInnerAction.update((dt * locTimes) % 1.0);
        }
    }

    public override isDone(): boolean {
        return this._total === this._times;
    }

    public override reverse(): any {
        const action = new Repeat(this._innerAction!.reverse(), this._times);
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action as any;
    }

    public setInnerAction(action: any): void {
        if (this._innerAction !== action) {
            this._innerAction = action;
        }
    }

    public getInnerAction(): FiniteTimeAction | null {
        return this._innerAction;
    }
}

export function repeat(action: any, times: any): Action {
    return new Repeat(action, times);
}

export class RepeatForever extends ActionInterval {
    private _innerAction: ActionInterval | null = null;

    public constructor(action?: ActionInterval) {
        super();
        action && this.initWithAction(action);
    }

    public initWithAction(action: ActionInterval): boolean {
        if (!action) {
            //errorID(1026);
            return false;
        }

        this._innerAction = action;
        return true;
    }

    public override clone(): RepeatForever {
        const action = new RepeatForever();
        this._cloneDecoration(action);
        action.initWithAction(this._innerAction!.clone());
        return action;
    }

    public override startWithTarget(target: any): void {
        ActionInterval.prototype.startWithTarget.call(this, target);
        this._innerAction!.startWithTarget(target);
    }

    public override step(dt: any): void {
        const locInnerAction = this._innerAction!;
        locInnerAction.step(dt as number);
        if (locInnerAction.isDone()) {
            locInnerAction.startWithTarget(this.target);
            locInnerAction.step(locInnerAction.getElapsed() - locInnerAction._duration);
        }
    }

    public override isDone(): boolean {
        return false;
    }

    public override reverse(): any {
        const action = new RepeatForever(this._innerAction!.reverse());
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action as any;
    }

    public setInnerAction(action: any): void {
        if (this._innerAction !== action) {
            this._innerAction = action;
        }
    }

    public getInnerAction(): ActionInstant | null {
        return this._innerAction;
    }
}

export function repeatForever(action?: ActionInterval): ActionInterval {
    return new RepeatForever(action);
}

export class Spawn extends ActionInterval {
    public static _actionOneTwo = function (action1: any, action2: any): Spawn {
        const pSpawn = new Spawn();
        pSpawn.initWithTwoActions(action1, action2);
        return pSpawn;
    };

    private _one: ActionInterval | null = null;
    private _two: ActionInterval | null = null;

    public constructor(tempArray?: any) {
        super();

        const paramArray = tempArray instanceof Array ? tempArray : arguments;
        if (paramArray.length === 1) {
            //errorID(1020);
            return;
        }
        const last = paramArray.length - 1;
        // if (last >= 0 && paramArray[last] == null) logID(1015);

        if (last >= 0) {
            let prev = paramArray[0];
            let action1: any;
            for (let i = 1; i < last; i++) {
                if (paramArray[i]) {
                    action1 = prev;
                    prev = Spawn._actionOneTwo(action1, paramArray[i]);
                }
            }
            this.initWithTwoActions(prev, paramArray[last]);
        }
    }

    public initWithTwoActions(action1: any, action2: any): boolean {
        if (!action1 || !action2) {
            //errorID(1027);
            return false;
        }

        let ret = false;

        const d1 = action1._duration;
        const d2 = action2._duration;

        if (this.initWithDuration(Math.max(d1 as number, d2 as number))) {
            this._one = action1;
            this._two = action2;

            if (d1 > d2) {
                this._two = Sequence._actionOneTwo(action2 as ActionInterval, delayTime(d1 - d2));
            } else if (d1 < d2) {
                this._one = Sequence._actionOneTwo(action1 as ActionInterval, delayTime(d2 - d1));
            }

            ret = true;
        }
        return ret;
    }

    public override clone(): Spawn {
        const action = new Spawn();
        this._cloneDecoration(action);
        action.initWithTwoActions(this._one!.clone(), this._two!.clone());
        return action;
    }

    public override startWithTarget(target: any): void {
        ActionInterval.prototype.startWithTarget.call(this, target);
        this._one!.startWithTarget(target);
        this._two!.startWithTarget(target);
    }

    public override stop(): void {
        this._one!.stop();
        this._two!.stop();
        Action.prototype.stop.call(this);
    }

    public override update(dt: any): void {
        dt = this._computeEaseTime(dt);
        if (this._one) this._one.update(dt as number);
        if (this._two) this._two.update(dt as number);
    }

    public override reverse(): any {
        const action = Spawn._actionOneTwo(this._one!.reverse(), this._two!.reverse());
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action as any;
    }
}

export function spawn(/* Multiple Arguments */ tempArray: any): FiniteTimeAction {
    const paramArray = tempArray instanceof Array ? tempArray : arguments;
    if (paramArray.length === 1) {
        // errorID(1020);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return null as any;
    }
    // if (paramArray.length > 0 && paramArray[paramArray.length - 1] == null) logID(1015);

    let prev = paramArray[0];
    for (let i = 1; i < paramArray.length; i++) {
        if (paramArray[i] != null) prev = Spawn._actionOneTwo(prev, paramArray[i]);
    }
    return prev as FiniteTimeAction;
}

class DelayTime extends ActionInterval {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public override update(dt: any): void {}

    public override reverse(): any {
        const action = new DelayTime(this._duration);
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action as any;
    }

    public override clone(): DelayTime {
        const action = new DelayTime();
        this._cloneDecoration(action);
        action.initWithDuration(this._duration);
        return action;
    }
}

/**
 * @en Delays the action a certain amount of seconds.
 * @zh 延迟指定的时间量。
 * @method delayTime
 * @param {Number} d duration in seconds
 * @return {ActionInterval}
 * @example
 * import { delayTime } from 'cc';
 * const delay = delayTime(1);
 */
export function delayTime(d: number): ActionInterval {
    return new DelayTime(d);
}

export class ReverseTime extends ActionInterval {
    private _other: ActionInterval | null = null;

    public constructor(action?: any) {
        super();
        action && this.initWithAction(action as ActionInterval);
    }

    /*
     * @param {FiniteTimeAction} action
     * @return {Boolean}
     */
    public initWithAction(action: ActionInterval): boolean {
        if (!action) {
            // errorID(1028);
            return false;
        }
        if (action === this._other) {
            // errorID(1029);
            return false;
        }

        if (ActionInterval.prototype.initWithDuration.call(this, action._duration)) {
            // Don't leak if action is reused
            this._other = action;
            return true;
        }
        return false;
    }

    public override clone(): ReverseTime {
        const action = new ReverseTime();
        this._cloneDecoration(action);
        action.initWithAction(this._other!.clone());
        return action;
    }

    public override startWithTarget(target: any): void {
        ActionInterval.prototype.startWithTarget.call(this, target);
        this._other!.startWithTarget(target);
    }

    public override update(dt: number): void {
        dt = this._computeEaseTime(dt);
        if (this._other) this._other.update(1 - dt);
    }

    public override reverse(): any {
        return this._other!.clone() as any;
    }

    public override stop(): void {
        this._other!.stop();
        Action.prototype.stop.call(this);
    }
}

export function reverseTime(action: any): ActionInterval {
    return new ReverseTime(action);
}
