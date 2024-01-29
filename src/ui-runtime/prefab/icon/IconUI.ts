const { regClass } = Laya;
import { GoodsVo } from "../../../misc/vo/goods/goods-vo";
import { IconUIBase } from "./IconUI.generated";

@regClass()
export class IconUI extends IconUIBase {
    onAwake(): void {}
    public updateGoods(vo?: GoodsVo) {
        if (vo) {
            this.imgIcon.skin = vo.iconUrl;
            this.imgQuality.skin = vo.qualitySkin;
            this.labelNumber.text = vo.goodsNumber.toString();
            // this.labelNumber.text = vo.goodsNumber?.toString();
            // this.iconImage.text = vo.cmd?vo.cmd.num.toString():"0";
        } else {
        }
    }
    set itemNumber(num: string) {
        this.labelNumber.text = num;
    }
}
