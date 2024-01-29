import { app } from "../app";
import { UIALERT_ID, UIAlertArgs, UITOAST_ID, UIToastArgs } from "../core/ui-manager";
import { AlertMediator } from "./alert";

export interface AlertArgs extends UIAlertArgs {}
export interface ToastArgs extends UIToastArgs {}

export const enum ui {
    TOAST = -2,
    ALERT = -1,

    app,
    LOADING,
    LOGIN_SCENE,
    HOME_SCENE,
    WORLD_SCENE,

    TEST1,
    TEST2,

    BAG,
    BAG_BOX_USE,

    ITEM_TIPS,
    ITEM_SYNTHESIS,

    LOGIN_SERVER_LIST,

    TASK,

    MAIL,
    MAIL_INFO,

    SHOP,
    SHOP_BUY,

    ALLIANCE,

    GM,
}

export const registerUI = () => {
    app.ui.register({
        id: ui.app,
        url: "scenes/app.ls",
    });
    app.ui.register({
        id: ui.ALERT,
        url: "resources/prefab/misc/alert.lh",
    });
    app.ui.register({
        id: ui.TOAST,
        url: "resources/prefab/misc/toast.lh",
    });
    app.ui.register({
        id: ui.LOGIN_SCENE,
        autoClose: true,
        url: "scenes/login.ls",
    });
    app.ui.register({
        id: ui.WORLD_SCENE,
        url: "scenes/world.ls",
    });
    app.ui.register({
        id: ui.BAG,
        url: "resources/prefab/bag/bag.lh",
        blockInput: true,
    });
    app.ui.register({
        id: ui.ITEM_TIPS,
        url: "resources/prefab/bag/item-tips.lh",
        blockInput: false,
    });
    app.ui.register({
        id: ui.ITEM_SYNTHESIS,
        url: "resources/prefab/bag/item-synthesis.lh",
        blockInput: true,
    });

    app.ui.register({
        id: ui.LOGIN_SERVER_LIST,
        url: "resources/prefab/login/login-server-list.lh",
        blockInput: true,
    });
    app.ui.register({
        id: ui.HOME_SCENE,
        autoClose: true,
        url: "scenes/home.ls",
        blockInput: true,
    });
    app.ui.register({
        id: ui.BAG_BOX_USE,
        autoClose: false,
        url: "resources/prefab/bag/item-box-use.lh",
        blockInput: true,
    });
    app.ui.register({
        id: ui.TASK,
        autoClose: false,
        url: "resources/prefab/task/task.lh",
        blockInput: true,
    });

    app.ui.register({
        id: ui.MAIL,
        autoClose: false,
        url: "resources/prefab/mail/mail.lh",
        blockInput: true,
    });

    app.ui.register({
        id: ui.MAIL_INFO,
        autoClose: false,
        url: "resources/prefab/mail/mail-info.lh",
        blockInput: true,
    });

    app.ui.register({
        id: ui.SHOP,
        autoClose: false,
        url: "resources/prefab/shop/shop.lh",
        blockInput: true,
    });

    app.ui.register({
        id: ui.SHOP_BUY,
        autoClose: false,
        url: "resources/prefab/shop/shop-buy.lh",
        blockInput: true,
    });

    app.ui.register({
        id: ui.ALLIANCE,
        autoClose: false,
        url: "resources/prefab/alliance/alliance.lh",
        blockInput: true,
    });

    app.ui.register({
        id: ui.GM,
        url: "resources/prefab/gm/gm.lh",
        blockInput: true,
    });
};
