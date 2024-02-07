import proto from "../../../def/proto";
import { Constructor } from "../../../core/dispatcher";
import { ChatRoleVo } from "./chat-role-vo";
import { VoBag } from "../vo-base/vo-bag";
import { ChatMsgVo } from "./chat-msg-vo";

/**
 * ItemBag 道具
 */
export class ChatMsgVoBag extends VoBag<ChatMsgVo> {
    public Hash(t: ChatMsgVo): string | number {
        return t.id;
    }

    init(msgArray: proto.chat.ChatMessage[]) {
        for (const cmdData of msgArray) {
            const vo = new ChatMsgVo();
            vo.initByCmd(cmdData as proto.chat.ChatMessage);
            this.add(vo);
        }
    }

    protected add(t: ChatMsgVo) {
        this.bag.set(this.bag.size + 1, t);
    }

    protected getVOClass(): Constructor<ChatMsgVo> {
        return ChatMsgVo;
    }
}
