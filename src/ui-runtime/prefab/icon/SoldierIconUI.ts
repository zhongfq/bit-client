const { regClass } = Laya;
import { app } from "../../../app";
import { ItemConf } from "../../../def/item";
import { GoodsVo } from "../../../misc/vo/goods/goods-vo";
import { SoldierIconUIBase } from "./SoldierIconUI.generated";

@regClass()
export class SoldierIconUI extends SoldierIconUIBase {
    // override onAwake(): void {

    // }

    public updateGoods(vo?: GoodsVo, type?: number) {
        if (vo) {
            this.icon.updateGoods(vo);
            this.icon.itemName = vo.name;
            // this.icon.selectBox.visible = this.selectEnable;
            this.icon.imgLock.visible = vo.cmd ? false : true;
            const voNum = app.service.bag.itemBag.get(vo.id)?.goodsNumber || 0;
            if (type == ItemConf.ITEM_SUB_TYPE.SOLDIER) {
                this.labelNum.text = voNum + "/" + vo.ref.up_lv_num;
                this.imgBar.value = voNum / vo.ref.up_lv_num;
            } else {
                this.labelNum.text = voNum + "/" + vo.ref.up_star_num;
                this.imgBar.value = voNum / vo.ref.up_star_num;
            }
        }
    }
}
