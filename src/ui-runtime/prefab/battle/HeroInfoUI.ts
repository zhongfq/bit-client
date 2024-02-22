import { HeroInfoUIBase } from "./HeroInfoUI.generated";

const { regClass } = Laya;

export const enum HpStyle {
    GREEN,
    RED,
}

@regClass()
export class HeroInfoUI extends HeroInfoUIBase {
    private _hpInitWidth: number = 0;

    onAwake(): void {
        // this._hpInitWidth = this.hp.width;
    }

    onEnable(): void {
        const autoBitmap = this.hpBar.graphics as Laya.AutoBitmap;
        const tex = autoBitmap.source;
        console.log(tex);
    }

    updateHp(value: number) {
        value = Math.max(0, Math.min(1, value));
        // this.hp.width = value * this._hpInitWidth;
    }

    setHpStyle(style: HpStyle) {
        switch (style) {
            case HpStyle.GREEN:
                // this.hp.skin = "texture/battle/battle-ui/hp1.png";
                break;
            case HpStyle.RED:
                // this.hp.skin = "texture/battle/battle-ui/hp2.png";
                break;
        }
    }
}
