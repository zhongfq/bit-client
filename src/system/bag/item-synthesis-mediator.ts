import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ItemSynthesisUI } from "../../ui-runtime/prefab/bag/ItemSynthesisUI";

const { regClass, property } = Laya;

@regClass()
export class ItemSynthesisMediator extends Mediator {
    declare owner: ItemSynthesisUI;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this.owner.slider.changeHandler = new Laya.Handler(this, this.onChange);
        this.owner.addBtn.on(Laya.Event.CLICK, this, this.onAddBtn);
        this.owner.closeBtn.on(Laya.Event.CLICK, this, this.onCloseBtn);
        this.owner.synthesisBtn.on(Laya.Event.CLICK, this, this.onSynthesisBtn);
        this.owner.minusBtn.on(Laya.Event.CLICK, this, this.onMinusBtn);

        this.owner.slider.min = 0;
        this.owner.slider.max = 100;
        this.owner.slider.value = 110;
        this.owner.iconNodeTop.updateGoods();
    }
    onAddBtn() {
        this.owner.slider.value++;
    }
    onMinusBtn() {
        this.owner.slider.value--;
    }
    onSynthesisBtn() {
        app.service.bag.requestCompositeItem({
            itemId: this.owner.data.vo.id,
            num: this.owner.slider.value,
        });
    }
    onCloseBtn() {
        this.owner.close();
    }
    onChange(value: number) {
        this.owner.selectNumber.text = value.toString();
    }
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}
