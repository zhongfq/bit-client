import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ItemSynthesisUI } from "../../ui-runtime/prefab/bag/ItemSynthesisUI";

const { regClass, property } = Laya;

@regClass()
export class ItemSynthesisMediator extends Mediator {
    declare owner: ItemSynthesisUI;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    override onAwake(): void {
        this.initEvent();
        this.initInfo();
    }

    initEvent() {
        this.owner.btnClose.on(Laya.Event.CLICK, this, this.onCloseBtn);
        this.owner.btnUse.on(Laya.Event.CLICK, this, this.onSynthesisBtn);
    }

    initInfo() {
        // this.owner.iconTop.updateGoods();
    }

    onSynthesisBtn() {
        // app.service.bag.requestCompositeItem({
        //     itemId: this.owner.data.vo.id,
        //     num: this.owner.slNum.value,
        // });
    }

    onCloseBtn() {
        this.owner.close();
    }
}
