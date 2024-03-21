import { Tween } from "../../../core/laya";
import { HomeNaviMenuBtnUIBase } from "./HomeNaviMenuBtnUI.generated";

const { regClass } = Laya;

@regClass()
export class HomeNaviMenuBtnUI extends HomeNaviMenuBtnUIBase {
    private _selected: boolean = false;

    public get selected() {
        return this._selected;
    }

    public set selected(value: boolean) {
        this._selected = value;
        if (value) {
            // this.setSelectVisible(value);
            Laya.Tween.to(
                this.selectBox,
                { width: 320, alpha: 1 },
                150,
                null,
                new Laya.Handler(null, () => {
                    // this.setSelectVisible(value);
                })
            );
        } else {
            // this.setSelectVisible(value);
            Laya.Tween.to(
                this.selectBox,
                { width: 0, alpha: 0 },
                150,
                null,
                new Laya.Handler(null, () => {
                    // this.setSelectVisible(value);
                })
            );
        }
    }

    private setSelectVisible(value: boolean) {
        // this.selectBox.visible = value;
        this.imgIcon.visible = !value;
    }
}
