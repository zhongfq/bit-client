import { Callback } from "./dispatcher";
import { Mediator } from "./ui-mediator";

export const UIALERT_ID = -1;
export const UITOAST_ID = -2;

export interface UIRuntimeInfo {
    descriptor: UIDescriptor;
    view: Node | null;
    mediator: Mediator | null;
    args?: any;
    wrapper?: Node | null;
    closed?: boolean;
}

export interface UIDescriptor {
    id: number;
    url: string;
    blockInput?: boolean;
    autoClose?: boolean;
    capture?: boolean;
    popup?: boolean;
}

export interface UIAlertArgs {
    title: string;
    content: string;
    yes: Callback;
    no?: Callback;
    x?: number;
    y?: number;
}

export interface UIToastArgs {
    content: string;
    duration?: number;
    x?: number;
    y?: number;
}

export class UIManager {
    private _descriptors: { [key: number]: UIDescriptor } = {};

    private _checkDescriptor(id: number) {
        const descriptor = this._descriptors[id];
        if (!descriptor) {
            console.log(`ui with id '${id}' is not registered`);
            return null;
        } else {
            return descriptor;
        }
    }

    register(descriptor: UIDescriptor) {
        this._descriptors[descriptor.id] = descriptor;
    }

    get top() {
        const root = Laya.Scene.root;
        for (let i = root.numChildren - 1; i >= 0; i--) {
            const scene = root.getChildAt(i);
            if (scene instanceof Laya.Scene) {
                return scene;
            }
        }
        return null;
    }

    private _activeScene(scene: Laya.Scene | null, active: boolean) {
        if (scene) {
            scene.active = active;
            scene.visible = active;
        }
    }

    private _doOpenScene(scene: Laya.Scene, args?: any) {
        scene.open(false, args);
        scene.once(Laya.Event.REMOVED, this, () => {
            this._activeScene(this.top, true);
            Laya.Scene.gc();
        });
    }

    private _doCloseScene(scene: Laya.Scene) {
        scene.offAllCaller(this);
        scene.removeSelf();
    }

    open(id: number, args?: any) {
        const descriptor = this._checkDescriptor(id);
        if (descriptor) {
            Laya.Scene.load(descriptor.url)
                .then((scene) => {
                    this._activeScene(this.top, false);
                    this._doOpenScene(scene, args);
                })
                .catch((e) => {
                    console.error("todo");
                });
        }
    }

    replace(id: number, args?: any) {
        const descriptor = this._checkDescriptor(id);
        if (descriptor) {
            Laya.Scene.load(descriptor.url)
                .then((scene) => {
                    const topScene = this.top;
                    if (topScene) {
                        this._doCloseScene(topScene);
                    }
                    this._doOpenScene(scene, args);
                })
                .catch((e) => {
                    console.error("todo");
                });
        }
    }

    closeTo(id: number) {
        const descriptor = this._checkDescriptor(id);
        if (descriptor) {
            const root = Laya.Scene.root;
            for (let i = root.numChildren - 1; i >= 0; i--) {
                const scene = root.getChildAt(i);
                if (scene instanceof Laya.Scene) {
                    this._doCloseScene(scene);
                    if (scene.url === descriptor.url) {
                        break;
                    }
                }
            }
            this._activeScene(this.top, true);
        }
    }

    closeTop() {
        this.top?.close();
    }

    show(id: number, args?: any) {
        const descriptor = this._checkDescriptor(id);
        if (descriptor) {
            Laya.Dialog.open(descriptor.url, false, args);
        }
    }

    alert(args: UIAlertArgs): void;
    alert(title: string, message: string, yes: Callback, no?: Callback): void;
    alert(titleOrArgs: string | UIAlertArgs, message?: string, yes?: Callback, no?: Callback) {
        if (typeof titleOrArgs == "string") {
            this.show(UIALERT_ID, {
                title: titleOrArgs,
                content: message,
                yes: yes,
                no: no,
            } as UIAlertArgs);
        } else {
            this.show(UIALERT_ID, titleOrArgs);
        }
    }

    toast(args: UIAlertArgs): void;
    toast(message: string, duration?: number, x?: number, y?: number): void;
    toast(messageOrArgs: string | UIAlertArgs, duration?: number, x?: number, y?: number) {
        if (typeof messageOrArgs == "string") {
            this.show(UITOAST_ID, {
                title: messageOrArgs,
                content: messageOrArgs,
                duration: duration,
                x: x,
                y: y,
            } as UIToastArgs);
        } else {
            this.show(UITOAST_ID, messageOrArgs);
        }
    }
}
