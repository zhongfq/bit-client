const { regClass } = Laya;
import { HomeDownBtnItemUIBase } from "./HomeDownBtnItemUI.generated";

@regClass()
export class HomeDownBtnItemUI extends HomeDownBtnItemUIBase {
    private _selected: boolean = false;

    public get selected() {
        return this._selected;
    }

    public set selected(value: boolean) {
        this._selected = value;
        this.selectBox.visible = value;
        this.imgIcon.visible = !value;
    }
}
