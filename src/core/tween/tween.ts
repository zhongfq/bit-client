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

import {
    ActionInterval,
    sequence,
    repeat,
    repeatForever,
    reverseTime,
    delayTime,
    spawn,
} from "./actions/action-interval";
import { removeSelf, show, hide, callFunc, SetAction } from "./actions/action-instant";
import { Action, FiniteTimeAction } from "./actions/action";
import { TweenSystem } from "./tween-system";
import { TweenAction } from "./tween-action";
import { Callback } from "../dispatcher";

export type TweenEasing =
    | "linear"
    | "smooth"
    | "fade"
    | "constant"
    | "quadIn"
    | "quadOut"
    | "quadInOut"
    | "quadOutIn"
    | "cubicIn"
    | "cubicOut"
    | "cubicInOut"
    | "cubicOutIn"
    | "quartIn"
    | "quartOut"
    | "quartInOut"
    | "quartOutIn"
    | "quintIn"
    | "quintOut"
    | "quintInOut"
    | "quintOutIn"
    | "sineIn"
    | "sineOut"
    | "sineInOut"
    | "sineOutIn"
    | "expoIn"
    | "expoOut"
    | "expoInOut"
    | "expoOutIn"
    | "circIn"
    | "circOut"
    | "circInOut"
    | "circOutIn"
    | "elasticIn"
    | "elasticOut"
    | "elasticInOut"
    | "elasticOutIn"
    | "backIn"
    | "backOut"
    | "backInOut"
    | "backOutIn"
    | "bounceIn"
    | "bounceOut"
    | "bounceInOut"
    | "bounceOutIn";

export interface ITweenOption {
    easing?: TweenEasing | ((k: number) => number);
    progress?: (start: number, end: number, current: number, ratio: number) => number;
    onStart?: (target?: object) => void;
    onUpdate?: (target?: object, ratio?: number) => void;
    onComplete?: (target?: object) => void;
}

// https://medium.com/dailyjs/typescript-create-a-condition-based-subset-types-9d902cea5b8c
type FlagExcludedType<Base, Type> = { [Key in keyof Base]: Base[Key] extends Type ? never : Key };
type AllowedNames<Base, Type> = FlagExcludedType<Base, Type>[keyof Base];
type KeyPartial<T, K extends keyof T> = { [P in K]?: T[P] };
type OmitType<Base, Type> = KeyPartial<Base, AllowedNames<Base, Type>>;
// eslint-disable-next-line @typescript-eslint/ban-types
type ConstructorType<T> = { [K in keyof T]?: T[K] };
// type ConstructorType<T> = OmitType<T, Function>;

export class Tween<T> {
    private _actions: Action[] = [];
    private _finalAction: Action | null = null;
    private _target: T | null = null;
    private _tag = Action.TAG_INVALID;

    constructor(target?: T | null) {
        this._target = target === undefined ? null : target;
    }

    tag(tag: number): Tween<T> {
        this._tag = tag;
        return this;
    }

    then(other: Tween<T>): Tween<T> {
        if (other instanceof Action) {
            this._actions.push(other.clone());
        } else {
            this._actions.push(other._union());
        }
        return this;
    }

    target(target: T): Tween<T | undefined> {
        this._target = target;
        return this;
    }

    start(): Tween<T> {
        if (!this._target) {
            // warn("Please set target to tween first");
            return this;
        }
        if (this._finalAction) {
            TweenSystem.actionManager.removeAction(this._finalAction);
        }
        this._finalAction = this._union();
        this._finalAction.setTag(this._tag);
        TweenSystem.actionManager.addAction(this._finalAction, this._target as any, false);
        return this;
    }

    stop(): Tween<T> {
        if (this._finalAction) {
            TweenSystem.actionManager.removeAction(this._finalAction);
        }
        return this;
    }

    clone(target: T): Tween<T> {
        const action = this._union();
        return tween(target).then(action.clone() as any);
    }

    union(): Tween<T> {
        const action = this._union();
        this._actions.length = 0;
        this._actions.push(action);
        return this;
    }

    to(duration: number, props: ConstructorType<T>, opts?: ITweenOption): Tween<T> {
        opts = opts || Object.create(null);
        (opts as any).relative = false;
        const action = new TweenAction(duration, props, opts);
        this._actions.push(action);
        return this;
    }

