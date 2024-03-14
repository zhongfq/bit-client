import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { SoldierSoldierUI } from "../../ui-runtime/prefab/soldier/SoldierSoldierUI";
import { TableUtil } from "../table/table-util";

const { regClass, property } = Laya;

@regClass()
export class SoldierSoldierMediator extends Mediator {
    public declare owner: SoldierSoldierUI;

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
        // this.owner.imgHeadIcon.skin = ""
    }

    //初始化UI事件监听
    private initUIEvent() {
        this.owner.btnUpLv.on(Laya.Event.CLICK, () => {
            //升级
            app.service.soldier.requestSoldiertUpgrade({ id: 1 });
        });
    }

    private updateList() {
        const pendantList = [];

        for (const soldierRow of TableUtil.getRows(app.service.table.soldier.soldier, {})) {
            pendantList.push({
                row: soldierRow,
                cmd: app.service.soldier.soldierBag.get(soldierRow.id),
            });
        }
        this.owner.listSoldier.array = pendantList;
    }
}
