import { Mediator } from "../../core/ui-mediator";
import { LoginServerUI } from "../../ui-runtime/prefab/login/LoginServerListUI";

const { regClass, property } = Laya;

@regClass()
export class LoginServerListMediator extends Mediator {
    owner!: LoginServerUI;
    onStart(): void {
        this.owner.listServer.mouseHandler = new Laya.Handler(this, this.listClick);
        this.owner.listServer.renderHandler = new Laya.Handler(this, this.itemUpdate);
        this.owner.btnClose.on(Laya.Event.CLICK, () => {
            this.owner.close();
        });
        this.updateServerList();
    }
    listClick(evt: Laya.Event, index: number) {
        if (evt.type == Laya.Event.CLICK) {
            this.owner.close();
            this.owner.backFunc.runWith(this.owner.tlServerList[index]);
        }
    }
    itemUpdate(cell: any, index: number) {
        cell.getChildByName("labelName").text = this.owner.tlServerList[index].server_name;
    }
    updateServerList() {
        this.owner.listServer.array = this.owner.tlServerList;
    }
}
