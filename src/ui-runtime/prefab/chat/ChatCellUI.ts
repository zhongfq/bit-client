const { regClass } = Laya;
import { app } from "../../../app";
import { ChatMsgVo } from "../../../misc/vo/chat/chat-msg-vo";
import { ChatRoleVo } from "../../../misc/vo/chat/chat-role-vo";
import { TableUtil } from "../../../system/table/table-util";
import { ChatCellUIBase } from "./ChatCellUI.generated";

@regClass()
export class ChatCellUI extends ChatCellUIBase {
    msgData!: ChatMsgVo;
    set_dataSource(data: any) {
        super.set_dataSource(data);
        this.msgData = data;
        this.updateInfo();
    }
    updateInfo() {
        let role = app.service.chat.chatRoleVoBag.get(this.msgData.id) as ChatRoleVo;
        this.labelName.text = role.cmd?.name || "";
        let reg = /{(\d+)}/gm;
        let str = this.msgData.cmd?.text || "";
        let ubbStr = str.replace(reg, function (match, name) {
            let emojiRow = TableUtil.getRef(app.service.table.emoji, { id: Number(name) });
            if (emojiRow) {
                return `<img src='resources/atlas/emoji/${emojiRow.icon}.png' width=30 height = 30/>`;
            } else {
                return match;
            }
        });

        this.labelMsg.padding = `0,0,0,0`;
        this.labelMsg.text = ubbStr;
        this.height =
            this.height > this.labelMsg.y + this.labelMsg.textField.textHeight
                ? this.height
                : this.labelMsg.y + this.labelMsg.textField.textHeight;

        if (role.id == app.service.user.rid) {
            this.getComponent(Laya.Animator2D).play("chat-cell-self");
            let num = this.labelMsg.textField.lines;
            console.log("num.length:", num.length);
            if (this.labelMsg.textField.lines.length <= 1) {
                this.labelMsg.padding = `0,0,0,${
                    this.labelMsg.width - this.labelMsg.textField.textWidth
                }`;
            }
        }
    }
}
