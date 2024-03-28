import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { MoneyConf } from "../../def/money";
import { ui } from "../../misc/ui";
import { ChatMsgVo } from "../../misc/vo/chat/chat-msg-vo";
import { HomeChatBoxUI } from "../../ui-runtime/prefab/home/HomeChatBoxUI";
import { ChatService } from "../chat/chat-service";
import { TableUtil } from "../table/table-util";

const { regClass, property } = Laya;

@regClass()
export class HomeChatMediator extends Mediator {
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    public declare owner: HomeChatBoxUI;

    public override onStart(): void {
        this.initEvent();
        this.updateInfo();
    }

    public initEvent() {
        this.owner.btn.on(Laya.Event.CLICK, () => {
            app.ui.show(ui.CHAT);
        });

        this.$(app.service.chat).on(ChatService.CHAT_UPDATE, (data: ChatMsgVo) => {
            this.addMsg();
        });
    }

    public updateInfo() {
        const chatMsgs = [];
        for (const msg of app.service.chat.chatMsgVoBag.toArray().reverse()) {
            if (chatMsgs.length >= 2) {
                break;
            }
            chatMsgs.push({ msg: msg, role: app.service.chat.chatRoleVoBag.get(msg.id) });
        }
        this.owner.virtuallyList.setArrayData(chatMsgs);
    }

    public addMsg() {
        const msgList = app.service.chat.chatMsgVoBag.toArray();
        const msg = msgList[msgList.length - 1] as ChatMsgVo;

        this.owner.virtuallyList.addData(
            {
                msg: msg,
                role: app.service.chat.chatRoleVoBag.get(msg.id),
            },
            true
        );
        this.owner.virtuallyList.scrollDown();
    }
}
