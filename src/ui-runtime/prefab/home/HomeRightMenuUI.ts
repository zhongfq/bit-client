const { regClass } = Laya;
import { app } from "../../../app";
import { ui } from "../../../misc/ui";
import { HomeRightMenuUIBase } from "./HomeRightMenuUI.generated";

@regClass()
export class HomeRightMenuUI extends HomeRightMenuUIBase {
    public override onAwake(): void {
        this._initUIEvent();
    }

    private _initUIEvent() {
        this.btnBag.on(Laya.Event.CLICK, () => {
            app.ui.show(ui.BAG);
        });
        this.btnNotice.on(Laya.Event.CLICK, () => {
            app.ui.show(ui.MAIL);
        });
        this.btnRank.on(Laya.Event.CLICK, () => {});
        this.btnShop.on(Laya.Event.CLICK, () => {
            app.service.shop.load({ shopId: 1 }).then(() => {
                app.ui.show(ui.SHOP);
            });
        });
        this.imgClose.on(Laya.Event.CLICK, () => {
            this.visible = false;
        });
    }
}
