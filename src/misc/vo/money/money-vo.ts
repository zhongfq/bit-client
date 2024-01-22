import { app } from "../../../app";
import { ItemTable, Task } from "../../../def/data";
import { task } from "../../../def/proto";
import { DataUtil } from "../../../system/data/data-util";
import { VO } from "../vo-base/vo";

/**
 * Item
 * 道具
 */
export class MoneyVo extends VO<Task, task.TaskInfo> {
    refTable!: ItemTable;

    //#region 重载
    get refId(): number {
        return this._ref ? this._ref.id : 0;
    }

    get id(): number {
        if (this._cmd) {
            return Number(this._cmd.id);
        }
        return 0;
    }

    getRefByCmd(cmd: task.TaskInfo): Task | undefined {
        return DataUtil.getRef<Task>(app.service.data.taskTable, { id: cmd.id });
    }

    get goodsType(): number {
        return 0; //this.ref.type;
    }

    get desc(): string {
        return this.ref?.desc || ""; //this.ref.desc;
    }

    get name(): string {
        return this._ref ? this._ref.comment : "";
    }
    protected onGetNumber(): number {
        if (this._cmd) {
            return this._cmd.num ? this._cmd.num : 0;
        }
        return 0;
    }
    //#endregion
}
