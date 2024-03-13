const { regClass } = Laya;
import { VirtuallyListNew } from "../../../core/virtuallyList/virtually-list-new";
import { VirtuallyListNewUIBase } from "./VirtuallyListNewUI.generated";

@regClass()
export class VirtuallyListNewUI extends VirtuallyListNewUIBase {
    public rectangle!: Laya.Rectangle;

    public override onAwake(): void {
        this.rectangle = new Laya.Rectangle(0, 0, this.width, this.height);
        this.scrollRect = this.rectangle;
    }

    public setArrayData(val: any[]) {
        this.getComponent(VirtuallyListNew).setArrayData(val);
    }

    public addData(val: any, isFist?: boolean) {
        this.getComponent(VirtuallyListNew).addData(val, isFist);
    }

    public scrollTop() {
        this.getComponent(VirtuallyListNew).scrollTop();
    }

    public scrollDown() {
        this.getComponent(VirtuallyListNew).scrollDown();
    }
}
