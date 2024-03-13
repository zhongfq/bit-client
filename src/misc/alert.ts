import { Mediator } from "../core/ui-mediator";
import { AlertUI } from "../ui-runtime/prefab/misc/AlertUI";

@Laya.regClass()
export class AlertMediator extends Mediator {
    public override onStart(): void {
        const owner = this.owner as AlertUI;
        const args = owner.args;

        owner.title.text = args.title;
        owner.content.text = args.content;

        owner.btnOK.on(Laya.Event.CLICK, () => {
            owner.closeHandler = Laya.Handler.create(null, args.yes);
            owner.close();
        });

        owner.btnNO.on(Laya.Event.CLICK, () => {
            if (args.no) {
                owner.closeHandler = Laya.Handler.create(null, args.no);
            }
            owner.close();
        });
    }
}
