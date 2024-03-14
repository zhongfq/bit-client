import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { SoldierPendantUI } from "../../ui-runtime/prefab/soldier/SoldierPendantUI";
import { SoldierUI } from "../../ui-runtime/prefab/soldier/SoldierUI";
import { TableUtil } from "../table/table-util";

const { regClass, property } = Laya;

@regClass()
export class SoldierPendantMediator extends Mediator {
    public declare owner: SoldierPendantUI;

    public override onAwake(): void {
        this.initUIEvent();
        this.initInfo();
        this.updateList();
    }

    //初始化UI
    private initInfo() {
        this.owner.labelName.text = "我是士兵";
        this.owner.labelLv.text = "Lv." + 1;
        this.owner.labelSkillName.text = "技能";
        this.owner.labelSkillDesc.text = "技能描述";
    }
    //初始化UI事件监听

    private initUIEvent() {
        this.owner.btnUpLv.on(Laya.Event.CLICK, () => {
            //升级
            app.service.soldier.requestPendantUpgrade({ id: 1 });
        });
    }

    private updateList() {
        const pendantList = [];

        for (const pendantRow of TableUtil.getRows(app.service.table.soldier.pendant, {})) {
            pendantList.push({
                row: pendantRow,
                cmd: app.service.soldier.soldierPendantBag.get(pendantRow.id),
            });
        }
        this.owner.listPendant.array = pendantList;
    }
}
