const { regClass } = Laya;
import { GoodsVo } from "../../../system/bag/vo/goods/goods-vo";
import { IconNodeMediator } from "../../../system/icon/icon-node-mediator";
import { IconUIBase } from "./IconUI.generated";

@regClass()
export class IconUI extends IconUIBase {
    
    onAwake(): void {
    }
    public updateGoods(vo?:GoodsVo){
        
        // this.iconImage.skin = vo.iconUrl;
        // this.iconQuality.skin = vo.quality;
        // this.iconNumber.text = vo.goodsNumber?.toString();
        // this.iconImage.text = vo.cmd?vo.cmd.num.toString():"0";
    }
    getMediator():IconNodeMediator{
        return this.getComponent(IconNodeMediator);
    }
}