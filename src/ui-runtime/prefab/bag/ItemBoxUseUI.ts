const { regClass } = Laya;
import { ItemVo } from "../../../misc/vo/goods/item-vo";
import { ItemBoxUseUIBase } from "./ItemBoxUseUI.generated";

@regClass()
export class ItemBoxUseUI extends ItemBoxUseUIBase {
    data!: ItemVo;

    override open(closeOther?: boolean, param?: any): void {
        this.data = param.vo;
        super.open(closeOther, param);
    }
}
