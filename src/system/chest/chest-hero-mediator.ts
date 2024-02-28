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

const { regClass, property } = Laya;

@regClass()
export class ChestHeroMediator extends Mediator {
    declare owner: ChestHeroUI;
    declare selectedIndex: number;

    override onAwake(): void {
        this.initUIEvent();
        this.initServiceEvent();
        this.updateList();
    }

    initUIEvent() {
        this.owner.listItem.renderHandler = new Laya.Handler(this, this.onListRender);
        this.owner.listItem.selectHandler = new Laya.Handler(this, this.onSelect);
    }

    onSelect(index: number) {}

    initServiceEvent() {
        // this.on(app.service.task, TaskService.TASK_UPDATE, () => {
        //     this.tlTaskData = [];
        //     this.tlTaskData.push(app.service.task.mainTask);
        //     this.tlTaskData = this.tlTaskData.concat(app.service.task.branchTaskBag.toArray());
        //     this.updateList();
        // });
    }

    onListRender(item: ChestItemUI, index: number) {
        // item.updateInfo(item.dataSource);
        // item.getChildByName("imgIcon");
        item.labelNum.text = "x0";
    }

    updateList() {
        const listData = [];
        for (const chestRow of app.service.table.chest.chest) {
            listData.push({ row: chestRow, cmd: app.service.chest.chestInfo.get(chestRow.id) });
        }
        this.owner.listItem.array = listData;
        this.selectedIndex = this.owner.listItem.selectedIndex;
    }
}
