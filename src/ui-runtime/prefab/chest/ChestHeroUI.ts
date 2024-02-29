import { Callback } from "../../../core/dispatcher";
import { ChestHeroUIBase } from "./ChestHeroUI.generated";

@Laya.regClass()
export class ChestHeroUI extends ChestHeroUIBase {
    closeBack!: Callback;

    override onOpened(param: any): void {
        if (param.closeBack) {
            this.closeBack = param.closeBack;
        }
    }

    override onClosed(type?: string | undefined): void {
        if (this.closeBack && this.listItem.selectedItem.imgLock) {
            this.closeBack(this.listItem.selectedItem.heroVo);
        }
    }
}
