const { regClass } = Laya;
import { Callback } from "../../../core/dispatcher";
import { ItemVo } from "../../../misc/vo/goods/item-vo";
import { ItemTipsUIBase } from "./ItemTipsUI.generated";

export interface Iitem_Tips_Param {
    isShowTips: boolean;
    touchBack: Callback;
    vo: ItemVo;
}
@regClass()
export class ItemTipsUI extends ItemTipsUIBase {
    public data!: Iitem_Tips_Param;

    // isShowEffect = false;
    public override onAwake(): void {
        this.Sprite.on(Laya.Event.CLICK, () => {
            this.close();
        });
    }

    public override open(closeOther?: boolean | undefined, param?: any): void {
        this.data = param.itemTipsParam;
        if (param.x < Laya.stage.width * 0.5) {
            this.Image.anchorX = 0;
        } else if (param.x > Laya.stage.width * 0.5) {
            this.Image.anchorX = 1;
        } else {
            this.Image.anchorX = 0.5;
        }
        if (param.y < Laya.stage.height * 0.5) {
            this.Image.anchorY = 0;
        } else if (param.y > Laya.stage.height * 0.5) {
            this.Image.anchorY = 1;
        } else {
            this.Image.anchorY = 0.5;
        }
        this.Image.x = param.x;
        this.Image.y = param.y;
        this.Sprite.width = Laya.stage.width;
        this.Sprite.height = Laya.stage.height;
        this.Sprite.graphics.drawRect(
            0,
            0,
            Laya.stage.width,
            Laya.stage.height,
            Laya.UIConfig.popupBgColor
        );
        this.Sprite.alpha = Laya.UIConfig.popupBgAlpha;
        Laya.Dialog.manager.open(this, closeOther, this.isShowEffect);
        Laya.Dialog.lock(false);
    }

    public override onOpened(param: any): void {
        this.iconItem.updateGoods(this.data.vo);
        // this.itemNumber.text = "当前拥有："+this.data.vo.goodsNumber;
        // this.itemDesc.text = this.data.vo.desc;
        // this.ItemName.text = this.data.vo.name;
    }
}
