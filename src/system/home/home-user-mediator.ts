import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { MoneyConf } from "../../def/money";
import { money } from "../../def/proto";
import { ui } from "../../misc/ui";
import { HomeUserBoxUI } from "../../ui-runtime/prefab/home/HomeUserBoxUI";
import { TableUtil } from "../table/table-util";
import { TaskService } from "../task/task-service";

const { regClass, property } = Laya;

@regClass()
export class HomeUserMediator extends Mediator {
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    declare owner: HomeUserBoxUI;

    override onAwake(): void {
        this.initEvent();
        this.updateInfo();
    }

    initEvent() {
        // this.on(app.service.task, TaskService.TASK_UPDATE, () => {
        //     this.updateInfo();
        // });
    }

    updateInfo() {
        const profiInfo = app.service.user.profileInfo;
        const lvRow = TableUtil.getRow(app.service.table.role.level, {
            lv: app.service.user.profileInfo.lv,
        });
        const exp = profiInfo.exp || 0;
        this.owner.labelName.text = app.service.user.profileInfo.name;
        // this.owner.labelPower.text = app.service.user.profileInfo.power;
        // this.owner.labelLv.text = app.service.user.profileInfo.lv.toString();
        // this.owner.labelExp.text = (exp / lvRow!.upgrade_exp) * 100 + "%";
        // this.owner.progressBarExp.value = exp / lvRow!.upgrade_exp;
        const diamondNum = app.service.user.money.get(MoneyConf.MONEY_ID.DIAMOND)?.goodsNumberStr;
        this.owner.moneyDiamond.labelNum.text = diamondNum ? diamondNum : "0";
        const coinNum = app.service.user.money.get(MoneyConf.MONEY_ID.COIN)?.goodsNumberStr;
        this.owner.moneyCoin.labelNum.text = coinNum ? coinNum : "0";
    }
}
