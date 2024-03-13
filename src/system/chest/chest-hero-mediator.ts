import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { TaskItemBox } from "../../ui-runtime/prefab/task/TaskItemBox";
import { TaskUI } from "../../ui-runtime/prefab/task/TaskUI";
import { TaskVo } from "../../misc/vo/task/task-vo";
import { TaskConf } from "../../def/task";
import { ChestUI } from "../../ui-runtime/prefab/chest/ChestUI";
import { ui } from "../../misc/ui";
import { ChestItemUI } from "../../ui-runtime/prefab/chest/ChestItemUI";
import { ChestHeroUI } from "../../ui-runtime/prefab/chest/ChestHeroUI";
import { HeroVo } from "../../misc/vo/goods/hero-vo";
import { hero } from "../../def/proto";
import { IconNode } from "../../misc/icon/icon-node";
import { IconUI } from "../../ui-runtime/prefab/icon/IconUI";

const { regClass, property } = Laya;

@regClass()
export class ChestHeroMediator extends Mediator {
    public declare owner: ChestHeroUI;
    public declare selectedIndex: number;

    public override onAwake(): void {
        this.initUIEvent();
        this.initServiceEvent();
        this.updateList();
    }

    public initUIEvent() {
        this.owner.listItem.renderHandler = new Laya.Handler(this, this.onListRender);
        this.owner.listItem.selectHandler = new Laya.Handler(this, this.onSelect);
    }

    public onSelect(index: number) {}

    public initServiceEvent() {
        // this.on(app.service.task, TaskService.TASK_UPDATE, () => {
        //     this.tlTaskData = [];
        //     this.tlTaskData.push(app.service.task.mainTask);
        //     this.tlTaskData = this.tlTaskData.concat(app.service.task.branchTaskBag.toArray());
        //     this.updateList();
        // });
    }

    public onListRender(item: IconUI, index: number) {
        item.updateGoods(this.owner.listItem.array[index].heroVo);
        item.imgLock.visible = this.owner.listItem.array[index].isLock;
        // item.getChildByName("imgIcon");
        // item.labelNum.text = "x0";
    }

    public updateList() {
        const listData = [];
        for (const key in app.service.table.chest.hero) {
            const row = app.service.table.chest.hero[key];
            const heroVo = new HeroVo();
            heroVo.initByTableRow(app.service.table.hero[row.hero_id]);
            listData.push({
                heroVo: heroVo,
                isLock: app.service.chest.heroIds.indexOf(row.hero_id) < 0,
            });
        }
        this.owner.listItem.array = listData; //app.service.table.chest.hero;
        // this.selectedIndex = this.owner.listItem.selectedIndex;
    }
}
