import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ui } from "../../misc/ui";
import { HomeNaviMenuBtnUI } from "../../ui-runtime/prefab/home/HomeNaviMenuBtnUI";
import { HomeUI } from "../../ui-runtime/scene/HomeUI";
import { PveUI } from "../../ui-runtime/scene/PveUI";
import { PvpUI } from "../../ui-runtime/scene/PvpUI";

@Laya.regClass()
export class HomeMediator extends Mediator {
    public declare owner: HomeUI;

    private _currentBtn?: HomeNaviMenuBtnUI;
    private _currentBox?: Laya.Node;
    private _pve?: PveUI;
    private _pvp?: PvpUI;
    private _loading: boolean = false;

    public override onAwake() {
        this._initBtn();
        this._initServiceEvent();
        this._initNaviMenu();

        // 默认显示主线任务
        this._loadPve();
    }

    public override onDestroy() {
        this._pve?.destroy();
        this._pve = undefined;
        this._pvp?.destroy();
        this._pvp = undefined;
        super.onDestroy();
    }

    private _initServiceEvent() {}

    public override onKeyDown(evt: Laya.Event): void {
        if (evt.ctrlKey && evt.keyCode == Laya.Keyboard.B) {
            app.ui.show(ui.GM);
        }
    }

    private _initBtn() {
        this.owner.btnEdge.on(Laya.Event.CLICK, () => {
            this.owner.rightMenu.visible = true;
        });
    }

    //-------------------------------------------------------------------------
    // 处理导航功能
    //-------------------------------------------------------------------------
    private _initNaviMenu() {
        const naviMenu = this.owner.naviMenu;
        naviMenu.btnChest.on(Laya.Event.CLICK, () => {
            if (this._loading) {
                return;
            }
            if (this._currentBtn != naviMenu.btnChest) {
                this._closeBox();
                this._activatePveOrPvp(false);
                this._currentBtn = naviMenu.btnChest;
                this._currentBtn.selected = true;
                this._loadAddNode("resources/prefab/chest/chest.lh");
            }
        });
        naviMenu.btnFight.on(Laya.Event.CLICK, () => {
            if (this._loading) {
                return;
            }
            if (this._currentBtn != naviMenu.btnFight) {
                this._activatePveOrPvp(true);
                this._closeBox();
                this._currentBtn = naviMenu.btnFight;
                this._currentBtn.selected = true;
                this._loadPvp();
            }
        });
        naviMenu.btnMain.on(Laya.Event.CLICK, () => {
            if (this._loading) {
                return;
            }
            if (this._currentBtn != naviMenu.btnMain) {
                this._activatePveOrPvp(true);
                this._closeBox();
                this._currentBtn = naviMenu.btnMain;
                this._currentBtn.selected = true;
                this._loadPve();
            }
        });
        naviMenu.btnSoldier.on(Laya.Event.CLICK, () => {
            if (this._currentBtn != naviMenu.btnSoldier) {
                this._closeBox();
                this._activatePveOrPvp(false);
                this._currentBtn = naviMenu.btnSoldier;
                this._currentBtn.selected = true;
                this._loadAddNode("resources/prefab/soldier/soldier.lh");
            }
        });
        naviMenu.btnUnion.on(Laya.Event.CLICK, () => {});

        this._currentBtn = naviMenu.btnMain;
        this._currentBtn.selected = true;
    }

    private _loadPvp() {
        if (!this._pvp) {
            this._loading = true;
            app.ui.load(ui.PVP)?.then((scene) => {
                this._loading = false;
                // this._closeBox();
                this.owner.bg.visible = false;
                this.owner.boxUI.visible = false;
                this._pve?.destroy();
                this._pve = undefined;
                this._pvp = scene as PvpUI;
                this._pvp.width = this.owner.width;
                this._pvp.height = this.owner.height;
                this.owner.battle.addChild(this._pvp);
                this.owner.stage.addChildAt(this._pvp.scene3D, 0);
            });
        }
    }

    private _loadPve() {
        if (!this._pve) {
            this._loading = true;
            app.ui.load(ui.PVE)?.then((scene) => {
                this._loading = false;
                // this._closeBox();
                this.owner.bg.visible = false;
                this.owner.boxUI.visible = false;
                this._pvp?.destroy();
                this._pvp = undefined;
                this._pve = scene as PveUI;
                this._pve.width = this.owner.width;
                this._pve.height = this.owner.height;
                this.owner.battle.addChild(this._pve);
                this.owner.stage.addChildAt(this._pve.scene3D, 0);
            });
        }
    }

    private _closeBox() {
        if (this._currentBtn) {
            this._currentBtn.selected = false;
            this._currentBtn = undefined;
            this._currentBox?.destroy();
            this._currentBox = undefined;
        }
    }

    private _loadAddNode(url: string) {
        app.loader.loadPrefab(url, undefined).then((prefab: Laya.Prefab) => {
            this._currentBox = prefab.create();
            this.owner.boxUI.addChild(this._currentBox);
        });
    }

    private _activatePveOrPvp(active: boolean) {
        if (this._pve) {
            if (this._pve.active != active) {
                this._pve.active = active;
                this._pve.visible = active;
                this._pve.scene3D.visible = active;
                this._pve.scene3D.active = active;
            }
        } else if (this._pvp) {
            if (this._pvp.active != active) {
                this._pvp.active = active;
                this._pvp.visible = active;
                this._pvp.scene3D.visible = active;
                this._pvp.scene3D.active = active;
            }
        }
        this.owner.bg.visible = !active;
        this.owner.boxUI.visible = !active;
    }
}
