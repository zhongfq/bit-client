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

export class Action {
    static readonly FLT_EPSILON = 0.0000001192092896;
    static TAG_INVALID = -1;

    protected originalTarget: Laya.Node | null = null;
    protected target: Laya.Node | null = null;
    protected tag = Action.TAG_INVALID;

    clone(): Action {
        const action = new Action();
        action.originalTarget = null;
        action.target = null;
        action.tag = this.tag;
        return action;
    }

    isDone(): boolean {
        return true;
    }

    startWithTarget(target: any): void {
        this.originalTarget = target;
        this.target = target;
    }

    stop(): void {
        this.target = null;
    }

    step(dt: number): void {
        //logID(1006);
    }

    update(dt: number): void {
        //logID(1007);
    }

    getTarget(): Laya.Node | null {
        return this.target;
    }

    setTarget(target: Laya.Node): void {
        this.target = target;
    }

    getOriginalTarget(): Laya.Node | null {
        return this.originalTarget;
    }

    setOriginalTarget(originalTarget: any): void {
        this.originalTarget = originalTarget;
    }

    getTag(): number {
        return this.tag;
    }

    setTag(tag: number): void {
        this.tag = tag;
    }

    reverse(): Action | null {
        //logID(1008);
        return null;
    }

    retain(): void {}

    release(): void {}
}

export class FiniteTimeAction extends Action {
    _duration = 0;
    _timesForRepeat = 1;

    getDuration(): number {
        return this._duration * (this._timesForRepeat || 1);
    }

    setDuration(duration: number): void {
        this._duration = duration;
    }

    override clone(): FiniteTimeAction {
        return new FiniteTimeAction();
    }
}

export class Speed extends Action {
    protected _speed = 0;
    protected _innerAction: Action | null = null;

    constructor(action?: Action, speed = 1) {
        super();
        action && this.initWithAction(action, speed);
    }

    getSpeed(): number {
        return this._speed;
    }

    setSpeed(speed: number): void {
        this._speed = speed;
    }

    initWithAction(action: Action, speed: number): boolean {
        if (!action) {
            //errorID(1021);
            return false;
        }

        this._innerAction = action;
        this._speed = speed;
        return true;
    }

    override clone(): Speed {
        const action = new Speed();
        action.initWithAction(this._innerAction!.clone(), this._speed);
        return action;
    }

    override startWithTarget(target: any): void {
        Action.prototype.startWithTarget.call(this, target);
        this._innerAction!.startWithTarget(target);
    }

    override stop(): void {
        this._innerAction!.stop();
        Action.prototype.stop.call(this);
    }

    override step(dt: number): void {
        this._innerAction!.step(dt * this._speed);
    }

    override isDone(): boolean {
        return this._innerAction!.isDone();
    }

    override reverse(): Speed {
        return new Speed(this._innerAction!.reverse()!, this._speed);
    }

    setInnerAction(action: any): void {
        if (this._innerAction !== action) {
            this._innerAction = action;
        }
    }

    getInnerAction(): Action | null {
        return this._innerAction;
    }
}
