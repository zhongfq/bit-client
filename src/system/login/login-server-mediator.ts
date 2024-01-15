import { Mediator } from "../../core/ui-mediator";
import { LoginServerUI } from "../../ui-runtime/prefab/login/LoginServerUI";

const { regClass, property } = Laya;

@regClass()
export class LoginServerMediator extends Mediator {
    owner!: LoginServerUI;
    onStart(): void {
        this.owner.itemList.mouseHandler = new Laya.Handler(this, this.listClick);
        this.owner.itemList.renderHandler = new Laya.Handler(this, this.itemUpdate);
        this.owner.Button.on(Laya.Event.CLICK, () => {
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
        this.owner.itemList.array = this.owner.tlServerList;
    }
}
