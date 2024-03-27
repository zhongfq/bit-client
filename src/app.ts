import { appBase as AppBase } from "./app.generated";
import { Constructor, ContextChecker } from "./core/dispatcher";
import { Loader } from "./core/loader";
import { Service } from "./core/service";
import { TweenSystem } from "./core/tween/tween-system";
import { UIManager } from "./core/ui-manager";
import { opcode } from "./def/protocol";
import { ui } from "./misc/ui";
import { BagService } from "./system/bag/bag-service";
import { ExportNodes } from "./system/battle/pve-server/export-nodes";
import { PvpService } from "./system/battle/pvp/pvp-service";
import { ChatService } from "./system/chat/chat-service";
import { ChestService } from "./system/chest/chest-service";
import { GmService } from "./system/gm/gm-service";
import { LoginService } from "./system/login/login-service";
import { MailService } from "./system/mail/mail-service";
import { NetworkService } from "./system/network/network-service";
import { ToastService } from "./system/network/toast-service";
import { ShopService } from "./system/shop/shop-service";
import { SoldierService } from "./system/soldier/soldier-service";
import { TableService } from "./system/table/table-service";
import { TaskService } from "./system/task/task-service";
import { TroopService } from "./system/troop/troop-service";
import { UserService } from "./system/user/user-service";

@Laya.regClass()
export class Main extends AppBase {
    public override async onAwake() {
        // new BehaviorTest().start();

        if (Laya.Browser.onPC) {
            Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        }
        console.log(new ExportNodes().stringify());

        ui.register();
        app.init();
    }
}

class ServiceManager {
    public readonly network: NetworkService;
    public readonly table: TableService;
    public readonly user: UserService;
    public readonly login: LoginService;
    public readonly bag: BagService;
    public readonly gm: GmService;
    public readonly task: TaskService;
    public readonly mail: MailService;
    public readonly shop: ShopService;
    public readonly toast: ToastService;
    public readonly chat: ChatService;
    public readonly chest: ChestService;
    public readonly pvp: PvpService;
    public readonly soldier: SoldierService;
    public readonly troop: TroopService;

    private _services: Service<NetworkService>[] = [];

    public constructor() {
        this.network = this.newService(NetworkService);
        this.user = this.newService(UserService);
        this.login = this.newService(LoginService);
        this.table = this.newService(TableService);
        this.bag = this.newService(BagService);
        this.gm = this.newService(GmService);
        this.task = this.newService(TaskService);
        this.mail = this.newService(MailService);
        this.shop = this.newService(ShopService);
        this.toast = this.newService(ToastService);
        this.chat = this.newService(ChatService);
        this.chest = this.newService(ChestService);
        this.pvp = this.newService(PvpService);
        this.soldier = this.newService(SoldierService);
        this.troop = this.newService(TroopService);
        // ignore log
        this.network.ignoreLog(opcode.user.c2s_ping);
        this.network.ignoreLog(opcode.user.s2c_ping);
    }

    private newService<T extends Service<NetworkService>>(type: Constructor<T>): T {
        const service = new type(this.network);
        this._services.push(service);
        return service;
    }

    public destroy() {
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

    public constructor() {}

    public get ui() {
        return this._ui;
    }

    public get loader() {
        return this._loader;
    }

    public get service() {
        return this._service;
    }

    public init() {
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
    }

    public async sleep(frame: number, checker: ContextChecker) {
        return new Promise<void>((resolve) => {
            Laya.timer.frameOnce(frame, null, () => {
                if (!checker || checker()) {
                    resolve();
                }
            });
        });
    }
}

export const app = new App();
