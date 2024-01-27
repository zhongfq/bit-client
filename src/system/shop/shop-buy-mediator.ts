import { Mediator } from "../../core/ui-mediator";
import { IconUI } from "../../ui-runtime/prefab/icon/IconUI";
import { ItemVo } from "../../misc/vo/goods/item-vo";
import { ShopBuyUI } from "../../ui-runtime/prefab/shop/ShopBuyUI";
import { app } from "../../app";
import { VoUtil } from "../../misc/vo-util";
import { StringUtil } from "../../core/utils/string-util";

const { regClass, property } = Laya;

@regClass()
export class ShopBuyMediator extends Mediator {
    owner!: ShopBuyUI;

    onAwake(): void {
        this.initEvent();
        this.initInfo();
    }
    initInfo() {
        let vo = app.service.bag.itemBag.createByRef(this.owner.openData.refData.items[0].id);
        vo.goodsNumber = this.owner.openData.refData.items[0].count;
        this.owner.icon.updateGoods(vo);
        this.owner.labelName.text = vo.name;
        this.owner.labelItemCurNum.text = `当前拥有:${VoUtil.GetNumber(
            vo.refId,
            app.service.bag.itemBag
        )}`;

        this.owner.slider.min = 1;
        this.owner.slider.max = 50;
        this.owner.slider.value = 1;

        // this.owner.labelNum.text = StringUtil;
    }
    initEvent() {
        this.owner.btnClose.on(Laya.Event.CLICK, this.owner, this.owner.close);
        this.owner.slider.onSliderChange = () => {
            this.owner.icon.itemNumber = (
                this.owner.slider.value * this.owner.openData.refData.items[0].count
            ).toString();
        };
        this.owner.btnSynthesis.on(Laya.Event.CLICK, () => {
            // app.service.shop.requestBuy({ shopId: 1, shopItemId: 2, num: this.owner.slider.value });
        });
    }
}
