import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { mail } from "../../def/mail";
import { IconUI } from "../../ui-runtime/prefab/icon/IconUI";
import { MailInfoUI } from "../../ui-runtime/prefab/mail/MailInfoUI";

const { regClass, property } = Laya;

@regClass()
export class MailInfoMediator extends Mediator {
    owner!: MailInfoUI;

    onAwake(): void {
        this.initClick();
        this.updateInfo();
        this.updateList();
    }
    private initClick() {
        this.owner.itemList.renderHandler = new Laya.Handler(this, this.updateItem);
        this.owner.btnClose.on(Laya.Event.CLICK, () => {
            this.owner.close();
        });
        this.owner.btnDelete.on(Laya.Event.CLICK, () => {
            app.service.mail.requestDeleteMails({ mailUids: [this.owner.oepnData.uid] });
            this.owner.close();
        });
        this.owner.btnReceive.on(Laya.Event.CLICK, () => {
            app.service.mail.requestReceiveReward({ mailUids: [this.owner.oepnData.uid] });
            this.owner.close();
        });
    }
    updateItem(cell: IconUI, index: number) {
        let vo = app.service.bag.itemBag.createByRef(Number(this.owner.rewards[index].id));
        vo.goodsNumber = Number(this.owner.rewards[index].num);
        cell.updateGoods(vo);
    }
    updateInfo() {
        let title = this.owner.refData ? this.owner.refData.title : this.owner.oepnData.title;
        let content = this.owner.refData ? this.owner.refData.content : this.owner.oepnData.content;
        this.owner.labelTitle.text = title;
        this.owner.labelContent.text = content;
        if (
            app.service.mail.getMailIsReward(this.owner.oepnData.state) &&
            this.owner.rewards.length > 0
        ) {
            this.owner.btnDelete.visible = false;
            this.owner.btnReceive.visible = true;
        } else {
            this.owner.btnDelete.visible = true;
            this.owner.btnReceive.visible = false;
        }
    }
    updateList() {
        if (this.owner.rewards && this.owner.rewards.length > 0) {
            this.owner.itemList.visible = true;
            this.owner.itemList.array = this.owner.rewards;
        } else {
            this.owner.itemList.visible = false;
        }
    }
}
