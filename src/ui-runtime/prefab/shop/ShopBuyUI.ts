const { regClass } = Laya;
import { ShopItem } from "../../../system/shop/shop-service";
import { ShopBuyUIBase } from "./ShopBuyUI.generated";
export interface OpenData {
    shopItem: ShopItem;
    shopId: number;
}
@regClass()
export class ShopBuyUI extends ShopBuyUIBase {
    openData!: OpenData;
    open(closeOther?: boolean | undefined, param?: any): void {
        this.openData = param;
        super.open(closeOther, param);
    }
}
