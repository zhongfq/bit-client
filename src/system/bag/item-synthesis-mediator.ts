import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ItemSynthesisUI } from "../../ui-runtime/prefab/bag/ItemSynthesisUI";

const { regClass, property } = Laya;

@regClass()
export class ItemSynthesisMediator extends Mediator {
    public declare owner: ItemSynthesisUI;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    public override onAwake(): void {
        this.initEvent();
        this.initInfo();
    }

    public initEvent() {
        this.owner.btnClose.on(Laya.Event.CLICK, this, this.onCloseBtn);
        this.owner.btnUse.on(Laya.Event.CLICK, this, this.onSynthesisBtn);
    }

    public initInfo() {
        // this.owner.iconTop.updateGoods();
    }

    public onSynthesisBtn() {
        // app.service.bag.requestCompositeItem({
        //     itemId: this.owner.data.vo.id,
        //     num: this.owner.slNum.value,
        // });
    }

    public onCloseBtn() {
        this.owner.close();
    }
}
