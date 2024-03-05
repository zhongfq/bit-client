import { appBase as AppBase } from "./app.generated";
import { Constructor } from "./core/dispatcher";
import { IVector3Like } from "./core/laya";
import { Loader } from "./core/loader";
import { Service } from "./core/service";
import { TweenSystem } from "./core/tween/tween-system";
import { UIManager } from "./core/ui-manager";
import { opcode } from "./def/protocol";
import { ui } from "./misc/ui";
import { BagService } from "./system/bag/bag-service";
import { ExportNodes } from "./system/battle/pve-server/export-nodes";
import { ChatService } from "./system/chat/chat-service";
import { ChestService } from "./system/chest/chest-service";
import { GmService } from "./system/gm/gm-service";
import { LoginService } from "./system/login/login-service";
import { MailService } from "./system/mail/mail-service";
import { NetworkService } from "./system/network/network-service";
import { ToastService } from "./system/network/toast-service";
import { ShopService } from "./system/shop/shop-service";
import { TableService } from "./system/table/table-service";
import { TaskService } from "./system/task/task-service";
import { UserService } from "./system/user/user-service";
import { WorldService } from "./system/world/world-service";

const { regClass, property } = Laya;

@regClass()
export class Main extends AppBase {
    override onAwake(): void {
        // new BehaviorTest().start();

        // TODO: rm, use nodejs to write file
        console.log(new ExportNodes().stringify());

        ui.register();
        app.init();
    }
}

class ServiceManager {
    readonly network: NetworkService;
    readonly table: TableService;
    readonly user: UserService;
    readonly login: LoginService;
    readonly world: WorldService;
    readonly bag: BagService;
    readonly gm: GmService;
    readonly task: TaskService;
    readonly mail: MailService;
    readonly shop: ShopService;
    readonly toast: ToastService;
    readonly chat: ChatService;
    readonly chest: ChestService;

    private _services: Service<NetworkService>[] = [];

    constructor() {
        this.network = this.newService(NetworkService);
        this.user = this.newService(UserService);
        this.login = this.newService(LoginService);
        this.world = this.newService(WorldService);
        this.table = this.newService(TableService);
        this.bag = this.newService(BagService);
        this.gm = this.newService(GmService);
        this.task = this.newService(TaskService);
        this.mail = this.newService(MailService);
        this.shop = this.newService(ShopService);
        this.toast = this.newService(ToastService);
        this.chat = this.newService(ChatService);
        this.chest = this.newService(ChestService);
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

    init() {
        if (App._inited) {
            return;
        }
        App._inited = true;

        // 更新缓动
        Laya.timer.frameLoop(1, this, () => {
            TweenSystem.update(Laya.timer.delta / 1000);
        });

        this._service = new ServiceManager();

        app.ui.open(ui.LOGIN_SCENE);

        const t: unknown = "";

        console.log("tcheck", t ? "true" : "false");

        const offset = new Laya.Vector3(-0.6, 0, 0);
        const transform = new Laya.Transform3D();
        transform.localRotationEulerY = 90;
        const out = new Laya.Vector3();
        transform.localToGlobal(offset, out);
        console.log(out);
    }

    async test() {
        const t = this.trace();
        const t1 = this.trace();
        console.log(t);
        console.log(t1);
        console.log(t == t1, t === t1);
        console.log("test");
    }

    async trace() {
        return 0;
    }
}

export const app = new App();
