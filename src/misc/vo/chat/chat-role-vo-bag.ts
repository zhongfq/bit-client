import proto from "../../../def/proto";
import { app } from "../../../app";
import { Constructor } from "../../../core/dispatcher";
import { TableUtil } from "../../../system/table/table-util";
import { todo } from "node:test";
import { ChatRoleVo } from "./chat-role-vo";
import { VoBag } from "../vo-base/vo-bag";

/**
 * ItemBag 道具
 */
export class ChatRoleVoBag extends VoBag<ChatRoleVo> {
    public Hash(t: ChatRoleVo): string | number {
        return t.id;
    }

    init(roleArray: proto.chat.ChatRole[]) {
        for (const cmdData of roleArray) {
            const vo = new ChatRoleVo();
            vo.initByCmd(cmdData as proto.chat.ChatRole);
            this.add(vo);
        }
    }

    protected getVOClass(): Constructor<ChatRoleVo> {
        return ChatRoleVo;
    }
}
