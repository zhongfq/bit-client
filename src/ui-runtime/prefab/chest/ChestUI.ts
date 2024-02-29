const { regClass } = Laya;
import { ChestMediator } from "../../../system/chest/chest-mediator";
import { ChestUIBase } from "./ChestUI.generated";

@regClass()
export class ChestUI extends ChestUIBase {
    override set visible(val: boolean) {
        super.visible = val;
        if (val) {
            this.onOpen();
        }
    }

    onOpen() {
        this.spineHero.play("idle", true);
        this.spineShest.play("chest2_down", false);
        this.getComponent(ChestMediator).initInfo();
    }
}
