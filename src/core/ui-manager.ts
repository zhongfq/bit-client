import { ui } from "../misc/ui";
import { Callback, Constructor } from "./dispatcher";
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
    prefab: string;
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
    private _uiStack: UIRuntimeInfo[] = [];

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

    openDialog(id: number, args?: any) {
        const descriptor = this._checkDescriptor(id);
        if (descriptor) {
            Laya.Dialog.open(descriptor.prefab, false, args);
        }
    }

    alert(args: UIAlertArgs): void;
    alert(title: string, message: string, yes: Callback, no?: Callback): void;
    alert(titleOrArgs: string | UIAlertArgs, message?: string, yes?: Callback, no?: Callback) {
        if (typeof titleOrArgs == "string") {
            this.openDialog(UIALERT_ID, {
                title: titleOrArgs,
                content: message,
                yes: yes,
                no: no,
            } as UIAlertArgs);
        } else {
            this.openDialog(UIALERT_ID, titleOrArgs);
        }
    }

    toast(args: UIAlertArgs): void;
    toast(message: string, duration?: number, x?: number, y?: number): void;
    toast(messageOrArgs: string | UIAlertArgs, duration?: number, x?: number, y?: number) {
        if (typeof messageOrArgs == "string") {
            this.openDialog(UITOAST_ID, {
                title: messageOrArgs,
                content: messageOrArgs,
                duration: duration,
                x: x,
                y: y,
            } as UIToastArgs);
        } else {
            this.openDialog(UITOAST_ID, messageOrArgs);
        }
    }
}
