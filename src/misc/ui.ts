import { app } from "../app";
import { UIALERT_ID, UIAlertArgs, UITOAST_ID, UIToastArgs } from "../core/ui-manager";
import { AlertMediator } from "./alert";

export interface AlertArgs extends UIAlertArgs {}
export interface ToastArgs extends UIToastArgs {}

export class ui {
    static readonly alert = UIALERT_ID;
    static readonly toast = UITOAST_ID;

    static readonly loading = 0;
    static readonly login = 1;
    static readonly home = 2;
    static readonly chest = 3;

    static readonly test1 = 4;
    static readonly test2 = 5;
    static readonly bagDialog = 6;

    static register() {
        app.ui.register({
            id: ui.alert,
            url: "resources/prefab/misc/alert.lh",
            blockInput: true,
        });
        app.ui.register({
            id: ui.toast,
            url: "resources/prefab/misc/toast.lh",
        });
        app.ui.register({
            id: ui.login,
            url: "scenes/login.ls",
        });
        app.ui.register({
            id: ui.bagDialog,
            url: "resources/prefab/bag/bag-dialog.lh",
            blockInput: true,
        });
    }
}
