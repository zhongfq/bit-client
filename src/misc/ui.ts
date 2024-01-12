import { app } from "../app";
import { UIALERT_ID, UIAlertArgs, UITOAST_ID, UIToastArgs } from "../core/ui-manager";
import { AlertMediator } from "./alert";

export interface AlertArgs extends UIAlertArgs {}
export interface ToastArgs extends UIToastArgs {}

export class ui {
    static readonly alert = UIALERT_ID;
    static readonly toast = UITOAST_ID;

    static readonly app = 0;
    static readonly loading = 1;
    static readonly login = 2;
    static readonly home = 3;
    static readonly chest = 4;

    static readonly test1 = 5;
    static readonly test2 = 6;
    static readonly bagDialog = 7;
    static readonly itemTipsDialog = 8;
    static readonly itemSynthesisDialog = 9;

    static register() {
        app.ui.register({
            id: ui.app,
            url: "scenes/app.ls",
        });
        app.ui.register({
            id: ui.alert,
            url: "resources/prefab/misc/alert.lh",
        });
        app.ui.register({
            id: ui.toast,
            url: "resources/prefab/misc/toast.lh",
        });
        app.ui.register({
            id: ui.login,
            autoClose: true,
            url: "scenes/login.ls",
        });
        app.ui.register({
            id: ui.bagDialog,
            url: "resources/prefab/bag/bag-dialog.lh",
            blockInput: true,
        });
        app.ui.register({
            id: ui.itemTipsDialog,
            url: "resources/prefab/bag/item-tips-dialog.lh",
            blockInput: false,
        });
        app.ui.register({
            id: ui.itemSynthesisDialog,
            url: "resources/prefab/bag/item-synthesis-dialog.lh",
            blockInput: true,
        });
    }
}
