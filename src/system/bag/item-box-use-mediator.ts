import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ItemBoxUseUI } from "../../ui-runtime/prefab/bag/ItemBoxUseUI";
import { IconUI } from "../../ui-runtime/prefab/icon/IconUI";

const { regClass, property } = Laya;

@regClass()
export class ItemBoxUseMediator extends Mediator {
    owner!: ItemBoxUseUI;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this.owner.slNum.changeHandler = new Laya.Handler(this, this.onChange);
        this.owner.addBtn.on(Laya.Event.CLICK, this, this.onAddBtn);
        this.owner.btnClose.on(Laya.Event.CLICK, this, this.onCloseBtn);
        this.owner.btnSynthesis.on(Laya.Event.CLICK, this, this.onSynthesisBtn);
        this.owner.minusBtn.on(Laya.Event.CLICK, this, this.onMinusBtn);
        this.owner.slNum.min = 1;
        this.owner.slNum.max = this.owner.data.goodsNumber;
        this.owner.slNum.value = 1;
        this.owner.iconNodeTop.updateGoods(this.owner.data);
        let tlData = [];

        for (let data of this.owner.data.ref.args) {
            let vo = app.service.bag.itemBag.createByRef(data[0]);
            vo.goodsNumber = data[1];
            tlData.push(vo);
        }
        this.owner.listItem.renderHandler = new Laya.Handler(this, this.updateItem);
        this.owner.listItem.array = tlData;
    }
    updateItem(cell: IconUI, index: number) {
        cell.updateGoods(cell.dataSource);
    }
    onAddBtn() {
        this.owner.slNum.value++;
    }
    onMinusBtn() {
        this.owner.slNum.value--;
    }
    onSynthesisBtn() {
        app.service.bag.requestUseItem({
            itemId: this.owner.data.refId,
            num: this.owner.slNum.value,
        });
    }
    onCloseBtn() {
        this.owner.close();
    }
    onChange(value: number) {
        this.owner.selectNumber.text = value.toString();
    }
}
