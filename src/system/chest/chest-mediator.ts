import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { TaskItemBox } from "../../ui-runtime/prefab/task/TaskItemBox";
import { TaskUI } from "../../ui-runtime/prefab/task/TaskUI";
import { TaskVo } from "../../misc/vo/task/task-vo";
import { TaskConf } from "../../def/task";
import { ChestUI } from "../../ui-runtime/prefab/chest/ChestUI";
import { ui } from "../../misc/ui";

const { regClass, property } = Laya;

@regClass()
export class ChestMediator extends Mediator {
    declare owner: ChestUI;
    declare selectedIndex: number;

    onAwake(): void {
        this.initUIEvent();
        this.initServiceEvent();
        this.updateList();
    }

    initUIEvent() {
        // this.owner.listBox.renderHandler = new Laya.Handler(this, this.onListRender);
        this.owner.listBox.mouseHandler = new Laya.Handler(this, this.onListClick);
        this.owner.listBox.selectHandler = new Laya.Handler(this, this.onSelect);
        this.owner.btnOpenBox.on(Laya.Event.CLICK, () => {
            //TODO请求打开宝箱
        });
        this.owner.btnBoxReward.on(Laya.Event.CLICK, () => {
            //TODO请求领取积分奖励、播放箱子落下动画刷新界面数据
        });
        this.owner.boxHero.on(Laya.Event.CLICK, () => {
            // BOX_HERO;
            app.ui.show(ui.BOX_HERO);
        });
    }

    onSelect(index: number) {
        const cell = this.owner.listBox.cells[this.selectedIndex];
        const ani = cell.getComponent(Laya.Animator2D);
        ani.play("2");
        this.selectedIndex = this.owner.listBox.selectedIndex;
        const cell2 = this.owner.listBox.cells[this.selectedIndex];
        const ani2 = cell2.getComponent(Laya.Animator2D);
        ani2.play("1");
    }

    onListClick(type: Laya.Event, index: number) {
        if (type.type == Laya.Event.CLICK) {
            const a = 1;
        }
    }

    initServiceEvent() {
        // this.on(app.service.task, TaskService.TASK_UPDATE, () => {
        //     this.tlTaskData = [];
        //     this.tlTaskData.push(app.service.task.mainTask);
        //     this.tlTaskData = this.tlTaskData.concat(app.service.task.branchTaskBag.toArray());
        //     this.updateList();
        // });
    }

    onListRender(item: any, index: number) {
        // item.updateInfo(item.dataSource);
    }

    updateList() {
        this.owner.listBox.array = [{ a: 1 }, { a: 1 }, { a: 1 }, { a: 1 }, { a: 1 }];
        this.selectedIndex = this.owner.listBox.selectedIndex;

        const cell = this.owner.listBox.cells[this.selectedIndex];
        const ani = cell.getComponent(Laya.Animator2D);
        ani.play("1");
    }
}
