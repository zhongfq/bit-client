import { app } from "../../../app";
import { Mediator } from "../../../core/ui-mediator";
import { ui } from "../../../misc/ui";
import { PvpUI } from "../../../ui-runtime/scene/PvpUI";

@Laya.regClass()
export class PvpMediator extends Mediator {
    declare owner: PvpUI;

    override onAwake() {
        this.owner.btnBack.on(Laya.Event.CLICK, () => {
            app.ui.replace(ui.HOME_SCENE);
        });
    }

    override onKeyDown(evt: Laya.Event): void {
        if (evt.ctrlKey && evt.keyCode == Laya.Keyboard.B) {
            app.ui.show(ui.GM);
        }
    }
}
