const { regClass } = Laya;
import { app } from "../../../app";
import { chat } from "../../../def/proto";
import { ChatMsgVo } from "../../../misc/vo/chat/chat-msg-vo";
import { ChatRoleVo } from "../../../misc/vo/chat/chat-role-vo";
import { ChatCellUIBase } from "./ChatCellUI.generated";

@regClass()
export class ChatCellUI extends ChatCellUIBase {
    msgData!: ChatMsgVo;
    setData(data: any) {
        this.msgData = data;
        this.updateInfo();
    }
    updateInfo() {
        let role = app.service.chat.chatRoleVoBag.get(this.msgData.id) as ChatRoleVo;
        this.labelName.text = role.cmd?.name || "";
        this.labelMsg.text = this.msgData.cmd?.text || "";
        this.height =
            this.height > this.labelMsg.y + this.labelMsg.textField.textHeight
                ? this.height
                : this.labelMsg.y + this.labelMsg.textField.textHeight;
    }
}
