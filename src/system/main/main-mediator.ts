import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ui } from "../../misc/ui";
import { MainSceneUI } from "../../ui-runtime/scene/main-scene/MainSceneUI";

const { regClass, property } = Laya;

@regClass()
export class MainMediator extends Mediator {
    owner!: MainSceneUI;
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this.initBtn();
    }

    onKeyDown(evt: Laya.Event): void {
        if (evt.ctrlKey && evt.keyCode == Laya.Keyboard.B) {
            app.ui.show(ui.gmDialog);
        }
    }
    initBtn() {
        this.owner.btnBag.on(Laya.Event.CLICK, () => {
            app.ui.show(ui.bagDialog);
        });
        this.owner.btnTask.on(Laya.Event.CLICK, () => {
            app.ui.show(ui.taskDialog);
        });
        this.owner.btnMail.on(Laya.Event.CLICK, () => {
            app.ui.show(ui.mailDialog);
        });
        this.owner.btnShop.on(Laya.Event.CLICK, () => {
            app.ui.show(ui.mailDialog);
        });
    }
}
