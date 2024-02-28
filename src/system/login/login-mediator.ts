import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ui } from "../../misc/ui";
import { LoginUI } from "../../ui-runtime/scene/LoginUI";

const { regClass, property } = Laya;
type ServerInfo = {
    url: string;
    server_name: string;
    server_id: number;
    state_desc: string;
    state: number;
};

@regClass()
export class LoginMediator extends Mediator {
    declare owner: LoginUI;

    private _tlServerList!: ServerInfo[];
    serverData!: ServerInfo;

    override onAwake(): void {
        const Http = new Laya.HttpRequest();
        Http.once(Laya.Event.COMPLETE, (data: any) => {
            this._tlServerList = JSON.parse(data);
            const last = this._tlServerList.find((v) => v.url === app.service.login.url);
            this.serverData = last || this._tlServerList[0];
            this.updateInfo();
        });
        Http.send("http://games.bitserver.wang/public/serverlist", null, "get", "text");
        this.owner.btnLogin.on(Laya.Event.CLICK, this, this.onBtnLogin);
        this.owner.btnServer.on(Laya.Event.CLICK, this, this.onBtnServer);

        this.owner.inputAccount.text = app.service.login.username;
    }

    onBtnLogin() {
        console.log("点击了登录按钮");

        if (this.owner.inputAccount.text != "") {
            app.service.login.username = this.owner.inputAccount.text;
            app.service.login.url = this.serverData.url;
            app.service.network.connect(app.service.login.url);
        }
    }

    onBtnServer() {
        //打开服务器列表
        app.ui.show(ui.LOGIN_SERVER_LIST, {
            back: new Laya.Handler(this, this.onServerDialogClick),
            serverList: this._tlServerList,
        });
    }

    onServerDialogClick(data: ServerInfo) {
        this.serverData = data;
        this.updateInfo();
    }

    updateInfo() {
        this.owner.labelServerName.text =
            "· " + this.serverData.state_desc + "  " + this.serverData.server_name;
    }
}
