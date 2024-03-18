import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ui } from "../../misc/ui";
import { ChatMsgVo } from "../../misc/vo/chat/chat-msg-vo";
import { ChatRoleVo } from "../../misc/vo/chat/chat-role-vo";
import { HomeNaviMenuBtnUI } from "../../ui-runtime/prefab/home/HomeNaviMenuBtnUI";
import { HomeUI } from "../../ui-runtime/scene/HomeUI";
import { PveUI } from "../../ui-runtime/scene/PveUI";
import { PvpUI } from "../../ui-runtime/scene/PvpUI";
import { ChatService } from "../chat/chat-service";
import { TableUtil } from "../table/table-util";

@Laya.regClass()
export class HomeMediator extends Mediator {
    public declare owner: HomeUI;

    private _currentBtn?: HomeNaviMenuBtnUI;
    private _currentBox?: Laya.Node;

    private _pve?: PveUI;
    private _pvp?: PvpUI;

    public override onAwake() {
        this._initBtn();
        this._initServiceEvent();
        this._initChat();
        this._initNaviMenu();

        // 加载数据
        app.service.troop.requestLoad();

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

    private _initServiceEvent() {
        this.on(app.service.chat, ChatService.CHAT_UPDATE, (data: ChatMsgVo) => {
            this._initChat();
        });
    }

    private _initChat() {
        const msg = app.service.chat.chatMsgVoBag.getOne();
        if (msg) {
            const role = app.service.chat.chatRoleVoBag.get(msg.id) as ChatRoleVo;
            const reg = /{(\d+)}/gm;
            const str = msg.cmd?.text || "";
            const ubbStr = str.replace(reg, function (match, name) {
                const emojiRow = TableUtil.getRow(app.service.table.emoji, { id: Number(name) });
                if (emojiRow) {
                    return `<img src='resources/texture/emoji/emoji/${emojiRow.icon}.png' width=30 height = 30/>`;
                } else {
                    return match;
                }
            });
            // this.owner.labelMsg.text = `${role.cmd?.name}:${ubbStr}`;
        }
    }

    public override onKeyDown(evt: Laya.Event): void {
        if (evt.ctrlKey && evt.keyCode == Laya.Keyboard.B) {
            app.ui.show(ui.GM);
        }
    }

    private _initBtn() {
        this.owner.btnPve.on(Laya.Event.CLICK, () => {
            app.ui.replace(ui.PVE);
        });
        this.owner.btnBag.on(Laya.Event.CLICK, () => {
            app.ui.show(ui.BAG);
        });
        this.owner.btnMail.on(Laya.Event.CLICK, () => {
            app.ui.show(ui.MAIL);
        });
        this.owner.btnShop.on(Laya.Event.CLICK, () => {
            app.service.shop.load({ shopId: 1 });
            app.ui.show(ui.SHOP);
        });
        // this.owner.chat_box.on(Laya.Event.CLICK, () => {
        //     app.ui.show(ui.CHAT);
        // });
        // this.owner.List.array = ["1111", "1111", "1111", "1111", "1111"];
    }

    //-------------------------------------------------------------------------
    // 处理导航功能
    //-------------------------------------------------------------------------
    private _initNaviMenu() {
        const naviMenu = this.owner.naviMenu;
        naviMenu.btnChest.on(Laya.Event.CLICK, () => {
            if (this._currentBtn === naviMenu.btnChest) {
                this._closeBox();
                this._activatePveOrPvp(true);
            } else {
                this._closeBox();
                this._activatePveOrPvp(false);
                this._currentBtn = naviMenu.btnChest;
                this._currentBtn.selected = true;
                this._loadAddNode("resources/prefab/chest/chest.lh");
            }
        });
        naviMenu.btnFight.on(Laya.Event.CLICK, () => {
            this._loadPvp();
        });
        naviMenu.btnMain.on(Laya.Event.CLICK, () => {
            this._loadPve();
        });
        naviMenu.btnSoldier.on(Laya.Event.CLICK, () => {
            // if (this._naviBtnSelected(this.owner.naviMenu.btnSoldier)) {
            //     this._loadAddNode("resources/prefab/soldier/soldier.lh");
            // }
        });
        naviMenu.btnUnion.on(Laya.Event.CLICK, () => {});
    }

    private _loadPvp() {
        app.ui.load(ui.PVP)?.then((scene) => {
            this._closeBox();
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

    private _loadPve() {
        app.ui.load(ui.PVE)?.then((scene) => {
            this._closeBox();
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

    private _closeBox() {
        if (this._currentBtn) {
            this._currentBtn.selected = false;
            this._currentBtn = undefined;
            this._currentBox?.destroy();
            this._currentBox = undefined;
        }
    }

    private _loadAddNode(url: string) {
        Laya.loader.load(url, undefined).then((prefab: Laya.Prefab) => {
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
