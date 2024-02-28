import { tween } from "../core/tween/tween";
import { Mediator } from "../core/ui-mediator";
import { ToastUI } from "../ui-runtime/prefab/misc/ToastUI";

@Laya.regClass()
export class ToastMediator extends Mediator {
    override onStart(): void {
        const owner = this.owner as ToastUI;
        const args = owner.args;

        const oldWidth = owner.content.textField.textWidth;
        owner.content.text = args.content;
        const newWidth = owner.content.textField.textWidth;
        owner.width += newWidth - oldWidth;

        owner.alpha = 0;
        tween(owner)
            .to(0.5, { alpha: 1 }, { easing: "fade" })
            .delay(args.duration ?? 1.5)
            .call(() => {
                tween(owner)
                    .to(0.5, { y: owner.y - 100 }, { easing: "sineOut" })
                    .call(() => {
                        owner.destroy();
                    })
                    .start();
            })
            .to(0.4, { alpha: 0 }, { easing: "fade" })
            .start();
    }
}
