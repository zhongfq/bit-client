import { appBase as AppBase } from "./app.generated";
import { Constructor } from "./core/dispatcher";
import { Loader } from "./core/loader";
import { Service } from "./core/service";
import { TweenSystem } from "./core/tween/tween-system";
import { UIManager } from "./core/ui-manager";
import { opcode } from "./def/protocol";
import { ui } from "./misc/ui";
import { BagService } from "./system/bag/bag-service";
import { DataService } from "./system/data/data-service";
import { GmService } from "./system/gm/gm-service";
import { NetworkService } from "./system/network/network-service";
import { TaskService } from "./system/task/task-service";
import { VoUtil } from "./misc/vo-util";
import { WarService } from "./system/war/war-service";
import { UserService } from "./system/user/user-service";
import { MailService } from "./system/mail/mail-service";

const { regClass, property } = Laya;

@regClass()
export class Main extends AppBase {
    onAwake(): void {
        ui.register();
        app.init();
    }
}

class ServiceManager {
    readonly network: NetworkService;
    readonly data: DataService;
    readonly user: UserService;
    readonly war: WarService;
    readonly bag: BagService;
    readonly gm: GmService;
    readonly task: TaskService;
    readonly mail: MailService;

    private _services: Service<NetworkService>[] = [];

    constructor() {
        this.network = this.newService(NetworkService);
        this.user = this.newService(UserService);
        this.war = this.newService(WarService);
        this.data = this.newService(DataService);
        this.bag = this.newService(BagService);
        this.gm = this.newService(GmService);
        this.task = this.newService(TaskService);
        this.mail = this.newService(MailService);

        // ignore log
        this.network.ignoreLog(opcode.user.c2s_ping);
        this.network.ignoreLog(opcode.user.s2c_ping);
    }

    private newService<T extends Service<NetworkService>>(type: Constructor<T>): T {
        const service = new type(this.network);
        this._services.push(service);
        return service;
    }

    destroy() {
        this._services.forEach((service) => service.destroy?.());
        this._services.length = 0;
    }
}

class App {
    private static _inited = false;

    private _ui = new UIManager();
    private _loader = new Loader();

    // services
    private _service!: ServiceManager;

    constructor() {}

    get ui() {
        return this._ui;
    }

    get loader() {
        return this._loader;
    }

    get service() {
        return this._service;
    }

    async init() {
        if (App._inited) {
            return;
        }
        App._inited = true;

        // 更新缓动
        Laya.timer.frameLoop(1, this, () => {
            TweenSystem.update(Laya.timer.delta / 1000);
        });

        this._service = new ServiceManager();

        await app.service.data.load();
        // app.networkd.connect("ws://games.bitserver.wang:10001");
        // app.userd.username = "zxp";
        // await this.bagd.load();
        // this.ui.openDialog(ui.bagDialog);

        app.ui.open(ui.login);
    }
}

export const app = new App();
