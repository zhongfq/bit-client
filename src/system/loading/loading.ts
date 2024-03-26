import { app } from "../../app";
import { ChatConf } from "../../def/chat";
import { ItemConf } from "../../def/item";
import { TaskConf } from "../../def/task";
import { ui } from "../../misc/ui";
import { LoadingUI } from "../../ui-runtime/scene/LoadingUI";

const { regClass, property } = Laya;
@regClass()
export class LoadingMediator extends Laya.Script {
    public declare owner: LoadingUI;
    public virtualProgress: number = 0;
    public progress: number = 0;
    public isOpen: boolean = false;

    public override onAwake(): void {
        let isOpen = false;
        this.owner.progress.changeHandler = new Laya.Handler(this, (val: number) => {
            if (val == 1 && !isOpen) {
                app.ui.replace(ui.HOME_SCENE);
                isOpen = true;
            }
            if (val < 1 && Math.round(val * 100) == 100) {
                this.owner.imgBar.value = 1;
            }
        });
        this._starGame();
    }

    public async _starGame() {
        this.owner.imgBar.value = 0;
        await app.service.user.loadProfile();
        await app.service.table.load();
        this.progress = 20;
        await app.service.bag.load({ bagId: ItemConf.BAG_TYPE.ITEM });
        await app.service.bag.load({ bagId: ItemConf.BAG_TYPE.SOLDIER });
        await app.service.bag.load({ bagId: ItemConf.BAG_TYPE.SOLDIER_PENDANT });
        this.progress = 40;

        await app.service.task.load({ taskType: TaskConf.TASK_TYPE.MAIN });
        await app.service.task.load({ taskType: TaskConf.TASK_TYPE.BRANCH });
        this.progress = 60;

        await app.service.user.loadMonye();

        await app.service.mail.load();
        await app.service.chat.load({ channel: ChatConf.CHAT_CHANNEL.WORLD });
        await app.service.chest.load();
        await app.service.soldier.loadPendant();
        await app.service.soldier.loadSoldier();
        await app.service.soldier.loadTrain();
        await Laya.loader.load("resources/texture/emoji/emoji.atlas");
        this.progress = 100;
    }

    public override onUpdate(): void {
        this.updateProg();
        this.updateView();
    }

    public updateView() {
        if (this.isOpen) return;
        this.owner.imgBar.value = this.virtualProgress * 0.01;
        if (this.owner.imgBar.value < 1 && Math.round(this.owner.imgBar.value * 100) == 100) {
            this.owner.imgBar.value = 1;
            this.isOpen = true;
            app.ui.replace(ui.HOME_SCENE);
        } else if (this.owner.imgBar.value >= 1) {
            this.isOpen = true;
            app.ui.replace(ui.HOME_SCENE);
        }
    }

    public updateProg() {
        if (this.virtualProgress < 100) {
            this.virtualProgress = this.lerp(this.virtualProgress, this.progress);
        } else {
            this.virtualProgress = 100;
        }
    }

    public lerp(cur_value: number, last_value: number) {
        // console.log(Laya.timer.delta);
        return cur_value + (last_value - cur_value) * Laya.timer.delta * 0.01;
    }
}
