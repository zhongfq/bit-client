const { regClass } = Laya;
import { Callback } from "../../../core/dispatcher";
import { HSliderUIBase } from "./HSliderUI.generated";

@regClass()
export class HSliderUI extends HSliderUIBase {
    _onSliderChange!: Callback;

    override onAwake(): void {
        super.onAwake();
        this.on(Laya.Event.CLICK, () => {});

        this.changeHandler = new Laya.Handler(this, this.onChange);
        this.addBtn.on(Laya.Event.CLICK, this, this.onAddBtn);
        this.minBtn.on(Laya.Event.CLICK, this, this.onMinBtn);
        this.updateBtnType();
    }

    onChange() {
        if (this._onSliderChange) {
            this._onSliderChange();
        }
        this.updateBtnType();
    }

    onAddBtn() {
        this.value++;
    }

    onMinBtn() {
        this.value--;
    }

    updateBtnType() {
        this.addBtn.disabled = this.value >= this.max;
        this.minBtn.disabled = this.value <= this.min;
    }

    set onSliderChange(func: Callback) {
        this._onSliderChange = func;
    }
}
