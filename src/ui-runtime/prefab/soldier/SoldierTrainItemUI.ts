const { regClass } = Laya;
import { app } from "../../../app";
import { TrainVo } from "../../../misc/vo/soldier/train-vo";
import { TableUtil } from "../../../system/table/table-util";
import { SoldierTrainItemUIBase } from "./SoldierTrainItemUI.generated";

@regClass()
export class SoldierTrainItemUI extends SoldierTrainItemUIBase {
    private _addLv: number = 0;
    private trainVo!: TrainVo;

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
    }

    public updateData(data: any) {
        this.trainVo = data.vo;

        this.initInfo();
    }

    public initInfo() {
        this.imgBar.value = 0;
        this.labelLv.text = "Lv." + this.trainVo.level;
        this.labelVal.text = this.trainVo.name + ":" + this.trainVo.ref.initial;

        this.imgBar.value =
            this.trainVo.level /
            Number(
                TableUtil.getRow(app.service.table.role.level, {
                    lv: app.service.user.profileInfo.lv,
                })?.train_max_lv
            );
        this.labelMoney.text =
            app.service.table.item[this.trainVo.ref.consume[0].id].name +
            ":" +
            this.trainVo.ref.consume[0].count;
    }

    private _start() {
        this._addLv += 1;
        this.imgBar.value =
            (this.trainVo.level + this._addLv) /
            Number(
                TableUtil.getRow(app.service.table.role.level, {
                    lv: app.service.user.profileInfo.lv,
                })?.train_max_lv
            );
        Laya.timer.loop(1000, this, () => {
            this._addLv += 1;
            this.imgBar.value =
                (this.trainVo.level + this._addLv) /
                Number(
                    TableUtil.getRow(app.service.table.role.level, {
                        lv: app.service.user.profileInfo.lv,
                    })?.train_max_lv
                );
        });
    }

    private async _stop() {
        this.btnUpLv.offAll(Laya.Event.MOUSE_UP);
        this.btnUpLv.offAll(Laya.Event.MOUSE_OUT);
        Laya.timer.clearAll(this);
        app.service.soldier.requestTrainUpgrade({ id: this.trainVo.id, num: this._addLv });
        this._addLv = 0;
    }
}
