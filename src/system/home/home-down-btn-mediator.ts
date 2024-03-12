import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ui } from "../../misc/ui";
import { HomeDownBtnBoxNewUI } from "../../ui-runtime/prefab/home/HomeDownBtnBoxNewUI";
import { HomeDownBtnItemUI } from "../../ui-runtime/prefab/home/HomeDownBtnItemUI";
import { HomeUI } from "../../ui-runtime/scene/HomeUI";

const { regClass, property } = Laya;

@regClass()
export class HomeDownBtnMediator extends Mediator {
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    declare owner: HomeDownBtnBoxNewUI;

    private _currentBtn: HomeDownBtnItemUI | null = null;
    private _currentBox: Laya.Node | null = null;

    override onAwake(): void {
        this.initEvent();
    }

    initEvent() {
        this.owner.btnChest.on(Laya.Event.CLICK, () => {
            if (this._btnSelected(this.owner.btnChest)) {
                this._loadAddNode("resources/prefab/chest/chest.lh");
            }
        });
        this.owner.btnFight.on(Laya.Event.CLICK, () => {
            if (this._btnSelected(this.owner.btnFight)) {
                this._loadAddNode("resources/prefab/role/role.lh");
            }
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

    private _btnSelected(btn: HomeDownBtnItemUI): boolean {
        this._currentBox?.destroy();
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
        Laya.loader.load(url, undefined).then((prefab: Laya.Prefab) => {
            this._currentBox = prefab.create();
            const homeScene = this.owner.parent as HomeUI;
            homeScene.boxUI.addChild(this._currentBox);
        });
    }
}
