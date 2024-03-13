const { regClass } = Laya;
import { app } from "../../../app";
import { IconUI } from "../icon/IconUI";
import { BagUIBase } from "./BagUI.generated";

@regClass()
export class BagUI extends BagUIBase {
    public override onAwake(): void {
        this.btnClose.on(Laya.Event.CLICK, () => {
            this.close();
        });
        this.tabMenu.labels = "道具,合成";
        this.tabMenu.selectHandler = new Laya.Handler(this, this.onTabSelect);
    }

    private onTabSelect(index: number) {
        // this.
    }
}
