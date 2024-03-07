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
            this._hp = this.getChildByName("hp") as ImageBar;
            this._mp = this.getChildByName("mp") as ImageBar;
            this._hpTxt = this.getChildByName("hpTxt") as Laya.Label;
            this._name = this.getChildByName("username") as Laya.Label;
            this._avatar = this.getChildByName("avatar") as Laya.Image;
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
