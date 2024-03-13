import { Callback } from "../../../core/dispatcher";
import { ChestHeroUIBase } from "./ChestHeroUI.generated";

@Laya.regClass()
export class ChestHeroUI extends ChestHeroUIBase {
    private closeBack!: Callback;

    public override onOpened(param: any): void {
        if (param.closeBack) {
            this.closeBack = param.closeBack;
        }
    }

    public override onClosed(type?: string | undefined): void {
        if (this.closeBack && this.listItem.selectedItem.imgLock) {
            this.closeBack(this.listItem.selectedItem.heroVo);
        }
    }
}
