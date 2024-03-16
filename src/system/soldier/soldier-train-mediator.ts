import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { TrainVo } from "../../misc/vo/soldier/train-vo";
import { SoldierTrainItemUI } from "../../ui-runtime/prefab/soldier/SoldierTrainItemUI";
import { SoldierTrainUI } from "../../ui-runtime/prefab/soldier/SoldierTrainUI";
import { TableUtil } from "../table/table-util";
import { SoldierService } from "./soldier-service";

const { regClass, property } = Laya;

@regClass()
export class SoldierTrainMediator extends Mediator {
    public declare owner: SoldierTrainUI;

    public override onAwake(): void {
        this.initUIEvent();
        this.initInfo();
        this._updateList();
    }

    //初始化UI
    private initInfo() {}

    //初始化UI事件监听
    private initUIEvent() {
        this.owner.listAttr.renderHandler = new Laya.Handler(this, this.updateItem);
        this.on(app.service.soldier, SoldierService.SOLDIER_TRAIN_UPDATE, () => {
            this._updateList();
        });
    }

    //listItem更新回调
    public updateItem(cell: SoldierTrainItemUI, index: number) {
        const cellData = this.owner.listAttr.array[index];
        cell.updateData(cellData);
    }

    private _updateList() {
        const listData = [];
        for (const v of TableUtil.getRows(app.service.table.role.train, {})) {
            let vo = new TrainVo();
            const bagVo = app.service.soldier.trainBag.get(v.id);
            if (bagVo) {
                vo = bagVo;
            } else {
                vo.initByTableRow(v);
            }
            listData.push({ vo: vo });
        }
        this.owner.listAttr.array = listData;
    }
}
