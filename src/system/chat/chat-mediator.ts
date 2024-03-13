import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { Util } from "../../core/utils/util";
import { ListCreateDataType } from "../../core/virtuallyList/virtually-list";
import { ChatConf } from "../../def/chat";
import { chat } from "../../def/proto";
import { EmojiRow, EmojiTable } from "../../def/table";
import { ChatMsgVo } from "../../misc/vo/chat/chat-msg-vo";
import { ChatUI } from "../../ui-runtime/prefab/chat/ChatUI";
import { TableUtil } from "../table/table-util";
import { ChatService } from "./chat-service";

const { regClass, property } = Laya;

@regClass()
export class ChatMediator extends Mediator {
    public declare owner: ChatUI;
    public emojiData!: EmojiRow[];

    public override onAwake(): void {
        this.owner.boxEmoji.visible = false;
        this.emojiData = TableUtil.getRows(app.service.table.emoji, {});
        this.initUIEvent();
        this.initServiceEvent();
        this.initInfo();
    }

    public override onStart(): void {
        this.updateList();
    }

    //初始化UI事件监听
    public initUIEvent() {
        this.owner.on(Laya.Event.MOUSE_DOWN, this, (evn: Laya.Event) => {
            const touchPoint = this.owner.globalToLocal(evn.touchPos);
            if (!this.owner.boxEmoji.getBounds().contains(touchPoint.x, touchPoint.y)) {
                this.owner.boxEmoji.visible = false;
            }
        });
        this.owner.btnEmoji.on(Laya.Event.CLICK, this.owner, () => {
            this.owner.boxEmoji.visible = true;
        });
        this.owner.btnSend.on(Laya.Event.CLICK, this, () => {
            app.service.chat.requestSend({
                channel: ChatConf.CHAT_CHANNEL.WORLD,
                text: this.owner.inputMsg.text,
            });
            this.owner.inputMsg.text = "";
        });
    }

    //初始化Service事件监听
    public initServiceEvent() {
        this.on(app.service.chat, ChatService.CHAT_UPDATE, (data: ChatMsgVo) => {
            // this.owner.listPanel.addData(data);
            // this.owner.listPanel.refreshScrollBar();
            this.owner.virtuallyList.addData(data);
        });
    }

    public initInfo() {
        this.owner.listEmoji.mouseHandler = new Laya.Handler(
            this,
            (evn: Laya.Event, index: number) => {
                if (evn.type == Laya.Event.CLICK) {
                    this.owner.inputMsg.text += `{${this.emojiData[index].id}}`;
                }
            }
        );
        this.owner.listEmoji.renderHandler = new Laya.Handler(
            this,
            (cell: Laya.Sprite, index: number) => {
                const icon = cell.getChildByName("imgIcon") as Laya.Image;
                icon.skin = `resources/texture/emoji/emoji/${this.emojiData[index].icon}.png`;
            }
        );
        this.owner.listEmoji.array = this.emojiData;
    }

    //列表点击回调
    public onListClick(evn: Laya.Event, index: number) {
        // if (evn.type == Laya.Event.CLICK) {
        // }
    }

    //标签点击回调
    public onTabSelect(index: number) {
        // this.updateList();
    }

    //刷新列表
    public updateList() {
        // this.owner.listPanel.setArrayData(
        //     Util.toArray(app.service.chat.chatMsgVoBag.getBag()).reverse()
        // );
        // this.owner.listPanel.refreshScrollBar();
        this.owner.virtuallyList.setArrayData(
            Util.toArray(app.service.chat.chatMsgVoBag.getBag()),
            1
        );
    }
}
