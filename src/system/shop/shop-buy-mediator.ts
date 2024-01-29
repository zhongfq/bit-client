import { Mediator } from "../../core/ui-mediator";
import { IconUI } from "../../ui-runtime/prefab/icon/IconUI";
import { ItemVo } from "../../misc/vo/goods/item-vo";
import { ShopBuyUI } from "../../ui-runtime/prefab/shop/ShopBuyUI";
import { app } from "../../app";
import { VoUtil } from "../../misc/vo-util";
import { StringUtil } from "../../core/utils/string-util";
import { GoodsVo } from "../../misc/vo/goods/goods-vo";

const { regClass, property } = Laya;

@regClass()
export class ShopBuyMediator extends Mediator {
    owner!: ShopBuyUI;
    itemVo?: GoodsVo | null;
    costVo?: GoodsVo | null;
    onAwake(): void {
        this.initEvent();
        this.initInfo();
        this.itemVo = VoUtil.createVo(this.owner.openData.shopItem.refData.items[0].id);
        this.costVo = this.owner.openData.shopItem.refData.cost
            ? VoUtil.createVo(this.owner.openData.shopItem.refData.cost[0].id)
            : null;
    }
    initInfo() {
        if (this.itemVo) {
            this.itemVo.goodsNumber = this.owner.openData.shopItem.refData.items[0].count;
            this.owner.icon.updateGoods(this.itemVo);
            this.owner.labelName.text = this.itemVo.name;
            this.owner.labelItemCurNum.text = `当前拥有:${VoUtil.getNumber(this.itemVo.refId)}`;
        }
        // if (this.costVo) {
        // }
        this.owner.slider.min = 1;

        this.owner.slider.value = 1;
        let max = app.service.shop.getShopItemLimit(this.costVo?.ref);
        // if(max)
        // this.owner.slider.max = 50;
        // if (this.owner.openData.shopItem.refData.cost) {
        //     this.owner.labelNum.text = StringUtil.str2UBB(
        //         "{0} {1}/{2}",
        //         { image: costVo.iconUrl, width: 20, height: 20 },
        //         {
        //             text: `{voNum=${VoUtil.getNumber(
        //                 this.owner.openData.shopItem.refData.cost[0].id
        //             )}}`,
        //         },
        //         { text: `{seleNum=${this.owner.openData.shopItem.refData.cost[0].count}}` }
        //     );
        // }
    }
    initEvent() {
        this.owner.btnClose.on(Laya.Event.CLICK, this.owner, this.owner.close);
        this.owner.slider.onSliderChange = () => {
            this.owner.icon.itemNumber = (
                this.owner.slider.value * this.owner.openData.shopItem.refData.items[0].count
            ).toString();
            if (this.owner.openData.shopItem.refData.cost) {
                this.owner.labelNum.setVar(
                    "seleNum",
                    this.owner.slider.value * this.owner.openData.shopItem.refData.cost[0].count
                );
            }
        };
        this.owner.btnSynthesis.on(Laya.Event.CLICK, () => {
            app.service.shop.requestBuy({
                shopId: this.owner.openData.shopId,
                shopItemId: this.owner.openData.shopItem.refData.id,
                num: this.owner.slider.value,
            });
        });
    }
}
