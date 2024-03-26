import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ui } from "../../misc/ui";
import { HomeNaviMenuUI } from "../../ui-runtime/prefab/home/HomeNaviMenuUI";
import { HomeNaviMenuBtnUI } from "../../ui-runtime/prefab/home/HomeNaviMenuBtnUI";
import { HomeUI } from "../../ui-runtime/scene/HomeUI";

const { regClass, property } = Laya;

@regClass()
export class HomeDownBtnMediator extends Mediator {
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    public declare owner: HomeNaviMenuUI;

    private _currentBtn: HomeNaviMenuBtnUI | null = null;
    private _currentBox: Laya.Node | null = null;

    public override onAwake(): void {
        this.initEvent();
    }

    private initEvent() {
        this.owner.btnChest.on(Laya.Event.CLICK, () => {
            if (this._btnSelected(this.owner.btnChest)) {
                this._loadAddNode("resources/prefab/chest/chest.lh");
            }
        });
        this.owner.btnFight.on(Laya.Event.CLICK, () => {
            app.ui.replace(ui.PVP);
        });
        this.owner.btnMain.on(Laya.Event.CLICK, () => {
            if (this._btnSelected(this.owner.btnMain)) {
                app.ui.replace(ui.PVE);
            }
        });
        this.owner.btnSoldier.on(Laya.Event.CLICK, () => {
            if (this._btnSelected(this.owner.btnSoldier)) {
                this._loadAddNode("resources/prefab/soldier/soldier.lh");
            }
        });
        this.owner.btnUnion.on(Laya.Event.CLICK, () => {});
    }

    private _btnSelected(btn: HomeNaviMenuBtnUI): boolean {
        this._currentBox?.destroy(true);
        if (this._currentBtn == btn) {
            this._currentBtn.selected = !this._currentBtn.selected;
            this._currentBtn = null;
            return false;
        } else {
            if (this._currentBtn) {
                this._currentBtn.selected = !this._currentBtn.selected;
                this._currentBtn = btn;
                this._currentBtn.selected = !this._currentBtn.selected;
            } else {
                this._currentBtn = btn;
                this._currentBtn.selected = !this._currentBtn.selected;
            }
        }
        return this._currentBtn.selected;
    }

    private _loadAddNode(url: string) {
        app.loader.loadPrefab(url, undefined).then((prefab: Laya.Prefab) => {
            this._currentBox = prefab.create();
            const homeScene = this.owner.parent as HomeUI;
            homeScene.boxUI.addChild(this._currentBox);
        });
    }
}
