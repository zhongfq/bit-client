const { regClass } = Laya;
import { VirtuallyListNew } from "../../../core/virtuallyList/virtually-list-new";
import { VirtuallyListNewUIBase } from "./VirtuallyListNewUI.generated";

@regClass()
export class VirtuallyListNewUI extends VirtuallyListNewUIBase {
    rectangle!: Laya.Rectangle;

    override onAwake(): void {
        this.rectangle = new Laya.Rectangle(0, 0, this.width, this.height);
        this.scrollRect = this.rectangle;
    }

    setArrayData(val: any[]) {
        this.getComponent(VirtuallyListNew).setArrayData(val);
    }

    addData(val: any, isFist?: boolean) {
        this.getComponent(VirtuallyListNew).addData(val, isFist);
    }

    scrollTop() {
        this.getComponent(VirtuallyListNew).scrollTop();
    }

    scrollDown() {
        this.getComponent(VirtuallyListNew).scrollDown();
    }
}
