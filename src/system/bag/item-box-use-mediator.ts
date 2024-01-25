import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ItemBoxUseUI } from "../../ui-runtime/prefab/bag/ItemBoxUseUI";
import { IconUI } from "../../ui-runtime/prefab/icon/IconUI";
import { DataUtil } from "../data/data-util";

const { regClass, property } = Laya;

@regClass()
export class ItemBoxUseMediator extends Mediator {
    owner!: ItemBoxUseUI;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this.owner.slider.changeHandler = new Laya.Handler(this, this.onChange);
        this.owner.addBtn.on(Laya.Event.CLICK, this, this.onAddBtn);
        this.owner.closeBtn.on(Laya.Event.CLICK, this, this.onCloseBtn);
        this.owner.synthesisBtn.on(Laya.Event.CLICK, this, this.onSynthesisBtn);
        this.owner.minusBtn.on(Laya.Event.CLICK, this, this.onMinusBtn);
        this.owner.itemDesc.scrollRect = this.owner.itemDesc.getBounds()
        this.owner.slider.min = 1;
        this.owner.slider.max = this.owner.data.goodsNumber;
        this.owner.slider.value = 1;
        this.owner.iconNodeTop.updateGoods(this.owner.data);
        let tlData = [];

        for (let data of this.owner.data.ref.args) {
            let vo = app.service.bag.itemBag.createByRef(data[0]);
            vo.goodsNumber = data[1];
            tlData.push(vo);
        }
        this.owner.itemList.renderHandler = new Laya.Handler(this, this.updateItem);
        this.owner.itemList.array = tlData;
    }
    updateItem(cell: IconUI, index: number) {
        cell.updateGoods(cell.dataSource);
    }
    onAddBtn() {
        this.owner.slider.value++;
    }
    onMinusBtn() {
        this.owner.slider.value--;
    }
    onSynthesisBtn() {
        app.service.bag.requestUseItem({
            itemId: this.owner.data.refId,
            num: this.owner.slider.value,
        });
    }
    onCloseBtn() {
        this.owner.close();
    }
    onChange(value: number) {
        this.owner.selectNumber.text = value.toString();
    }
}
