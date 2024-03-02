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
    declare owner: HomeUI;
    iframeElement: any;
    divElement: any;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    override onAwake(): void {
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
            const reg = /{(\d+)}/gm;
            const str = msg.cmd?.text || "";
            const ubbStr = str.replace(reg, function (match, name) {
                const emojiRow = TableUtil.getRow(app.service.table.emoji, { id: Number(name) });
                if (emojiRow) {
                    return `<img src='resources/texture/emoji/emoji/${emojiRow.icon}.png' width=30 height = 30/>`;
                } else {
                    return match;
                }
            });
            this.owner.labelMsg.text = `${role.cmd?.name}:${ubbStr}`;
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

    override onKeyDown(evt: Laya.Event): void {
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
            // app.ui.replace(ui.PVE);
        });
        this.owner.boxChat.on(Laya.Event.CLICK, () => {
            app.ui.show(ui.CHAT);
        });
        this.owner.btnUnion.on(Laya.Event.CLICK, () => {
            // this.setViewStackFunc.runWith(-1);
            this.owner.ViewStack.selectedIndex = -1;
        });
        this.owner.btnBox.on(Laya.Event.CLICK, () => {
            // this.owner.ViewStack.selectedIndex = 0;
            // Laya.Handler;
            this.owner.ViewStack.selectedIndex = 0;
            // this.owner.boxNode.visible = true;
            // this.owner.boxNode.active = true;
            // this;
        });
        // this.owner.List.array = ["1111", "1111", "1111", "1111", "1111"];
    }
}
