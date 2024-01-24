import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ui } from "../../misc/ui";
import { LoginUI } from "../../ui-runtime/scene/LoginUI";

const { regClass, property } = Laya;
type ServerData = {
    port: number;
    host: string;
    server_name: string;
    server_id: number;
    state_desc: string;
    state: number;
};

@regClass()
export class LoginMediator extends Mediator {
    declare owner: LoginUI;

    _tlServerList!: any[];
    serverData!: ServerData;

    onStart(): void {
        let Http = new Laya.HttpRequest();
        Http.once(Laya.Event.COMPLETE, (data: any) => {
            this._tlServerList = JSON.parse(data);
            this.serverData = this._tlServerList[0];
            this.updateInfo();
        });
        Http.send("http://games.bitserver.wang/public/serverlist", null, "get", "text");
        this.owner.btnLogin.on(Laya.Event.CLICK, this, this.onBtnLogin);
        this.owner.btnServer.on(Laya.Event.CLICK, this, this.onBtnServer);

        // this.handle(opcode.connection.connected, this.onConnected);

        this.owner.inputAccount.text = app.service.user.username;
    }

    onBtnLogin() {
        if (this.owner.inputAccount.text != "") {
            const { host, port } = this.serverData;
            app.service.network.connect(`ws://${host}:${port}`);
            app.service.user.username = this.owner.inputAccount.text;
        }
    }

    onBtnServer() {
        //打开服务器列表
        app.ui.show(ui.loginServerDialog, {
            back: new Laya.Handler(this, this.onServerDialogClick),
            serverList: this._tlServerList,
        });
    }

    onServerDialogClick(data: ServerData) {
        this.serverData = data;
        this.updateInfo();
    }

    updateInfo() {
        this.owner.labelServerName.text =
            "· " + this.serverData.state_desc + "  " + this.serverData.server_name;
    }
}
