const { regClass } = Laya;
import { ShopItem } from "../../../system/shop/shop-mediator";
import { ShopBuyUIBase } from "./ShopBuyUI.generated";

@regClass()
export class ShopBuyUI extends ShopBuyUIBase {
    openData!: ShopItem;
    open(closeOther?: boolean | undefined, param?: any): void {
        this.openData = param;
        super.open(closeOther, param);
    }
}
