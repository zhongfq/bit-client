import { Mediator } from "../../core/ui-mediator";
import { SoldierUI } from "../../ui-runtime/prefab/soldier/SoldierUI";
const { regClass, property } = Laya;
@regClass()
export class SoldierMediator extends Mediator {
    public declare owner: SoldierUI;

    public override onAwake(): void {
        this.initUIEvent();
        this.initInfo();
    }

    //初始化UI
    private initInfo() {}

    //初始化UI事件监听
    private initUIEvent() {
        this.owner.tab.selectHandler = new Laya.Handler(this, (index: number) => {
            this.owner.viewStack.selectedIndex = index;
        });
    }
}
