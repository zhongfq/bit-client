import { appBase as AppBase } from "./app.generated";
import { Constructor, toEventType } from "./core/dispatcher";
import { Loader } from "./core/loader";
import { Service } from "./core/service";
import { TweenSystem } from "./core/tween/tween-system";
import { UIManager } from "./core/ui-manager";
import { opcode } from "./def/protocol";
import { AlertArgs, ui } from "./misc/ui";
import { BagService } from "./system/bag/bag-service";
import { ChestService } from "./system/chest/chest-service";
import { DataService } from "./system/data/data-service";
import { GmService } from "./system/gm/gm-service";
import { NetworkService } from "./system/network/network-service";
import { UserService } from "./system/user/user-service";
import { WarService } from "./system/war/war-service";

const { regClass, property } = Laya;

@regClass()
export class Main extends AppBase {
    onAwake(): void {
        ui.register();
        app.init();
        this.Button2.on(Laya.Event.CLICK,()=>{
            app.ui.show(ui.bagDialog)
        })
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
    gmd!: GmService;

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

        // 更新缓动
        Laya.timer.frameLoop(1, this, () => {
            TweenSystem.update(Laya.timer.delta / 1000);
        });

        this._createService();

        await app.datad.load();
        app.networkd.connect("ws://games.bitserver.wang:10001");
        app.userd.username = "zxp";
        this.networkd.on(toEventType(opcode.user.s2c_login), async () => {
            
            // app.ui.show(ui.bagDialog);
        });
        // await this.bagd.load();
        // this.ui.openDialog(ui.bagDialog);

        // app.ui.open(ui.login);
        let Http = new Laya.HttpRequest()
        Http.once(Laya.Event.COMPLETE,(data:any)=>{
            let a =data;
        });
        Http.send("http://games.bitserver.wang/public/serverlist")
    }
    
    private _createService() {
        this.networkd = this.newService(NetworkService);
        this.userd = this.newService(UserService);
        this.chestd = this.newService(ChestService);
        this.ward = this.newService(WarService);
        this.datad = this.newService(DataService);
        this.bagd = this.newService(BagService);
        this.gmd = this.newService(GmService);
        

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
