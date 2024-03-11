import { Service } from "../../core/service";
import { chat } from "../../def/proto";
import { errcode, opcode } from "../../def/protocol";
import { VoUtil } from "../../misc/vo-util";
import { ChatMsgVo } from "../../misc/vo/chat/chat-msg-vo";
import { ChatMsgVoBag } from "../../misc/vo/chat/chat-msg-vo-bag";
import { ChatRoleVo } from "../../misc/vo/chat/chat-role-vo";
import { ChatRoleVoBag } from "../../misc/vo/chat/chat-role-vo-bag";
import { NetworkService } from "../network/network-service";
export interface ChatCellData {
    msg: ChatMsgVo;
    role: ChatRoleVo;
}
export class ChatService extends Service<NetworkService> {
    static readonly CHAT_UPDATE = "chat-update";
    chatRoleVoBag = VoUtil.createBag(ChatRoleVoBag);
    chatMsgVoBag = VoUtil.createBag(ChatMsgVoBag);

    constructor(network: NetworkService) {
        super(network);

        this.handle(opcode.chat.s2c_load, this._onLoad);
        this.handle(opcode.chat.notify, this._onNotify);
    }

    private _onLoad(response: chat.s2c_load) {
        if (response.err === errcode.OK) {
            this.chatRoleVoBag.init(response.chatRoles as chat.ChatRole[]);
            this.chatMsgVoBag.init(response.messages as chat.ChatMessage[]);
        }
    }

    private _onNotify(response: chat.notify) {
        const roleVo = new ChatRoleVo();
        for (const role of response.chatRoles) {
            roleVo.initByCmd(role as chat.ChatRole);
            if (this.chatRoleVoBag.get(Number(role.rid))) {
                this.chatRoleVoBag.onUpdate(roleVo);
            } else {
                this.chatRoleVoBag.onAdd(roleVo);
            }
        }
        const msgVo = new ChatMsgVo();
        for (const msg of response.messages) {
            msgVo.initByCmd(msg as chat.ChatMessage);
            this.chatMsgVoBag.onAdd(msgVo);
        }
        this.event(ChatService.CHAT_UPDATE, msgVo);
    }

    // ------------------------------------------------------------------------
    // rpc call
    // ------------------------------------------------------------------------
    /**
     *请求
     * @param username 登录账号
     * @returns
     */
    async load(data: chat.Ic2s_load) {
        return await this._network.call(chat.c2s_load.create(data), chat.s2c_load);
    }

    async requestSend(data: chat.Ic2s_send) {
        return await this._network.call(chat.c2s_send.create(data), chat.s2c_send);
    }
}
