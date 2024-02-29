import { app } from "../../app";
import { ChatConf } from "../../def/chat";
import { TaskConf } from "../../def/task";
import { ui } from "../../misc/ui";
import { LoadingUI } from "../../ui-runtime/scene/LoadingUI";

const { regClass, property } = Laya;
@regClass()
export class LoadingMediator extends Laya.Script {
    declare owner: LoadingUI;
    virtualProgress: number = 0;
    progress: number = 0;

    override onAwake(): void {
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
        await app.service.user.loadProfile();
        await app.service.table.load();
        this.progress = 20;
        await app.service.bag.load({ bagId: 1 }).then();
        this.progress = 40;

        await app.service.task.load({ taskType: TaskConf.TASK_TYPE.MAIN });
        await app.service.task.load({ taskType: TaskConf.TASK_TYPE.BRANCH });
        this.progress = 60;

        await app.service.user.loadMonye();

        await app.service.mail.load();
        await app.service.chat.load({ channel: ChatConf.CHAT_CHANNEL.WORLD });
        await app.service.chest.load();
        await Laya.loader.load("resources/texture/emoji/emoji.atlas");
        this.progress = 100;
    }

    override onUpdate(): void {
        this.updateProg();
        this.updateView();
    }

    updateView() {
        this.owner.progress.value = this.virtualProgress * 0.01;
        this.owner.progress.bar.sizeGrid;
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
