import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { AllianceUI } from "../../ui-runtime/prefab/alliance/AllianceUI";
import { TableUtil } from "../table/table-util";

const { regClass, property } = Laya;

@regClass()
export class AllianceMediator extends Mediator {
    owner!: AllianceUI;

    onAwake(): void {
        let labels = "";
        for (let data of TableUtil.getArrayRef(app.service.table.alliance, {})) {
            labels += `${data.name},`;
        }
        labels = labels.slice(0, -1);
        this.owner.radioGroup.labels = labels;
        this.initUiEvent();
    }
    initUiEvent() {
        //UI Event
        this.owner.radioGroup.on(Laya.Event.CHANGE, () => {});
        this.owner.btnClose.on(Laya.Event.CLICK, () => {});
        this.owner.btnConfirm.on(Laya.Event.CLICK, () => {
            if (this.owner.radioGroup.selectedIndex > 0) {
            }
        });
        //service Event
    }
}
