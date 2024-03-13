import { Mediator } from "../../core/ui-mediator";
import { SoldierSoldierUI } from "../../ui-runtime/prefab/soldier/SoldierSoldierUI";
import { SoldierUI } from "../../ui-runtime/prefab/soldier/SoldierUI";

const { regClass, property } = Laya;

@regClass()
export class SoldierSoldierMediator extends Mediator {
    public declare owner: SoldierSoldierUI;

    public override onAwake(): void {
        this.initUIEvent();
        this.initInfo();
    }

    //初始化UI
    private initInfo() {}

    //初始化UI事件监听
    private initUIEvent() {}
}
