const { regClass } = Laya;
import { ChestItemUIBase } from "./ChestItemUI.generated";

@regClass()
export class ChestItemUI extends ChestItemUIBase {
    /**
     * 取消高亮
     */
    public normal() {
        const ani = this.getComponent(Laya.Animator2D);
        ani.play("1");
    }

    /**
     * 高亮
     */
    public hightlight() {
        const ani = this.getComponent(Laya.Animator2D);
        ani.play("2");
    }
}
