const { regClass } = Laya;
import { VirtuallyListUIBase } from "./VirtuallyListUI.generated";

@regClass()
export class VirtuallyListUI extends VirtuallyListUIBase {
    rectangle!: Laya.Rectangle;
    onAwake(): void {
        this.rectangle = new Laya.Rectangle(0, 0, this.width, this.height);
        this.scrollRect = this.rectangle;
    }
}
