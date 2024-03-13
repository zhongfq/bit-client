import { ImageBar } from "../../misc/ImageBar";
import { HeadInfoUIBase } from "./HeadInfoUI.generated";

const { regClass } = Laya;

export const enum HeadInfoStyle {
    OUR,
    FRIEND,
    ENEMY,
}

export type HeadInfoData = {
    name?: string;
    hp: number;
    maxHp: number;
    mp: number;
    maxMp: number;
    style: HeadInfoStyle;
    avatar?: string;
    offset: number;
};

@regClass()
export class HeadInfoUI extends HeadInfoUIBase {
    private _data?: HeadInfoData;

    private _bg?: Laya.Image;
    private _hp?: ImageBar;
    private _hpTxt?: Laya.Label;
    private _mp?: ImageBar;
    private _name?: Laya.Label;
    private _avatar?: Laya.Image;

    override onEnable(): void {
        if (this._data) {
            this.update(this._data);
        }
    }

    update(data: HeadInfoData) {
        this._data = data;
        if (!this._hp) {
            this._bg = this.getChildByName("bg") as Laya.Image | undefined;
            this._hp = this.getChildByName("hp") as ImageBar | undefined;
            this._mp = this.getChildByName("mp") as ImageBar | undefined;
            this._hpTxt = this.getChildByName("hpTxt") as Laya.Label | undefined;
            this._name = this.getChildByName("username") as Laya.Label | undefined;
            this._avatar = this.getChildByName("avatar") as Laya.Image | undefined;

            if (this._data.style === HeadInfoStyle.ENEMY) {
                const atlasPath = "resources/texture/battle/battle-troop";
                if (this._bg) {
                    this._bg.skin = `${atlasPath}/ui_fight_RoleInfoBg2.png`;
                }
                if (this._hp) {
                    this._hp.skin = `${atlasPath}/sb_fight_Blood4.png`;
                }
            }
        }
        if (this._hp) {
            this._hp.value = Math.max(0, Math.min(1, data.hp / data.maxHp));
            if (this._hpTxt) {
                this._hpTxt.text = Math.ceil(data.hp).toFixed(0);
            }
        }
        if (this._name && data.name) {
            this._name.text = data.name;
        }
        if (this._avatar && data.avatar) {
            this._avatar.skin = data.avatar;
        }
        if (this._mp) {
            this._mp.value = Math.max(0, Math.min(1, data.mp / data.maxMp));
        }
    }
}
