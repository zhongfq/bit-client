const { regClass } = Laya;
import { ChestUIBase } from "./ChestUI.generated";

@regClass()
export class ChestUI extends ChestUIBase {
    override onAwake(): void {
        this.spineHero.play("idle", true);
        this.spineShest.play("chest2_down", false);
    }
}
