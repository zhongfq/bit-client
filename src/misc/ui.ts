import { app } from "../app";
import { UIAlertArgs, UIToastArgs } from "../core/ui-manager";

export interface AlertArgs extends UIAlertArgs {}
export interface ToastArgs extends UIToastArgs {}

export enum ui {
    TOAST = -2,
    ALERT = -1,

    APP,
    LOADING,
    LOGIN_SCENE,
    LOADING_SCENE,
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

    CHAT,

    CHEST_HERO,

    GM,
}

export namespace ui {
    export const register = () => {
        app.ui.register({
            id: ui.APP,
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
            id: ui.LOADING_SCENE,
            autoClose: true,
            url: "scenes/loading.ls",
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
            id: ui.CHAT,
            autoClose: false,
            url: "resources/prefab/chat/chat.lh",
            blockInput: true,
        });

        app.ui.register({
            id: ui.CHEST_HERO,
            autoClose: false,
            url: "resources/prefab/chest/chest-hero.lh",
            blockInput: true,
        });

        app.ui.register({
            id: ui.GM,
            url: "resources/prefab/gm/gm.lh",
            blockInput: true,
        });
    };
}
