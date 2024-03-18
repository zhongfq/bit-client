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
        this.selectBox.visible = value;
        this.imgIcon.visible = !value;
    }
}
