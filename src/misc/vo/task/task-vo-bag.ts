import proto from "../../../def/proto";
import { app } from "../../../app";
import { Constructor } from "../../../core/dispatcher";
import { TableUtil } from "../../../system/table/table-util";
import { VoBag } from "../vo-base/vo-bag";
import { TaskVo } from "./task-vo";

export class TaskBag extends VoBag<TaskVo> {
    public Hash(t: TaskVo): string | number {
        return t.cmd?.id || 0;
    }

    public init(data: proto.task.s2c_load) {
        for (const cmdData of data.tasks) {
            const vo = new TaskVo();
            vo.initByCmd(cmdData as proto.task.TaskInfo);
            this.add(vo);
        }
    }

    protected getVOClass(): Constructor<TaskVo> {
        return TaskVo;
    }

    public createByRef(refId: number) {
        const clazz = this.getVOClass();
        const vo = new clazz();
        const ref = TableUtil.getRow(app.service.table.task, { id: refId });
        // TODO: check ref
        vo.initByTableRow(ref!);
        return vo;
    }

    public getByRef(refId: number): TaskVo | null {
        const tlBag = this.filter(this.getFilterOne(refId));
        if (tlBag) {
            return tlBag[0];
        }
        return null;
    }

    public getFilterOne(refId: number) {
        return (t: TaskVo) => {
            if (t == null) {
                return false;
            }
            return t.refId == refId;
        };
    }
}
