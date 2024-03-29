import { app } from "../../app";
import { Callback } from "../../core/dispatcher";
import { ui } from "../../misc/ui";
import { ItemVo } from "../../misc/vo/goods/item-vo";
import { IconUI } from "../../ui-runtime/prefab/icon/IconUI";

const { regClass, property } = Laya;

@regClass()
export class IconNode extends Laya.Script {
    public declare owner: IconUI;

    @property(Boolean)
    public isNoShowTips!: boolean;
    private clickBack: Callback | null = null;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    public override onAwake(): void {
        this.owner.on(Laya.Event.CLICK, (evn: Laya.Event) => {
            this.onIconClick(evn);

            Laya.SoundManager.playSound("");
        });
    }

    public onIconClick(evn: Laya.Event) {
        if (this.isNoShowTips && this.clickBack) {
            this.clickBack(evn);
            return;
        }
        const itemData = this.owner.dataSource as ItemVo;
        if (!itemData) {
            return;
        }
        if (!itemData.cmd) {
            //没背包数据
            if (itemData.ref?.composite == 1) {
                //可合成
                //打开合成弹窗
                app.ui.show(ui.ITEM_SYNTHESIS, { vo: itemData });
            }
        } else if (itemData.cmd) {
            //有背包数据
            if (itemData.ref?.sub_type == 1) {
                //宝箱类型
                //打开宝箱弹窗
                app.ui.show(ui.BAG_BOX_USE, { vo: itemData });
            } else if (itemData.ref?.use == 1) {
                //可使用类型
                //打开使用弹窗
            } else {
                app.ui.show(ui.ITEM_TIPS, {
                    x: evn.stageX,
                    y: evn.stageY,
                    itemTipsParam: this.owner.dataSource,
                });
            }
        }
    }

    public setClickHandler(func: Callback | null) {
        this.clickBack = func;
    }
}
