import { appBase as AppBase } from "./app.generated";
import { Constructor } from "./core/dispatcher";
import { Loader } from "./core/loader";
import { Service } from "./core/service";
import { UIManager } from "./core/ui-manager";
import { opcode } from "./def/protocol";
import { ui } from "./misc/ui";
import { BagService } from "./system/bag/bag-service";
import { ChestService } from "./system/chest/chest-service";
import { DataService } from "./system/data/data-service";
import { NetworkService } from "./system/network/network-service";
import { UserService } from "./system/user/user-service";
import { WarService } from "./system/war/war-service";

const { regClass, property } = Laya;

@regClass()
export class Main extends AppBase {
    onAwake(): void {
        ui.register();
        app.init();

        // app.ui.toast("这是一个油菜测试是不是...");
        // app.ui.alert("xx", "xxdafdfa", () => {});
    }
}

class App {
    private static _inited = false;

    private _services: Service<NetworkService>[] = [];
    private _ui = new UIManager();
    private _loader = new Loader();

    // services
    networkd!: NetworkService;
    chestd!: ChestService;
    datad!: DataService;
    userd!: UserService;
    ward!: WarService;
    bagd!: BagService;

    constructor() {}

    get ui() {
        return this._ui;
    }

    get loader() {
        return this._loader;
    }

    async init() {
        if (App._inited) {
            return;
        }
        App._inited = true;
        this._createService();

        await app.datad.load();
    }

    private _createService() {
        this.networkd = this.newService(NetworkService);
        this.userd = this.newService(UserService);
        this.chestd = this.newService(ChestService);
        this.ward = this.newService(WarService);
        this.datad = this.newService(DataService);
        this.bagd = this.newService(BagService);

        // ignore log
        this.networkd.ignoreLog(opcode.user.c2s_ping);
        this.networkd.ignoreLog(opcode.user.s2c_ping);
    }

    private newService<T extends Service<NetworkService>>(type: Constructor<T>): T {
        const service = new type(this.networkd);
        this._services.push(service);
        return service;
    }
}

export const app = new App();
