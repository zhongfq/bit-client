import { app } from "../app";
import { UIALERT_ID, UIAlertArgs, UITOAST_ID, UIToastArgs } from "../core/ui-manager";
import { AlertMediator } from "./alert";

export interface AlertArgs extends UIAlertArgs {}
export interface ToastArgs extends UIToastArgs {}

export const enum ui {
    toast = -2,
    alert = -1,

    app,
    loading,
    login,
    home,
    chest,
    world,

    test1,
    test2,
    bagDialog,
    itemTipsDialog,
    itemSynthesisDialog,
    loginServerDialog,
    mainScene,
    bagBoxUseDialog,
    taskDialog,
    mailDialog,
    mailInfoDialog,
    gmDialog,
}

export const registerUI = () => {
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

    app.ui.register({
        id: ui.loginServerDialog,
        url: "resources/prefab/login/login-server-dialog.lh",
        blockInput: true,
    });
    app.ui.register({
        id: ui.mainScene,
        autoClose: true,
        url: "scenes/main.ls",
        blockInput: true,
    });
    app.ui.register({
        id: ui.bagBoxUseDialog,
        autoClose: false,
        url: "resources/prefab/bag/item-box-use-dialog.lh",
        blockInput: true,
    });
    app.ui.register({
        id: ui.taskDialog,
        autoClose: false,
        url: "resources/prefab/task/task-dialog.lh",
        blockInput: true,
    });

    app.ui.register({
        id: ui.mailDialog,
        autoClose: false,
        url: "resources/prefab/mail/mail-dialog.lh",
        blockInput: true,
    });

    app.ui.register({
        id: ui.mailInfoDialog,
        autoClose: false,
        url: "resources/prefab/mail/mail-info-dialog.lh",
        blockInput: true,
    });

    app.ui.register({
        id: ui.gmDialog,
        url: "resources/prefab/gm/gm-dialog.lh",
        blockInput: true,
    });
};
