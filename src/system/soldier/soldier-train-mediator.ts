import { Mediator } from "../../core/ui-mediator";
import { SoldierTrainUI } from "../../ui-runtime/prefab/soldier/SoldierTrainUI";

const { regClass, property } = Laya;

@regClass()
export class SoldierTrainMediator extends Mediator {
    public declare owner: SoldierTrainUI;

    public override onAwake(): void {
        this.initUIEvent();
        this.initInfo();
    }

    //初始化UI
    private initInfo() {}

    //初始化UI事件监听
    private initUIEvent() {}
}
