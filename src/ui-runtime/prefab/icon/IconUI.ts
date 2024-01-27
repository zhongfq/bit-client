const { regClass } = Laya;
import { ItemVo } from "../../../misc/vo/goods/item-vo";
import { IconUIBase } from "./IconUI.generated";

@regClass()
export class IconUI extends IconUIBase {
    onAwake(): void {}
    public updateGoods(vo?: ItemVo) {
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
