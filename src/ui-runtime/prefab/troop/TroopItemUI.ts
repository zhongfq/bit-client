const { regClass } = Laya;
import { app } from "../../../app";
import { ui } from "../../../misc/ui";
import { TroopItemUIBase } from "./TroopItemUI.generated";

@regClass()
export class TroopItemUI extends TroopItemUIBase {
    public override onAwake(): void {
        this.VBox.on(Laya.Event.CLICK, (event: Laya.Event) => {
            if (this.selectBox.visible) {
                if (event.target) {
                    switch (event.target.name) {
                        case "btn1":
                            app.ui.show(ui.TROOP_PENDANT, { index: 1 });
                            break;
                        case "btn2":
                            app.ui.show(ui.TROOP_PENDANT, { index: 2 });
                            break;
                        case "btn3":
                            app.ui.show(ui.TROOP_PENDANT, { index: 3 });
                            break;
                        case "btn4":
                            app.ui.show(ui.TROOP_PENDANT, { index: 4 });
                            break;
                    }
                }
            }
        });
    }
}
