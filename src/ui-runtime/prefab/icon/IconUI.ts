const { regClass } = Laya;
import { GoodsVo } from "../../../misc/vo/goods/goods-vo";
import { IconUIBase } from "./IconUI.generated";

@regClass()
export class IconUI extends IconUIBase {
    public override onAwake(): void {}

    public updateGoods(vo?: GoodsVo) {
        if (vo) {
            this.imgIcon.skin = vo.iconUrl;
            this.imgQuality.skin = vo.qualitySkin;
            // this.labelNumber.text = vo.goodsNumber.toString();
            // this.labelNumber.text = vo.goodsNumber?.toString();
            // this.iconImage.text = vo.cmd?vo.cmd.num.toString():"0";
        }
    }

    public set itemNumber(num: string) {
        this.labelNumber.text = num;
    }

    public set itemName(name: string) {
        this.labelNumber.text = name;
    }
}
