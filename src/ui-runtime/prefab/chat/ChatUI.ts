const { regClass } = Laya;
import { ChatCellUI } from "./ChatCellUI";
import { ChatUIBase } from "./ChatUI.generated";

@regClass()
export class ChatUI extends ChatUIBase {
    addNum = 0;
    tlChatCell: ChatCellUI[] = [];

    override onAwake(): void {}
}
