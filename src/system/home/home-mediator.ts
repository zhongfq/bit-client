import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { StringUtil } from "../../core/utils/string-util";
import { ui } from "../../misc/ui";
import { HomeUI } from "../../ui-runtime/scene/HomeUI";

const { regClass, property } = Laya;
import Browser = Laya.Browser;
import Render = Laya.Render;
import SpriteUtils = Laya.SpriteUtils;

@regClass()
export class MainMediator extends Mediator {
    owner!: HomeUI;
    iframeElement: any;
    divElement: any;
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this.initBtn();
    }

    onKeyDown(evt: Laya.Event): void {
        if (evt.ctrlKey && evt.keyCode == Laya.Keyboard.B) {
            app.ui.show(ui.GM);
        }
    }
    initBtn() {
        this.owner.btnBag.on(Laya.Event.CLICK, () => {
            app.ui.show(ui.BAG);
        });
        this.owner.btnTask.on(Laya.Event.CLICK, () => {
            app.ui.show(ui.TASK);
        });
        this.owner.btnMail.on(Laya.Event.CLICK, () => {
            app.ui.show(ui.MAIL);
        });
        this.owner.btnShop.on(Laya.Event.CLICK, () => {
            app.service.shop.load({ shopId: 1 });
            app.ui.show(ui.SHOP);
        });
        this.owner.btnWorld.on(Laya.Event.CLICK, () => {
            app.ui.show(ui.ALLIANCE);
        });
    }
}
