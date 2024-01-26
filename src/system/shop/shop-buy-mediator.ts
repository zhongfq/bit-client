import { Mediator } from "../../core/ui-mediator";
import { IconUI } from "../../ui-runtime/prefab/icon/IconUI";
import { ItemVo } from "../../misc/vo/goods/item-vo";
import { ShopBuyUI } from "../../ui-runtime/prefab/shop/ShopBuyUI";
import { app } from "../../app";

const { regClass, property } = Laya;

@regClass()
export class ShopBuyMediator extends Mediator {
    owner!: ShopBuyUI;

    onAwake(): void {
        this.owner.btnClose.on(Laya.Event.CLICK, this.owner, this.owner.close);

        this.owner.slNum.changeHandler = new Laya.Handler(this, this.onChange);
        this.owner.addBtn.on(Laya.Event.CLICK, this, this.onAddBtn);
        this.owner.minusBtn.on(Laya.Event.CLICK, this, this.onMinusBtn);
        this.owner.btnSynthesis.on(Laya.Event.CLICK, () => {
            app.service.shop.requestBuy({ shopId: 1, shopItemId: 2, num: this.owner.slNum.value });
        });
        let vo = new ItemVo();
        vo.initByRefId(this.owner.openData.refData.items[0].id);
        vo.goodsNumber = this.owner.openData.refData.items[0].count;
        this.owner.iconNodeTop.updateGoods(vo);
    }

    onAddBtn() {
        this.owner.slNum.value++;
    }
    onMinusBtn() {
        this.owner.slNum.value--;
    }
    onChange(value: number) {
        this.owner.selectNumber.text = value.toString();
    }
}
