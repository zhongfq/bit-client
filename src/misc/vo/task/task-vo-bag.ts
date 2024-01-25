import proto from "../../../def/proto";
import { app } from "../../../app";
import { Constructor } from "../../../core/dispatcher";
import { DataUtil } from "../../../system/data/data-util";
import { VOBag } from "../vo-base/vo-bag";
import { TaskVo } from "./task-vo";

/**
 * ItemBag 道具
 */
export class TaskBag extends VOBag<TaskVo> {
    public Hash(t: TaskVo): string | number {
        return t.cmd?.id || 0;
    }
    init(data: proto.task.s2c_load) {
        for (let cmdData of data.tasks) {
            let vo = new TaskVo();
            vo.initByCmd(cmdData as proto.task.TaskInfo);
            this.add(vo);
        }
    }
    protected getVOClass(): Constructor<TaskVo> {
        return TaskVo;
    }
    createByRef(refId: number) {
        let clazz = this.getVOClass();
        let vo = new clazz();
        let ref = DataUtil.getRef(app.service.data.taskTable, { id: refId });
        // TODO: check ref
        vo.initByRef(ref!);
        return vo;
    }

    getByRef(refId: number): TaskVo | null {
        let tlBag = this.filter(this.getFilterOne(refId));
        if (tlBag) {
            return tlBag[0];
        }
        return null;
    }
    getFilterOne(refId: number) {
        return (t: TaskVo) => {
            if (t == null) {
                return false;
            }
            return t.refId == refId;
        };
    }
}
