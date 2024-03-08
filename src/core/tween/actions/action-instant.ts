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

import { Callback } from "../../dispatcher";
import { FiniteTimeAction, Action } from "./action";

export class ActionInstant extends FiniteTimeAction {
    override isDone(): boolean {
        return true;
    }

    override step(dt: any): void {
        this.update(1);
    }

    override update(dt: number): void {
        // nothing
    }

    override reverse(): Action {
        return this.clone();
    }

    override clone(): ActionInstant {
        return new ActionInstant();
    }
}

export class Show extends ActionInstant {
    override update(dt: any): void {
        (this.target as Laya.Sprite).visible = true;
    }

    override reverse(): Hide {
        return new Hide();
    }

    override clone(): Show {
        return new Show();
    }
}

export function show(): ActionInstant {
    return new Show();
}

export class Hide extends ActionInstant {
    override update(dt: any): void {
        (this.target as Laya.Sprite).visible = false;
    }

    override reverse(): Show {
        return new Show();
    }

    override clone(): Hide {
        return new Hide();
    }
}

export function hide(): ActionInstant {
    return new Hide();
}

export class ToggleVisibility extends ActionInstant {
    override update(dt: any): void {
        const target = this.target as Laya.Sprite;
        target.visible = !target.visible;
    }

    override reverse(): ToggleVisibility {
        return new ToggleVisibility();
    }

    override clone(): ToggleVisibility {
        return new ToggleVisibility();
    }
}

export function toggleVisibility(): ActionInstant {
    return new ToggleVisibility();
}

export class RemoveSelf extends ActionInstant {
    protected _isNeedCleanUp = true;

    constructor(isNeedCleanUp?: boolean) {
        super();
        isNeedCleanUp !== undefined && this.init(isNeedCleanUp);
    }

    override update(dt: any): void {
        this.target?.removeSelf();
        if (this._isNeedCleanUp) {
            this.target?.destroy();
        }
    }

    init(isNeedCleanUp: any): boolean {
        this._isNeedCleanUp = isNeedCleanUp;
        return true;
    }

    override reverse(): RemoveSelf {
        return new RemoveSelf(this._isNeedCleanUp);
    }

    override clone(): RemoveSelf {
        return new RemoveSelf(this._isNeedCleanUp);
    }
}

export function removeSelf(isNeedCleanUp: boolean): ActionInstant {
    return new RemoveSelf(isNeedCleanUp);
}

export class CallFunc extends ActionInstant {
    private _selectorTarget = null;
    private _function: Callback | null = null;
    private _data = null;

    constructor(selector?: Callback, selectorTarget?: any, data?: any) {
        super();
        this.initWithFunction(selector, selectorTarget, data);
    }

    initWithFunction(selector: any, selectorTarget?: any, data?: any): boolean {
        if (selector) {
            this._function = selector;
        }
        if (selectorTarget) {
            this._selectorTarget = selectorTarget;
        }
        if (data !== undefined) {
            this._data = data;
        }
        return true;
    }

    execute(): void {
        if (this._function) {
            this._function.call(this._selectorTarget, this.target, this._data);
        }
    }

    override update(dt: any): void {
        this.execute();
    }

    getTargetCallback(): null {
        return this._selectorTarget;
    }

    setTargetCallback(sel: any): void {
        if (sel !== this._selectorTarget) {
            if (this._selectorTarget) {
                this._selectorTarget = null;
            }
            this._selectorTarget = sel;
        }
    }

    override clone(): CallFunc {
        const action = new CallFunc();
        action.initWithFunction(this._function, this._selectorTarget, this._data);
        return action;
    }
}

export function callFunc(selector: Callback, selectorTarget?: any, data?: any): ActionInstant {
    return new CallFunc(selector, selectorTarget, data);
}

export class SetAction extends ActionInstant {
    private _props: any;

    constructor(props?: any) {
        super();
        this._props = {};
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        props !== undefined && this.init(props);
    }

    init(props: any): boolean {
        for (const name in props) {
            this._props[name] = props[name];
        }
        return true;
    }

    override update(): void {
        const props = this._props;
        const target = this.target as any;
        for (const name in props) {
            target![name] = props[name];
        }
    }

    override clone(): SetAction {
        const action = new SetAction();
        action.init(this._props);
        return action;
    }
}
