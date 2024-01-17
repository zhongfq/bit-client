import proto from "../../../def/proto.js";
import { app } from "../../../app";
import { Constructor } from "../../../core/dispatcher";
import { DataUtil } from "../../data/data-util";
import { VOBag } from "../vo-base/vo-bag";
import { TaskVo } from "./task-vo";

/**
 * ItemBag 道具
 */
export class TaskBag extends VOBag<TaskVo> {
    public Hash(t: TaskVo): string | number {
        return t.id;
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
        vo.initByRef(ref);
        return vo;
    }

    getByRef(refId: number): TaskVo | null {
        let tlBag = this.getBagAsArray(this.getFilterOne(refId));
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
