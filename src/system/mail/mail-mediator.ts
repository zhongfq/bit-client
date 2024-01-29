import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { StringUtil } from "../../core/utils/string-util";
import { Util } from "../../core/utils/util";
import proto from "../../def/proto";
import { ui } from "../../misc/ui";
import { IconUI } from "../../ui-runtime/prefab/icon/IconUI";
import { MailUI } from "../../ui-runtime/prefab/mail/MailUI";
import { MailService } from "./mail-service";

const { regClass } = Laya;

@regClass()
export class MailMediator extends Mediator {
    owner!: MailUI;

    itemListData!: proto.mail.MailInfo[]; //邮件列表数据

    onAwake(): void {
        this.initUIEvent();
        this.updateList();
    }
    //初始化UI事件监听
    initUIEvent() {
        this.owner.listMail.renderHandler = new Laya.Handler(this, this.updateItem);
        this.owner.listMail.mouseHandler = new Laya.Handler(this, this.onListClick);
        this.owner.tabMenu.selectHandler = new Laya.Handler(this, this.onTabSelect);
        this.on(app.service.mail, MailService.MAIL_UPDATE, () => {
            this.updateList();
        });
        this.owner.btnClose.on(Laya.Event.CLICK, () => {
            this.owner.close();
        });
        this.owner.btnReward.on(Laya.Event.CLICK, () => {
            app.service.mail.oneClickReward();
        });
        this.owner.btnDelete.on(Laya.Event.CLICK, () => {
            app.service.mail.oneClickDelete();
        });
    }

    //列表点击回调
    onListClick(evn: Laya.Event, index: number) {
        if (evn.type == Laya.Event.CLICK) {
            if (app.service.mail.getMailIsRead(this.itemListData[index].state)) {
                app.service.mail.requestRead({ mailUids: [this.itemListData[index].uid] });
            }
            app.ui.show(ui.MAIL_INFO, this.itemListData[index]);
        }
    }

    //标签点击回调
    onTabSelect(index: number) {
        this.updateList();
    }

    //listItem刷新回调
    updateItem(cell: MailUI, index: number) {
        (cell.getChildByName("labelMailTips") as Laya.Label).text = this.itemListData[index].title;

        (cell.getChildByName("labelMailTime") as Laya.Label).text =
            StringUtil.convertTimestampToYMD(Number(this.itemListData[index].time) * 1000);

        if (this.itemListData[index].reward.length > 0) {
            (cell.getChildByName("iconDrward") as Laya.Box).visible = true;
            let vo = app.service.bag.itemBag.createByRef(
                Number(this.itemListData[index].reward[0].id)
            );
            vo.goodsNumber = this.itemListData[index].reward[0].num || 0;
            (cell.getChildByName("iconDrward") as IconUI).updateGoods(vo);
        } else {
            (cell.getChildByName("iconDrward") as Laya.Box).visible = false;
        }
        if (app.service.mail.getMailIsRead(this.itemListData[index].state)) {
            (cell.getChildByName("imgMialType") as Laya.Image).skin =
                "resources/atlas/layadefault/img_mail.png";
        } else {
            (cell.getChildByName("imgMialType") as Laya.Image).skin =
                "resources/atlas/layadefault/img_mail_open.png";
        }
    }

    //更新列表
    updateList() {
        if (this.owner.tabMenu.selectedIndex == 0) {
            this.itemListData = Util.toArray<proto.mail.MailInfo>(app.service.mail.mails);
        } else {
        }
        this.owner.listMail.array = this.itemListData;
        this.owner.listMail.refresh();
    }
}
