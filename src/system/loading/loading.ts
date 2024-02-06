import { app } from "../../app";
import { ChatConf } from "../../def/chat";
import { ui } from "../../misc/ui";
import { LoadingUI } from "../../ui-runtime/scene/LoadingUI";

const { regClass, property } = Laya;
@regClass()
export class LoadingMediator extends Laya.Script {
    declare owner: LoadingUI;
    virtualProgress: number = 0;
    progress: number = 0;
    onAwake(): void {
        this.owner.progress.changeHandler = new Laya.Handler(this, (val: number) => {
            if (val == 1) {
                app.ui.replace(ui.HOME_SCENE);
            }
            if (val < 1 && Math.round(val * 100) == 100) {
                this.owner.progress.value = 1;
            }
        });
        this._starGame();
    }
    async _starGame() {
        this.owner.progress.value = 0;
        await app.service.table.load();
        this.progress = 20;
        await app.service.bag.load({ bagId: 1 }).then();
        this.progress = 40;

        await app.service.task.load({ taskType: 2 });
        this.progress = 60;

        await app.service.user.loadMonye();
        this.progress = 80;

        await app.service.mail.load();
        await app.service.user.loadProfile();
        await app.service.chat.load({ channel: ChatConf.CHAT_CHANNEL.WORLD });
        this.progress = 100;
    }
    onUpdate(): void {
        this.updateProg();
        this.updateView();
    }
    updateView() {
        this.owner.progress.value = this.virtualProgress * 0.01;
    }
    updateProg() {
        if (this.virtualProgress < 100) {
            this.virtualProgress = this.lerp(this.virtualProgress, this.progress);
        } else {
            this.virtualProgress = 100;
        }
    }
    lerp(cur_value: number, last_value: number) {
        // console.log(Laya.timer.delta);
        return cur_value + (last_value - cur_value) * Laya.timer.delta * 0.01;
    }
}
