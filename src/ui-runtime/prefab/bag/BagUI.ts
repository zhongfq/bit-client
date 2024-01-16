const { regClass } = Laya;
import { app } from "../../../app";
import { IconUI } from "../icon/IconUI";
import { BagUIBase } from "./BagUI.generated";

@regClass()
export class BagUI extends BagUIBase {
    onAwake(): void {
        this.Button.on(Laya.Event.CLICK,()=>{
            this.close()
        })
        this.menuTab.labels = "道具,合成";
        this.menuTab.selectHandler = new Laya.Handler(this,this.onTabSelect);
    }
    private onTabSelect(index:number){
        // this.
    }
    onClosed(type?: string | undefined): void {
        let a = 1
    }
}
