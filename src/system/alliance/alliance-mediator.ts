import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { AllianceRow } from "../../def/table";
import { ui } from "../../misc/ui";
import { AllianceUI } from "../../ui-runtime/prefab/alliance/AllianceUI";
import { TableUtil } from "../table/table-util";

const { regClass, property } = Laya;

@regClass()
export class AllianceMediator extends Mediator {
    declare owner: AllianceUI;

    private _alliances: AllianceRow[] = [];

    override onAwake(): void {
        let labels = "";
        for (const data of TableUtil.getRows(app.service.table.alliance, {})) {
            this._alliances.push(data);
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
        this.owner.btnConfirm.on(Laya.Event.CLICK, async () => {
            this.owner.close();
            const selectedIndex = this.owner.radioGroup.selectedIndex;
            if (selectedIndex >= 0) {
                await app.service.gm.requestGM(
                    `change_alliance ${this._alliances[selectedIndex].id}`
                );
            }
        });
        //service Event
    }
}
