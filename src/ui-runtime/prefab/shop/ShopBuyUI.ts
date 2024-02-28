const { regClass } = Laya;
import { ShopItem } from "../../../system/shop/shop-service";
import { ShopBuyUIBase } from "./ShopBuyUI.generated";
export interface OpenData {
    shopItem: ShopItem;
    shopId: number;
    buyBack?: Laya.Handler;
}
@regClass()
export class ShopBuyUI extends ShopBuyUIBase {
    openData!: OpenData;

    override open(closeOther?: boolean | undefined, param?: any): void {
        this.openData = param;
        super.open(closeOther, param);
    }
}
