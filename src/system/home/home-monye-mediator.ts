import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { MoneyVo } from "../../misc/vo/money/money-vo";
import { HomeMonyeBoxUI } from "../../ui-runtime/prefab/home/HomeMonyeBoxUI";
import { HomeMonyeItemUI } from "../../ui-runtime/prefab/home/HomeMonyeItemUI";
import { UserService } from "../user/user-service";

const { regClass, property } = Laya;

@regClass()
export class HomeMonyeMediator extends Mediator {
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    public declare owner: HomeMonyeBoxUI;
    private _monyeInfo: MoneyVo[] = [];

    public override onAwake(): void {
        this.initEvent();
        this.updateInfo();
    }

    public initEvent() {
        this.owner.listMonye.renderHandler = new Laya.Handler(this, this._updateItem);

        this.on(app.service.task, UserService.MONEY_UPDATE, () => {
            this.updateInfo();
        });
    }

    private _updateItem(cell: HomeMonyeItemUI, index: number) {
        cell.labelNum.text = this._monyeInfo[index].cmd?.num.toString() || "0";
        cell.imgIcon.skin = this._monyeInfo[index].iconUrl;
    }

    public updateInfo() {
        let moneyId = 0;
        for (const [_, money] of app.service.user.money) {
            moneyId > money.id ? this._monyeInfo.push(money) : this._monyeInfo.unshift(money);
            moneyId = money.id;
        }
        this.owner.listMonye.array = this._monyeInfo;
    }
}
