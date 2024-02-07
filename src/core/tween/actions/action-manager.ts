/*
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.

 http://www.cocos2d-x.org

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

import { Action } from "./action";
import type { ActionInterval } from "./action-interval";

const ID_COUNTER = 0;

class HashElement {
    actions: Action[] = [];
    target: Laya.Node | null = null;
    actionIndex = 0;
    currentAction: Action | null = null;
    paused = false;
    lock = false;
}

export class ActionManager {
    private _hashTargets = new Map();
    private _arrayTargets: HashElement[] = [];
    private _currentTarget!: HashElement;
    private _elementPool: HashElement[] = [];

    private _getElement(target: Laya.Node, paused: boolean): HashElement {
        let element = this._elementPool.pop();
        if (!element) {
            element = new HashElement();
        }
        element.target = target;
        element.paused = !!paused;
        return element;
    }

    private _putElement(element: HashElement): void {
        element.actions.length = 0;
        element.actionIndex = 0;
        element.currentAction = null;
        element.paused = false;
        element.target = null;
        element.lock = false;
        this._elementPool.push(element);
    }

    addAction(action: Action, target: Laya.Node, paused: boolean): void {
        if (!action || !target) {
            // errorID(1000);
            return;
        }

        // if (target.uuid == null) {
        //     (target as any).uuid = `_TWEEN_UUID_${ID_COUNTER++}`;
        // }

        // check if the action target already exists
        let element = this._hashTargets.get(target);
        // if doesn't exists, create a hashelement and push in mpTargets
        if (!element) {
            element = this._getElement(target as any, paused);
            this._hashTargets.set(target, element);
            this._arrayTargets.push(element);
        } else if (!element.actions) {
            element.actions = [];
        }
        // update target due to the same UUID is allowed for different scenarios
        element.target = target;
        element.actions.push(action);
        action.startWithTarget(target);
    }

    removeAllActions(): void {
        const locTargets = this._arrayTargets;
        for (let i = 0; i < locTargets.length; i++) {
            const element = locTargets[i];
            if (element) this._putElement(element);
        }
        this._arrayTargets.length = 0;
        this._hashTargets = new Map();
    }

    removeAllActionsFromTarget(target: Laya.Node): void {
        // explicit null handling
        if (target == null) return;
        const element = this._hashTargets.get(target);
        if (element) {
            element.actions.length = 0;
            this._deleteHashElement(element);
        }
    }

    removeAction(action: Action): void {
        // explicit null handling
        if (action == null) return;
        const target = action.getOriginalTarget()!;
        const element = this._hashTargets.get(target);

        if (element) {
            for (let i = 0; i < element.actions.length; i++) {
                if (element.actions[i] === action) {
                    element.actions.splice(i, 1);
                    // update actionIndex in case we are in tick. looping over the actions
                    if (element.actionIndex >= i) element.actionIndex--;
                    break;
                }
            }
        }
    }

    _removeActionByTag(tag: number, element: any, target?: Laya.Node): void {
        for (let i = 0, l = element.actions.length; i < l; ++i) {
            const action = element.actions[i];
            if (action && action.getTag() === tag) {
                if (target && action.getOriginalTarget() !== target) {
                    continue;
                }
                this._removeActionAtIndex(i, element);
                break;
            }
        }
    }

    _removeAllActionsByTag(tag: number, element: any, target?: Laya.Node): void {
        for (let i = element.actions.length - 1; i >= 0; --i) {
            const action = element.actions[i];
            if (action && action.getTag() === tag) {
                if (target && action.getOriginalTarget() !== target) {
                    continue;
                }
                this._removeActionAtIndex(i, element);
            }
        }
    }

    removeActionByTag(tag: number, target?: Laya.Node): void {
        //if (tag === Action.TAG_INVALID) logID(1002);

        const hashTargets = this._hashTargets;
        if (target) {
            const element = hashTargets.get(target);
            if (element) {
                this._removeActionByTag(tag, element, target);
            }
        } else {
            hashTargets.forEach((element) => {
                this._removeActionByTag(tag, element);
            });
        }
    }

    removeAllActionsByTag(tag: number, target?: Laya.Node): void {
        //if (tag === Action.TAG_INVALID) logID(1002);

        const hashTargets = this._hashTargets;
        if (target) {
            const element = hashTargets.get(target);
            if (element) {
                this._removeAllActionsByTag(tag, element, target);
            }
        } else {
            hashTargets.forEach((element) => {
                this._removeAllActionsByTag(tag, element);
            });
        }
    }

    getActionByTag(tag: number, target: Laya.Node): Action | null {
        //if (tag === Action.TAG_INVALID) logID(1004);

        const element = this._hashTargets.get(target);
        if (element) {
            if (element.actions != null) {
                for (let i = 0; i < element.actions.length; ++i) {
                    const action = element.actions[i];
                    if (action && action.getTag() === tag) {
                        return action as Action;
                    }
                }
            }
            //logID(1005, tag);
        }
        return null;
    }

    getNumberOfRunningActionsInTarget(target: Laya.Node): number {
        const element = this._hashTargets.get(target);
        if (element) {
            return element.actions ? (element.actions.length as number) : 0;
        }

        return 0;
    }

    pauseTarget(target: Laya.Node): void {
        const element = this._hashTargets.get(target);
        if (element) element.paused = true;
    }

    resumeTarget(target: Laya.Node): void {
        const element = this._hashTargets.get(target);
        if (element) element.paused = false;
    }

    pauseAllRunningActions(): Array<Laya.Node> {
        const idsWithActions: Laya.Node[] = [];
        const locTargets = this._arrayTargets;
        for (let i = 0; i < locTargets.length; i++) {
            const element = locTargets[i];
            if (element && !element.paused) {
                element.paused = true;
                idsWithActions.push(element.target!);
            }
        }
        return idsWithActions;
    }

    resumeTargets(targetsToResume: Array<Laya.Node>): void {
        if (!targetsToResume) return;

        for (let i = 0; i < targetsToResume.length; i++) {
            if (targetsToResume[i]) this.resumeTarget(targetsToResume[i]);
        }
    }

    pauseTargets(targetsToPause: Array<Laya.Node>): void {
        if (!targetsToPause) return;

        for (let i = 0; i < targetsToPause.length; i++) {
            if (targetsToPause[i]) this.pauseTarget(targetsToPause[i]);
        }
    }

    // protected
    private _removeActionAtIndex(index: number, element: HashElement): void {
        const action = element.actions[index];

        element.actions.splice(index, 1);

        // update actionIndex in case we are in tick. looping over the actions
        if (element.actionIndex >= index) element.actionIndex--;

        if (element.actions.length === 0) {
            this._deleteHashElement(element);
        }
    }

    private _deleteHashElement(element: HashElement): boolean {
        let ret = false;
        if (element && !element.lock) {
            if (this._hashTargets.get(element.target)) {
                this._hashTargets.delete(element.target);
                const targets = this._arrayTargets;
                for (let i = 0, l = targets.length; i < l; i++) {
                    if (targets[i] === element) {
                        targets.splice(i, 1);
                        break;
                    }
                }
                this._putElement(element);
                ret = true;
            }
        }
        return ret;
    }

    update(dt: number): void {
        const locTargets = this._arrayTargets;
        let locCurrTarget: HashElement;
        for (let elt = 0; elt < locTargets.length; elt++) {
            this._currentTarget = locTargets[elt];
            locCurrTarget = this._currentTarget;

            const target = locCurrTarget.target;
            if (target?.destroyed) {
                this.removeAllActionsFromTarget(target as Laya.Node);
                elt--;
                continue;
            }

            if (!locCurrTarget.paused && locCurrTarget.actions) {
                locCurrTarget.lock = true;
                // The 'actions' CCMutableArray may change while inside this loop.
                for (
                    locCurrTarget.actionIndex = 0;
                    locCurrTarget.actionIndex < locCurrTarget.actions.length;
                    locCurrTarget.actionIndex++
                ) {
                    locCurrTarget.currentAction = locCurrTarget.actions[locCurrTarget.actionIndex];
                    if (!locCurrTarget.currentAction) continue;

                    // use for speed
                    locCurrTarget.currentAction.step(
                        dt *
                            (this._isActionInternal(locCurrTarget.currentAction)
                                ? locCurrTarget.currentAction.getSpeed()
                                : 1)
                    );

                    if (locCurrTarget.currentAction && locCurrTarget.currentAction.isDone()) {
                        locCurrTarget.currentAction.stop();
                        const action = locCurrTarget.currentAction;
                        // Make currentAction nil to prevent removeAction from salvaging it.
                        locCurrTarget.currentAction = null;
                        this.removeAction(action);
                    }

                    locCurrTarget.currentAction = null;
                }
                locCurrTarget.lock = false;
            }
            // only delete currentTarget if no actions were scheduled during the cycle (issue #481)
            if (locCurrTarget.actions.length === 0) {
                if (this._deleteHashElement(locCurrTarget)) {
                    elt--;
                }
            }
        }
    }

    private _isActionInternal(action: any): action is ActionInterval {
        return typeof action._speedMethod !== "undefined";
    }
}
