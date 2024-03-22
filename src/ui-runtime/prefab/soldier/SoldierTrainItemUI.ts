const { regClass } = Laya;
import { app } from "../../../app";
import { StringUtil } from "../../../core/utils/string-util";
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
        this.labelLv.text = "Lv." + this.trainVo.level + this._addLv;
        this.labelVal.text =
            this.trainVo.name +
            ":" +
            (this.trainVo.ref.initial + this.trainVo.level * this.trainVo.ref.grow);

        this.imgBar.value =
            (this.trainVo.level + this._addLv) /
            Number(
                TableUtil.getRow(app.service.table.role.level, {
                    lv: app.service.user.profileInfo.lv,
                })?.train_max_lv
            );
        const ubb = StringUtil.str2UBB(
            "{0}{1}",
            { image: "resources/atlas/iconSmall/icon_main_gold.png", width: 30, height: 30 },
            this.trainVo.ref.consume[0].count
        );
        this.labelMoney.text = ubb;
        const bagNum = app.service.bag.itemBag.getItemNumber(this.trainVo.ref.consume[0].id);

        this.btnUpLv.gray = this.trainVo.ref.consume[0].count > bagNum;
    }

    private _start() {
        this._addLv += 1;
        this.initInfo();
        Laya.timer.loop(1000, this, () => {
            if (
                this.trainVo.level + this._addLv >=
                Number(
                    TableUtil.getRow(app.service.table.role.level, {
                        lv: app.service.user.profileInfo.lv,
                    })?.train_max_lv
                )
            ) {
                this._stop();
                return;
            }
            this._addLv += 1;
            this.initInfo();
        });
    }

    private async _stop() {
        Laya.timer.clearAll(this);
        this.btnUpLv.offAll(Laya.Event.MOUSE_UP);
        this.btnUpLv.offAll(Laya.Event.MOUSE_OUT);
        app.service.soldier.requestTrainUpgrade({ id: this.trainVo.id, num: this._addLv });
        this._addLv = 0;
    }
}
