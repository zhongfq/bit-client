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
export class HomeMediator extends Mediator {
    public declare owner: HomeUI;
    public iframeElement: any;
    public divElement: any;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    public override onAwake(): void {
        this.initBtn();
        this._initServiceEvent();
        this._initChat();

        // 加载数据
        app.service.troop.requestLoad();
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
            // this.owner.labelMsg.text = `${role.cmd?.name}:${ubbStr}`;
        }
    }

    public override onKeyDown(evt: Laya.Event): void {
        if (evt.ctrlKey && evt.keyCode == Laya.Keyboard.B) {
            app.ui.show(ui.GM);
        }
    }

    public initBtn() {
        this.owner.btnPve.on(Laya.Event.CLICK, () => {
            app.ui.replace(ui.PVE);
        });
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
        // this.owner.chat_box.on(Laya.Event.CLICK, () => {
        //     app.ui.show(ui.CHAT);
        // });
        // this.owner.List.array = ["1111", "1111", "1111", "1111", "1111"];
    }
}
