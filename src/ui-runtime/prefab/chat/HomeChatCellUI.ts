const { regClass } = Laya;
import { app } from "../../../app";
import { ChatCellData } from "../../../system/chat/chat-service";
import { TableUtil } from "../../../system/table/table-util";
import { HomeChatCellUIBase } from "./HomeChatCellUI.generated";

@regClass()
export class HomeChatCellUI extends HomeChatCellUIBase {
    msgData!: ChatCellData;

    override set_dataSource(data: any) {
        super.set_dataSource(data);
        this.msgData = data;
        this.updateInfo();
    }

    updateInfo() {
        if (!this.msgData.role) {
            return;
        }
        const reg = /{(\d+)}/gm;
        const str = this.msgData.msg.cmd?.text || "";
        const ubbStr = str.replace(reg, function (match, name) {
            const emojiRow = TableUtil.getRow(app.service.table.emoji, { id: Number(name) });
            if (emojiRow) {
                return `<img src='resources/texture/emoji/emoji/${emojiRow.icon}.png' width=30 height = 30/>`;
            } else {
                return match;
            }
        });
        this.labelMsg.text = `${this.msgData.role.cmd?.name}:${ubbStr}`;
        this.height =
            this.height > this.labelMsg.y + this.labelMsg.textField.textHeight
                ? this.height
                : this.labelMsg.y + this.labelMsg.textField.textHeight;

        // this.labelName.text = role.cmd?.name || "";
        // const reg = /{(\d+)}/gm;
        // const str = this.msgData.cmd?.text || "";
        // const ubbStr = str.replace(reg, function (match, name) {
        //     const emojiRow = TableUtil.getRow(app.service.table.emoji, { id: Number(name) });
        //     if (emojiRow) {
        //         return `<img src='resources/texture/emoji/emoji/${emojiRow.icon}.png' width=30 height = 30/>`;
        //     } else {
        //         return match;
        //     }
        // });

        // this.labelMsg.padding = `0,0,0,0`;
        // this.labelMsg.text = ubbStr;
        // this.height =
        //     this.height > this.labelMsg.y + this.labelMsg.textField.textHeight
        //         ? this.height
        //         : this.labelMsg.y + this.labelMsg.textField.textHeight;

        // if (role.id == app.service.user.rid) {
        //     this.getComponent(Laya.Animator2D).play("chat-cell-self");
        //     if (this.labelMsg.textField.lines.length <= 1) {
        //         this.labelMsg.padding = `0,0,0,${
        //             this.labelMsg.width - this.labelMsg.textField.textWidth
        //         }`;
        //     }
        // }
    }
}