    by(duration: number, props: ConstructorType<T>, opts?: ITweenOption): Tween<T> {
        opts = opts || Object.create(null);
        (opts as any).relative = true;
        const action = new TweenAction(duration, props, opts);
        this._actions.push(action);
        return this;
    }

    set(props: ConstructorType<T>): Tween<T> {
        const action = new SetAction(props);
        this._actions.push(action);
        return this;
    }

    delay(duration: number): Tween<T> {
        const action = delayTime(duration);
        this._actions.push(action);
        return this;
    }

    call(callback: Callback): Tween<T> {
        const action = callFunc(callback);
        this._actions.push(action);
        return this;
    }

    sequence(...args: Tween<T>[]): Tween<T> {
        const action = Tween._wrappedSequence(...args);
        this._actions.push(action);
        return this;
    }

    parallel(...args: Tween<T>[]): Tween<T> {
        const action = Tween._wrappedParallel(...args);
        this._actions.push(action);
        return this;
    }

    repeat(repeatTimes: number, embedTween?: Tween<T>): Tween<T> {
        /** adapter */
        if (repeatTimes === Infinity) {
            return this.repeatForever(embedTween);
        }

        const actions = this._actions;
        let action: any;

        if (embedTween instanceof Tween) {
            action = embedTween._union();
        } else {
            action = actions.pop();
        }

        actions.push(repeat(action, repeatTimes));
        return this;
    }

    repeatForever(embedTween?: Tween<T>): Tween<T> {
        const actions = this._actions;
        let action: any;

        if (embedTween instanceof Tween) {
            action = embedTween._union();
        } else {
            action = actions.pop();
        }

        actions.push(repeatForever(action as ActionInterval));
        return this;
    }

    reverseTime(embedTween?: Tween<T>): Tween<T> {
        const actions = this._actions;
        let action: any;

        if (embedTween instanceof Tween) {
            action = embedTween._union();
        } else {
            action = actions.pop();
        }

        actions.push(reverseTime(action as ActionInterval));
        return this;
    }

    hide(): Tween<T> {
        const action = hide();
        this._actions.push(action);
        return this;
    }

    show(): Tween<T> {
        const action = show();
        this._actions.push(action);
        return this;
    }

    removeSelf(): Tween<T> {
        const action = removeSelf(false);
        this._actions.push(action);
        return this;
    }

    destroySelf(): Tween<T> {
        const action = removeSelf(true);
        this._actions.push(action);
        return this;
    }

    static stopAll(): void {
        TweenSystem.actionManager.removeAllActions();
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    static stopAllByTag(tag: number, target?: object): void {
        TweenSystem.actionManager.removeAllActionsByTag(tag, target as any);
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    static stopAllByTarget(target?: object): void {
        TweenSystem.actionManager.removeAllActionsFromTarget(target as any);
    }

    private _union(): Action {
        const actions = this._actions;
        let action: Action;
        if (actions.length === 1) {
            action = actions[0];
        } else {
            action = sequence(actions);
        }

        return action;
    }

    private _destroy(): void {
        this.stop();
    }

    private static readonly _tmp_args: Tween<any>[] | Action[] = [];

    private static _wrappedSequence(...args: Action[] | Tween<any>[]): ActionInterval {
        const tmp_args = Tween._tmp_args;
        tmp_args.length = 0;
        for (let l = args.length, i = 0; i < l; i++) {
            const arg = (tmp_args[i] = args[i]);
            if (arg instanceof Tween) {
                tmp_args[i] = arg._union();
            }
        }

        return sequence.apply(sequence, tmp_args as any);
    }

    private static _wrappedParallel(...args: Action[] | Tween<any>[]): FiniteTimeAction {
        const tmp_args = Tween._tmp_args;
        tmp_args.length = 0;
        for (let l = args.length, i = 0; i < l; i++) {
            const arg = (tmp_args[i] = args[i]);
            if (arg instanceof Tween) {
                tmp_args[i] = arg._union();
            }
        }

        return spawn.apply(spawn, tmp_args as any);
    }
}

export function tween<T>(target?: T): Tween<T> {
    return new Tween<T>(target);
}
