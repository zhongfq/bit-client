const { regClass } = Laya;
import { ListCreateDataType, VirtuallyList } from "../../../core/virtuallyList/virtually-list";
import { VirtuallyListNewUIBase } from "./VirtuallyListNewUI.generated";

@regClass()
export class VirtuallyListNewUI extends VirtuallyListNewUIBase {
    rectangle!: Laya.Rectangle;

    override onAwake(): void {
        this.rectangle = new Laya.Rectangle(0, 0, this.width, this.height);
        this.scrollRect = this.rectangle;
    }

    setArrayData(val: any[], type: ListCreateDataType) {
        this.getComponent(VirtuallyList).setArrayData(val, type);
    }

    addData(val: any) {
        this.getComponent(VirtuallyList).addData(val);
    }
}
