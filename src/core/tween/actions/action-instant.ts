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

export class ActionInstant extends FiniteTimeAction {
    isDone(): boolean {
        return true;
    }

    step(dt: any): void {
        this.update(1);
    }

    update(dt: number): void {
        // nothing
    }

    reverse(): Action {
        return this.clone();
    }

    clone(): ActionInstant {
        return new ActionInstant();
    }
}

export class Show extends ActionInstant {
    update(dt: any): void {
        (this.target as Laya.Sprite).visible = true;
    }

    reverse(): Hide {
        return new Hide();
    }

    clone(): Show {
        return new Show();
    }
}

export function show(): ActionInstant {
    return new Show();
}

export class Hide extends ActionInstant {
    update(dt: any): void {
        (this.target as Laya.Sprite).visible = false;
    }

    reverse(): Show {
        return new Show();
    }

    clone(): Hide {
        return new Hide();
    }
}

export function hide(): ActionInstant {
    return new Hide();
}

export class ToggleVisibility extends ActionInstant {
    update(dt: any): void {
        const target = this.target as Laya.Sprite;
        target.visible = !target.visible;
    }

    reverse(): ToggleVisibility {
        return new ToggleVisibility();
    }

    clone(): ToggleVisibility {
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

    update(dt: any): void {
        this.target?.removeSelf();
        if (this._isNeedCleanUp) {
            this.target?.destroy(true);
        }
    }

    init(isNeedCleanUp: any): boolean {
        this._isNeedCleanUp = isNeedCleanUp;
        return true;
    }

    reverse(): RemoveSelf {
        return new RemoveSelf(this._isNeedCleanUp);
    }

    clone(): RemoveSelf {
        return new RemoveSelf(this._isNeedCleanUp);
    }
}

export function removeSelf(isNeedCleanUp: boolean): ActionInstant {
    return new RemoveSelf(isNeedCleanUp);
}

export class CallFunc extends ActionInstant {
    private _selectorTarget = null;
    private _function: Function | null = null;
    private _data = null;

    constructor(selector?: Function, selectorTarget?: any, data?: any) {
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

    update(dt: any): void {
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

    clone(): CallFunc {
        const action = new CallFunc();
        action.initWithFunction(this._function, this._selectorTarget, this._data);
        return action;
    }
}

export function callFunc(selector: Function, selectorTarget?: any, data?: any): ActionInstant {
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

    update(): void {
        const props = this._props;
        const target = this.target as any;
        for (const name in props) {
            target![name] = props[name];
        }
    }

    clone(): SetAction {
        const action = new SetAction();
        action.init(this._props);
        return action;
    }
}
