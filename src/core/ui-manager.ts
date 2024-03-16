import { Callback } from "./dispatcher";
import { Mediator } from "./ui-mediator";

import "./laya";

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
    capture?: boolean;
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

    public register(descriptor: UIDescriptor) {
        this._descriptors[descriptor.id] = descriptor;
    }

    public get top() {
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

            const scene3D: Laya.Scene3D | null = scene.scene3D;
            if (scene3D) {
                if (scene3D.active !== active) {
                    scene3D.active = active;
                }
                if (scene3D.visible !== active) {
                    scene3D.visible = active;
                }
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

        if (!scene.destroyed) {
            scene.autoDestroyAtClosed = true;
            scene.close();
        }

        //TODO 切换场景会导致资源消失
        // Laya.Scene.gc();
    }

    public open(id: number, args?: any) {
        const descriptor = this._checkDescriptor(id);
        if (descriptor) {
            console.log("open scene:", descriptor.url);
            Laya.Scene.load(descriptor.url)
                .then((scene) => {
                    this._activeScene(this.top, false);
                    this._doOpenScene(scene, args);
                })
                .catch((e) => {
                    console.error(e);
                });
        }
    }

    public replace(id: number, args?: any) {
        const descriptor = this._checkDescriptor(id);
        if (descriptor) {
            console.log("replace scene:", descriptor.url);
            Laya.Scene.load(descriptor.url)
                .then((scene) => {
                    const topScene = this.top;
                    if (topScene) {
                        this._doCloseScene(topScene);
                    }
                    this._doOpenScene(scene, args);
                })
                .catch((e) => {
                    console.error(e);
                });
        }
    }

    public closeTo(id: number) {
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

    public closeTop() {
        this.top?.close();
    }

    public async show(id: number, args?: any) {
        const descriptor = this._checkDescriptor(id);
        if (descriptor) {
            const dialog = await Laya.Dialog.open(descriptor.url, false, args);
            if (!(dialog instanceof Laya.Dialog)) {
                console.error(`show error: ${descriptor.url} is not a dialog`);
            }
        }
    }

    public alert(args: UIAlertArgs): void;

    public alert(title: string, message: string, yes: Callback, no?: Callback): void;

    public alert(
        titleOrArgs: string | UIAlertArgs,
        message?: string,
        yes?: Callback,
        no?: Callback
    ) {
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

    public toast(args: UIAlertArgs): void;

    public toast(message: string, duration?: number, x?: number, y?: number): void;

    public toast(messageOrArgs: string | UIAlertArgs, duration?: number, x?: number, y?: number) {
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
