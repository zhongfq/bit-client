import { Mediator } from "../../core/ui-mediator";
import { SoldierPendantUI } from "../../ui-runtime/prefab/soldier/SoldierPendantUI";
import { SoldierUI } from "../../ui-runtime/prefab/soldier/SoldierUI";

const { regClass, property } = Laya;

@regClass()
export class SoldierPendantMediator extends Mediator {
    public declare owner: SoldierPendantUI;

    public override onAwake(): void {
        this.initUIEvent();
        this.initInfo();
    }

    //初始化UI
    private initInfo() {}

    private initUIEvent() {}
    //初始化UI事件监听
}
