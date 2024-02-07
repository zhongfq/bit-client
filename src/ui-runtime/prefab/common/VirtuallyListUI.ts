const { regClass } = Laya;
import { ListCreateDataType, VirtuallyList } from "../../../core/virtuallyList/virtually-list";
import { VirtuallyListUIBase } from "./VirtuallyListUI.generated";

@regClass()
export class VirtuallyListUI extends VirtuallyListUIBase {
    rectangle!: Laya.Rectangle;

    onAwake(): void {
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
