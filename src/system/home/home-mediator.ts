import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { StringUtil } from "../../core/utils/string-util";
import { ui } from "../../misc/ui";
import { HomeUI } from "../../ui-runtime/scene/HomeUI";

const { regClass, property } = Laya;
import Browser = Laya.Browser;
import Render = Laya.Render;
import SpriteUtils = Laya.SpriteUtils;
import { ChatMsgVo } from "../../misc/vo/chat/chat-msg-vo";
import { ChatRoleVo } from "../../misc/vo/chat/chat-role-vo";
import { ChatService } from "../chat/chat-service";
import { TableUtil } from "../table/table-util";

@regClass()
export class MainMediator extends Mediator {
    owner!: HomeUI;
    iframeElement: any;
    divElement: any;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this.initBtn();
        this._initServiceEvent();
        this._initChat();
        this._initRoleInfo();
    }

    private _initServiceEvent() {
        this.on(app.service.chat, ChatService.CHAT_UPDATE, (data: ChatMsgVo) => {
            this._initChat();
        });
    }

    private _initChat() {
        const msg = app.service.chat.chatMsgVoBag.getOne();
        if (msg) {
            const role = app.service.chat.chatRoleVoBag.get(msg.id) as ChatRoleVo;
            this.owner.labelMsg.text = `${role.cmd?.name}:${msg.cmd?.text}`;
        }
    }

    private _initRoleInfo() {
        const profiInfo = app.service.user.profileInfo;
        const lvRow = TableUtil.getRow(app.service.table.role.level, {
            lv: app.service.user.profileInfo.lv,
        });
        const exp = profiInfo.exp || 0;
        this.owner.labelName.text = app.service.user.profileInfo.name;
        // this.owner.labelPower.text = app.service.user.profileInfo.power;
        this.owner.labelLv.text = app.service.user.profileInfo.lv.toString();
        this.owner.labelExp.text = (exp / lvRow!.upgrade_exp) * 100 + "%";
        this.owner.progressBarExp.value = exp / lvRow!.upgrade_exp;
    }

    onKeyDown(evt: Laya.Event): void {
        if (evt.ctrlKey && evt.keyCode == Laya.Keyboard.B) {
            app.ui.show(ui.GM);
        }
    }

    initBtn() {
        this.owner.btnBag.on(Laya.Event.CLICK, () => {
            app.ui.show(ui.BAG);
        });
        this.owner.btnMail.on(Laya.Event.CLICK, () => {
            app.ui.show(ui.MAIL);
        });
        this.owner.btnShop.on(Laya.Event.CLICK, () => {
            app.service.shop.load({ shopId: 1 });
            app.ui.show(ui.SHOP);
        });
        this.owner.btnWorld.on(Laya.Event.CLICK, () => {
            app.ui.replace(ui.WORLD_SCENE);
        });
        this.owner.boxChat.on(Laya.Event.CLICK, () => {
            app.ui.show(ui.CHAT);
        });
    }
}
