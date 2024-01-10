import { LayaExt } from "../core/laya";
import { Mediator } from "../core/ui-mediator";
import { ToastUI } from "../prefab/misc/ToastUI";

@Laya.regClass()
export class ToastMediator extends Mediator {
    onStart(): void {
        const owner = this.owner as ToastUI;
        const args = owner.args;

        const oldWidth = owner.content.textField.textWidth;
        owner.content.text = args.content;
        const newWidth = owner.content.textField.textWidth;
        owner.width += newWidth - oldWidth;

        owner.alpha = 0;
        LayaExt.Tween.to(owner, { alpha: 1 }, 500, Laya.Ease.sineIn);
    }
}
