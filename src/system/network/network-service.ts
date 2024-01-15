import ByteBuffer from "../../3rd/bytebuffer.js";
import { Constructor } from "../../core/dispatcher.js";
import { Service } from "../../core/service.js";
import { Socket } from "../../core/socket.js";
import { user } from "../../def/proto.js";
import { errcode, errmsg, opcode, registerProtocols } from "../../def/protocol.js";

type PromiseDescriptor = {
    resolve: (value: any) => void;
    reject: (reason?: any) => void;
};

export type ProtocolDescriptor = {
    op: number;
    typeURL: string;
    encode: (message: any, writer?: any) => any;
    decode: (reader: Uint8Array, length?: number) => any;
};

const protocols: { [key: number | string]: ProtocolDescriptor | undefined } = {};

export const register = (descriptor: ProtocolDescriptor) => {
    protocols[descriptor.op] = descriptor;
    protocols[descriptor.typeURL] = descriptor;
};

const HEADER_LENGTH = 6; // |-len(2)-|-op(2)-|-sid(2)-|

export class NetworkService extends Service<NetworkService> {
    static readonly CONNECTING = Socket.CONNECTING;
    static readonly OPEN = Socket.OPEN;
    static readonly CLOSING = Socket.CLOSING;
    static readonly CLOSED = Socket.CLOSED;

    id?: string;
    uuid?: string;

    // 网络延时
    private _rtt: number = -1;

    private _callbacks: { [id: number]: PromiseDescriptor | undefined } = {};
    private _url: string | null = null;
    // 0: server notify
    // 1~2^15: message id
    private _session: number = 0;
    private _socket: Socket | null = null;
    private _status: number = NetworkService.CLOSED;
    private _buffer: ByteBuffer = new ByteBuffer(1 << 16);
    private _packetSize: number = 0;
    private _ignoredLog: { [k: number]: boolean } = {};

    constructor() {
        super(null!);
        if (Object.keys(protocols).length == 0) {
            registerProtocols();
        }
        Laya.timer.loop(2000, this, this._pingPong);
    }

    destroy() {
        Laya.timer.clear(this, this._pingPong);
        this.close();
    }

    connect(url: string) {
        if (this.connected && this._url == url) {
            console.log(`already connect to ${this._url}`);
            return;
        }

        this._url = url;

        if (this.connected && this._socket) {
            this.close();
        }

        this._socket = new Socket(url);
        this._status = NetworkService.CONNECTING;
        this._socket.onclose = () => {
            this.clear();
            this.event(opcode.connection.disconnected);
        };
        this._socket.onerror = () => {
            this.clear();
            this.event(opcode.connection.ioerror);
        };
        this._socket.onopen = () => {
            this._status = NetworkService.OPEN;
            this.event(opcode.connection.connected);
        };
        this._socket.onmessage = (e) => this.onMessage(e);
    }

    get connected() {
        return this._status == NetworkService.OPEN;
    }

    get status() {
        return this._status;
    }

    private clear() {
        this._callbacks = {};
        this._status = NetworkService.CLOSED;
        this._socket = null;
    }

    close() {
        if (this._socket) {
            this._socket.onclose = null;
            this._socket.onmessage = null;
            this._socket.onerror = null;
            this._socket.onopen = null;
            this._socket?.close();
            this.clear();
        }
    }

    get rtt() {
        return this._rtt;
    }

    private async _pingPong() {
        if (this.connected) {
            try {
                const startTime = Laya.timer.currTimer;
                await this.call(user.c2s_ping.create({}), user.s2c_ping);
                this._rtt = (Laya.timer.currTimer - startTime) / 2;
            } catch (err) {
                this._rtt = -1;
            }
        }
    }

    send<T>(message: T) {
        this.trySend(message);
    }

    private async trySend<T>(message: T) {
        try {
            await this.call(message, null!);
        } catch (error) {
            console.warn("send:", error);
        }
    }

    // shoud use try catch
    async call<T, R>(message: T, cls: Constructor<R>) {
        return new Promise<R>((resolve, reject) => {
            const typeURL = (message as any).constructor.getTypeUrl();
            const protocol = protocols[typeURL];

            if (!protocol) {
                return reject({
                    err: errcode.NO_DESCRIPTOR,
                    message: `descriptor not found: ${typeURL}`,
                });
            }

            if (!this.connected) {
                return reject({
                    err: errcode.DISCONNECTED,
                    message: errmsg[errcode.DISCONNECTED],
                });
            }

            if (this._session >= 1 << 16) {
                this._session = 0;
            }

            // TODO: 发布版本中移除
            if (!this._ignoredLog[protocol.op]) {
                console.log("Request:", message);
            }

            const session = ++this._session;
            const data = protocol.encode(message).finish() as Uint8Array;
            const len = HEADER_LENGTH + data.length;
            const packet = new ByteBuffer(len);
            packet.writeShort(len);
            packet.writeShort(protocol.op);
            packet.writeShort(session);
            packet.writeBytes(data);
            this._socket?.send(packet.buffer);

            this._callbacks[session] = { resolve, reject };
        });
    }

    private onMessage(e: MessageEvent<any>) {
        this._buffer.append(e.data);
        this.decodeMessage();
    }

    private decodeMessage() {
        const buffSize = this._buffer.offset;
        if (this._packetSize == 0 && buffSize >= 2) {
            this._buffer.mark(buffSize);
            this._buffer.offset = 0;
            this._packetSize = this._buffer.readShort();
            this._buffer.reset();
        }
        if (this._packetSize > 0 && buffSize >= this._packetSize) {
            this._buffer.mark(buffSize);
            this._buffer.offset = 0;
            this._buffer.skip(2); // skip len

            const len = this._packetSize;
            const op = this._buffer.readShort();
            const session = this._buffer.readShort();
            const protocol = protocols[op];
            const msgBuff = this._buffer.buffer.slice(6, len);
            this._buffer.skip(len - 6);

            if (!protocol) {
                console.log(`unknonw opcode: ${op}`);
                this.ajustBuffer();
                return;
            }

            const uint8buff = new Uint8Array(msgBuff);
            const message = protocol.decode(uint8buff);

            // TODO: 发布版本中移除
            if (!this._ignoredLog[protocol.op]) {
                console.log("Response:", message);
            }

            // dispatch to network service
            try {
                this.event(protocol.op, message);
            } catch (error) {
                // TODO: report error?
                console.log("handle network message", error);
            }

            // rpc call
            const promise = this._callbacks[session];
            if (promise) {
                delete this._callbacks[session];
                promise.resolve(message);
            }
            this.ajustBuffer();
        }
    }

    private ajustBuffer() {
        this._packetSize = 0;

        if (this._buffer.offset < this._buffer.markedOffset) {
            const len = this._buffer.markedOffset - this._buffer.offset;
            const tmp = new ByteBuffer(len);
            this._buffer.copyTo(tmp, 0, this._buffer.offset, this._buffer.markedOffset);
            this._buffer.mark(0);
            this._buffer.reset();
            this._buffer.append(tmp);
            this.decodeMessage();
        } else {
            this._buffer.mark(0);
            this._buffer.reset();
        }
    }

    ignoreLog(op: number) {
        this._ignoredLog[op] = true;
    }
}
