import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import proto from "../../def/proto";
import { ui } from "../../misc/ui";
import { MoneyVo } from "../../misc/vo/money/money-vo";
import { HomeMonyeBoxUI } from "../../ui-runtime/prefab/home/HomeMonyeBoxUI";
import { HomeMonyeItemUI } from "../../ui-runtime/prefab/home/HomeMonyeItemUI";
import { TaskService } from "../task/task-service";

const { regClass, property } = Laya;

@regClass()
export class homeMonyeMediator extends Mediator {
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    declare owner: HomeMonyeBoxUI;
    private _monyeInfo: MoneyVo[] = [];

    override onAwake(): void {
        this.initEvent();
        this.updateInfo();
    }

    initEvent() {
        this.owner.listMonye.renderHandler = new Laya.Handler(this, this._updateItem);

        // this.on(app.service.task, TaskService.TASK_UPDATE, () => {
        //     this.updateInfo();
        // });
    }

    private _updateItem(cell: HomeMonyeItemUI, index: number) {
        cell.labelNum.text = this._monyeInfo[index].cmd?.num.toString() || "0";
        cell.imgIcon.skin = this._monyeInfo[index].iconUrl;
    }

    updateInfo() {
        for (const [_, monye] of app.service.user.monye) {
            this._monyeInfo.push(monye);
        }
        this.owner.listMonye.array = this._monyeInfo;
    }
}
