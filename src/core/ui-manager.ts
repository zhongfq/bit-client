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
    autoDestroy?: boolean;
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

    private _checkDescriptor(id: number | string) {
        if (typeof id === "number") {
            const descriptor = this._descriptors[id];
            if (descriptor) {
                return descriptor;
            }
        } else {
            for (const k in this._descriptors) {
                const descriptor = this._descriptors[k];
                if (descriptor.url === id) {
                    return descriptor;
                }
            }
        }
        console.log(`ui with id '${id}' is not registered`);
        return null;
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
            if (scene.active !== active) {
                scene.active = active;
            }
            if (scene.visible !== active) {
                scene.visible = active;
            }
        }
    }

    private _doOpenScene(scene: Laya.Scene, args?: any) {
        if (scene instanceof Laya.Dialog || !(scene instanceof Laya.Scene)) {
            console.error(`open scene: ${scene.url} is not a scene`);
        }
        scene.open(false, args);
        scene.once(Laya.Event.REMOVED, this, () => {
            this._doCloseScene(scene);
            this._activeScene(this.top, true);
        });
    }

    private _doCloseScene(scene: Laya.Scene) {
        scene.offAllCaller(this);

        scene.removeSelf();

        const descriptor = this._checkDescriptor(scene.url);
        if (descriptor?.autoClose) {
            scene.destroy(true);
        }

        Laya.Scene.gc();
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
            let index = -1;
            for (let i = root.numChildren - 1; i >= 0; i--) {
                const scene = root.getChildAt(i);
                if (scene instanceof Laya.Scene) {
                    if (scene.url === descriptor.url) {
                        index = i;
                        break;
                    }
                }
            }
            if (index >= 0) {
                for (let i = index + 1; i < root.numChildren; i++) {
                    const scene = root.getChildAt(i);
                    if (scene instanceof Laya.Scene) {
                        this._doCloseScene(scene);
                    }
                }
            }
            this._activeScene(this.top, true);
        }
    }

    closeTop() {
        this.top?.close();
    }

    async show(id: number, args?: any) {
        const descriptor = this._checkDescriptor(id);
        if (descriptor) {
            const dialog = Laya.Dialog.open(descriptor.url, false, args);
            if (!(dialog instanceof Laya.Dialog)) {
                console.error(`show error: ${descriptor.url} is not a dialog`);
            }
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
