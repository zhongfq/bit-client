import { TaskUIBase } from "./TaskUI.generated";

const { regClass } = Laya;

@regClass()
export class TaskUI extends TaskUIBase {
    onAwake(): void {
        this.List.array = []
        this.closeBtn.on(Laya.Event.CLICK,()=>{
            this.close();
        })
    }
}