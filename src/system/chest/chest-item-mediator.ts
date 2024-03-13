import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { TaskItemBox } from "../../ui-runtime/prefab/task/TaskItemBox";
import { TaskUI } from "../../ui-runtime/prefab/task/TaskUI";
import { TaskVo } from "../../misc/vo/task/task-vo";
import { TaskConf } from "../../def/task";
import { ChestUI } from "../../ui-runtime/prefab/chest/ChestUI";
import { ui } from "../../misc/ui";
import { ChestItemUI } from "../../ui-runtime/prefab/chest/ChestItemUI";

const { regClass, property } = Laya;

@regClass()
export class ChestItemMediator extends Mediator {
    public declare owner: ChestItemUI;
    public declare selectedIndex: number;

    public override onAwake(): void {}

    public onListRender(item: Laya.Sprite, index: number) {
        // item.updateInfo(item.dataSource);
        // item.getChildByName("imgIcon");
        const a = item.getChildByName("img/labelNum") as Laya.Label;
        const b = 21;
    }
}
