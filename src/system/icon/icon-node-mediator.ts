import { app } from "../../app";
import { ui } from "../../misc/ui";
import { IconUI } from "../../ui-runtime/prefab/icon/IconUI";
import { ItemVo } from "../bag/vo/goods/item-vo";

const { regClass, property } = Laya;

@regClass()
export class IconNodeMediator extends Laya.Script {
    @property(Boolean)
    isNoShowTips!: boolean;
    private clickBack: Function | null = null;
    owner!: IconUI;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this.owner.on(Laya.Event.CLICK, (evn: Laya.Event) => {
            this.onIconClick(evn);
        });
        // if(this.isNoShowTips){
        //     this.owner.on(Laya.Event.CLICK,this.onIconClick)
        // }else{
        //     this.owner.offAll()
        //     // this.owner.setclick
        // }
    }
    onIconClick(evn: Laya.Event) {
        if (this.isNoShowTips && this.clickBack) {
            this.clickBack(evn);
            return;
        }
        let itemData = this.owner.dataSource as ItemVo;
        if (!itemData.cmd) {
            //没背包数据
            if (itemData.ref?.composite == 1) {
                //可合成
                //打开合成弹窗
                app.ui.show(ui.itemSynthesisDialog, { vo: itemData });
            }
        } else if (itemData.cmd) {
            //有背包数据
            if (itemData.ref?.sub_type == 1) {
                //宝箱类型
                //打开宝箱弹窗
            } else if (itemData.ref?.use == 1) {
                //可使用类型
                //打开使用弹窗
            } else {
                app.ui.show(ui.itemTipsDialog, {
                    x: evn.stageX,
                    y: evn.stageY,
                    itemTipsParam: this.owner.dataSource,
                });
            }
        }
    }
    setClickHandler(func: Function | null) {
        this.clickBack = func;
    }
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}
