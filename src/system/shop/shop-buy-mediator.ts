import { Mediator } from "../../core/ui-mediator";
import { ShopBuyUI } from "../../ui-runtime/prefab/shop/ShopBuyUI";
import { app } from "../../app";
import { VoUtil } from "../../misc/vo-util";
import { StringUtil } from "../../core/utils/string-util";
import { GoodsVo } from "../../misc/vo/goods/goods-vo";
import { Reward } from "../../def/table";

const { regClass, property } = Laya;

@regClass()
export class ShopBuyMediator extends Mediator {
    declare owner: ShopBuyUI;

    private itemVo!: GoodsVo; //购买道具
    private costVo!: GoodsVo; //货币道具

    override onAwake(): void {
        this.itemVo = VoUtil.createVo(this.owner.openData.shopItem.refData.items[0].id);
        this.initUIEvent();
        this.initInfo();
    }

    //初始化UI
    initInfo() {
        if (this.itemVo) {
            this.itemVo.goodsNumber = this.owner.openData.shopItem.refData.items[0].count;
            this.owner.icon.updateGoods(this.itemVo);
            this.owner.labelName.text = this.itemVo.name;
            this.owner.labelItemCurNum.text = `当前拥有:${VoUtil.getNumber(this.itemVo.refId)}`;
        }
        this.owner.slider.min = 1;
        this.owner.slider.value = 1;
        const cost = this.owner.openData.shopItem.refData.cost as Reward[];

        this.costVo = VoUtil.createVo(cost[0].id);
        const costBagNum = VoUtil.getNumber(cost[0].id);
        this.owner.slider.max = app.service.shop.getShopItemBuyNum(
            this.owner.openData.shopItem
        ).num;
        this.owner.labelNum.text = StringUtil.str2UBB(
            "{0} {1}/{2}",
            { image: this.costVo.iconUrl, width: 20, height: 20 },
            {
                text: `{voNum=${costBagNum}}`,
            },
            { text: `{seleNum=${cost[0].count}}` }
        );
    }

    //初始化UI事件监听
    initUIEvent() {
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
        this.owner.btnSynthesis.on(Laya.Event.CLICK, this, this.callBuy);
    }

    //请求购买
    async callBuy() {
        app.service.shop
            .requestBuy({
                shopId: this.owner.openData.shopId,
                shopItemId: this.owner.openData.shopItem.refData.id,
                num: this.owner.slider.value,
            })
            .then(() => {
                if (this.owner.openData.buyBack) {
                    this.owner.openData.buyBack.run();
                }
                this.owner.close();
            });
    }
}
