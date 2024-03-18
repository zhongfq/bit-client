import { app } from "../../../app";
import { ItemTable } from "../../../def/table";
import { task } from "../../../def/proto";
import { TableUtil } from "../../../system/table/table-util";
import { VO } from "../vo-base/vo";
import { TaskMainRow, TaskBranchRow, TaskDailyRow } from "../../../def/table";
import { TaskConf } from "../../../def/task";

/**
 * Item
 * 道具
 */
export class TaskVo extends VO<TaskMainRow | TaskBranchRow | TaskDailyRow, task.TaskInfo> {
    public refTable!: ItemTable;

    //#region 重载
    public get refId(): number {
        return this._ref ? this._ref.id : 0;
    }

    public override get id(): number {
        if (this._cmd) {
            return Number(this._cmd.id);
        }
        return 0;
    }

    public getTableRowByCmd(
        cmd: task.TaskInfo
    ): TaskMainRow | TaskBranchRow | TaskDailyRow | undefined {
        return TableUtil.getRow<TaskMainRow | TaskBranchRow | TaskDailyRow>(
            app.service.table.task,
            {
                id: cmd.id,
            }
        );
    }

    public get goodsType(): number {
        return 0; //this.ref.type;
    }

    public get desc(): string {
        return this.ref?.desc || ""; //this.ref.desc;
    }

    public get name(): string {
        return this.ref.desc;
    }

    protected onGetNumber(): number {
        if (this._cmd) {
            return this._cmd.num ? this._cmd.num : 0;
        }
        return 0;
    }

    public get tipsName(): string {
        if (this._ref.type == TaskConf.TASK_TYPE.MAIN) {
            return "主线";
        } else {
            return "支线";
        }
    }
    //#endregion
}
