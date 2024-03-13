// eslint-disable-next-line
declare var wx: any;

export class Socket {
    public static readonly CONNECTING = WebSocket.CONNECTING;
    public static readonly OPEN = WebSocket.OPEN;
    public static readonly CLOSING = WebSocket.CLOSING;
    public static readonly CLOSED = WebSocket.CLOSED;

    public onclose: ((this: Socket, ev: CloseEvent) => any) | null = null;
    public onerror: ((this: Socket, ev: Event) => any) | null = null;
    public onmessage: ((this: Socket, ev: MessageEvent) => any) | null = null;
    public onopen: ((this: Socket, ev: Event) => any) | null = null;

    private _ws: WebSocket | null = null;
    private _wxs: any;

    public constructor(public readonly url: string, protocols?: string | string[]) {
        if (Laya.Browser.onMiniGame || Laya.Browser.onTTMiniGame) {
            console.log("connect to wx:", url);
            this._wxs = wx.connectSocket({ url, protocols, tcpNoDelay: true });
            this._wxs.onClose((e: any) => this.onclose?.(e));
            this._wxs.onError((e: any) => this.onerror?.(e));
            this._wxs.onMessage((e: any) => this.onmessage?.(e));
            this._wxs.onOpen((e: any) => this.onopen?.(e));
        } else {
            console.log("connect to url:", url);
            this._ws = new WebSocket(url, protocols);
            this._ws.binaryType = "arraybuffer";
            this._ws.onclose = (e) => this.onclose?.(e);
            this._ws.onerror = (e) => this.onerror?.(e);
            this._ws.onmessage = (e) => this.onmessage?.(e);
            this._ws.onopen = (e) => this.onopen?.(e);
        }
    }

    public get binaryType(): BinaryType {
        if (this._ws) {
            return this._ws.binaryType;
        }
        return "blob";
    }

    public set binaryType(value: BinaryType) {
        if (this._ws) {
            this._ws.binaryType = value;
        }
    }

    public get bufferedAmount(): number {
        if (this._ws) {
            return this._ws.bufferedAmount;
        }
        return 0;
    }

    public get protocol(): string {
        if (this._ws) {
            return this._ws.protocol;
        }
        return "";
    }

    public get readyState(): number {
        if (this._ws) {
            return this._ws.readyState;
        }
        return 0;
    }

    public get extensions(): string {
        if (this._ws) {
            return this._ws.extensions;
        }
        return "";
    }

    public close(code?: number, reason?: string): void {
        if (this._ws) {
            this._ws.close(code, reason);
        } else if (this._wxs) {
            this._wxs.close({ code, reason });
        }
    }

    public send(data: string | ArrayBuffer): void {
        if (this._ws) {
            this._ws.send(data);
        } else if (this._wxs) {
            this._wxs.send({ data });
        }
    }
}
