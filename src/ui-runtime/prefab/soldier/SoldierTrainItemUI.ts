const { regClass } = Laya;
import { app } from "../../../app";
import { SoldierTrainItemUIBase } from "./SoldierTrainItemUI.generated";

@regClass()
export class SoldierTrainItemUI extends SoldierTrainItemUIBase {
    private _addLv: number = 0;

    public override onAwake(): void {
        this.btnUpLv.on(Laya.Event.MOUSE_DOWN, (event: Laya.Event) => {
            this._start();
            this.btnUpLv.once(Laya.Event.MOUSE_OUT, (eventOut: Laya.Event) => {
                this._stop();
            });
            this.btnUpLv.once(Laya.Event.MOUSE_UP, (eventUp: Laya.Event) => {
                this._stop();
            });
        });
        this.initInfo();
    }

    public initInfo() {
        this.imgBar.value = 0;
        this.labelLv.text = "Lv." + "0";
        this.labelVal.text = "属性:" + "100";
        this.labelMoney.text = "金币:" + "100";
    }

    private _start() {
        this._addLv += 1;
        this.imgBar.value += 0.01;
        Laya.timer.loop(1000, this, () => {
            this.imgBar.value += 0.01;
        });
    }

    private _stop() {
        this.btnUpLv.offAll(Laya.Event.MOUSE_UP);
        this.btnUpLv.offAll(Laya.Event.MOUSE_OUT);
        Laya.timer.clearAll(this);
        // app.service.soldier.requestTrainUpgrade({ id: 1, num: this._addLv });
        this._addLv = 0;
    }
}
