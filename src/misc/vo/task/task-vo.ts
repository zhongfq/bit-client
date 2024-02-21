import { app } from "../../../app";
import { ItemTable } from "../../../def/table";
import { task } from "../../../def/proto";
import { TableUtil } from "../../../system/table/table-util";
import { VO } from "../vo-base/vo";
import { TaskMainRow, TaskBranchRow, TaskDailyRow } from "../../../def/table";

/**
 * Item
 * 道具
 */
export class TaskVo extends VO<TaskMainRow | TaskBranchRow | TaskDailyRow, task.TaskInfo> {
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

    getTableRowByCmd(cmd: task.TaskInfo): TaskMainRow | TaskBranchRow | TaskDailyRow | undefined {
        return TableUtil.getRef<TaskMainRow | TaskBranchRow | TaskDailyRow>(
            app.service.table.task,
            {
                id: cmd.id,
            }
        );
    }

    get goodsType(): number {
        return 0; //this.ref.type;
    }

    get desc(): string {
        return this.ref?.desc || ""; //this.ref.desc;
    }

    get name(): string {
        return "";
    }

    protected onGetNumber(): number {
        if (this._cmd) {
            return this._cmd.num ? this._cmd.num : 0;
        }
        return 0;
    }
    //#endregion
}
