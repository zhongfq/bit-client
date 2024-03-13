const { regClass } = Laya;
import { ChatCellUI } from "./ChatCellUI";
import { ChatUIBase } from "./ChatUI.generated";

@regClass()
export class ChatUI extends ChatUIBase {
    public addNum = 0;
    public tlChatCell: ChatCellUI[] = [];

    public override onAwake(): void {}
}
