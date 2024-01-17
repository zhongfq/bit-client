const { regClass } = Laya;
import { IconNodeMediator } from "../../../system/icon/icon-node-mediator";
import { ItemVo } from "../../../system/vo/goods/item-vo";
import { IconUIBase } from "./IconUI.generated";

@regClass()
export class IconUI extends IconUIBase {
    onAwake(): void {}
    public updateGoods(vo?: ItemVo) {
        if (vo) {
            this.iconImage.skin = vo.iconUrl;
            this.iconQuality.skin = vo.qualitySkin;
            this.iconNumber.text = vo.goodsNumber.toString();
            // this.iconNumber.text = vo.goodsNumber?.toString();
            // this.iconImage.text = vo.cmd?vo.cmd.num.toString():"0";
        } else {
        }
    }
    getMediator(): IconNodeMediator {
        return this.getComponent(IconNodeMediator);
    }
}
