import { app } from "../../../app";
import { Mediator } from "../../../core/ui-mediator";
import { ui } from "../../../misc/ui";
import { PveUI } from "../../../ui-runtime/scene/PveUI";

@Laya.regClass()
export class PveMediator extends Mediator {
    public declare owner: PveUI;

    public override onAwake() {
        this.owner.btnBack.on(Laya.Event.CLICK, () => {
            app.ui.replace(ui.HOME_SCENE);
        });
    }

    public override onKeyDown(evt: Laya.Event): void {
        if (evt.ctrlKey && evt.keyCode == Laya.Keyboard.B) {
            app.ui.show(ui.GM);
        }
    }
}
