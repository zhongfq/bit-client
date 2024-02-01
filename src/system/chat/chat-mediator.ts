import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { Util } from "../../core/utils/util";
import { ChatConf } from "../../def/chat";
import { chat } from "../../def/proto";
import { ChatMsgVo } from "../../misc/vo/chat/chat-msg-vo";
import { ChatUI } from "../../ui-runtime/prefab/chat/ChatUI";
import { ChatService } from "./chat-service";

const { regClass, property } = Laya;

@regClass()
export class ChatMediator extends Mediator {
    owner!: ChatUI;

    onAwake(): void {
        this.initUIEvent();
        this.initServiceEvent();
        this.updateList();
    }

    //初始化UI事件监听
    initUIEvent() {
        this.owner.btnClose.on(Laya.Event.CLICK, this.owner, this.owner.close);
        this.owner.btnSend.on(Laya.Event.CLICK, this, () => {
            app.service.chat.requestSend({
                channel: ChatConf.CHAT_CHANNEL.WORLD,
                text: this.owner.inputMsg.text,
            });
        });
    }

    //初始化Service事件监听
    initServiceEvent() {
        this.on(app.service.chat, ChatService.CHAT_UPDATE, (data: ChatMsgVo) => {
            this.owner.listPanel.addData(data);
            this.owner.listPanel.refreshScrollBar();
        });
    }

    //列表点击回调
    onListClick(evn: Laya.Event, index: number) {
        if (evn.type == Laya.Event.CLICK) {
        }
    }

    //标签点击回调
    onTabSelect(index: number) {
        this.updateList();
    }

    //刷新列表
    updateList() {
        this.owner.listPanel.setArrayData(
            Util.toArray(app.service.chat.chatMsgVoBag.getBag()).reverse()
        );
        this.owner.listPanel.refreshScrollBar();
    }
}
