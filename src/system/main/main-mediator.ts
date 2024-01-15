import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ui } from "../../misc/ui";
import { MainSceneUI } from "../../ui-runtime/scene/main-scene/MainSceneUI";

const { regClass, property } = Laya;

@regClass()
export class MainMediator extends Mediator {
    owner!: MainSceneUI;
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this.initBtn()
        
    }
    
    onKeyDown(evt: Laya.Event): void {
        if(evt.ctrlKey&&evt.keyCode == Laya.Keyboard.B){
            app.ui.show(ui.gmDialog)
        }
    }
    initBtn(){
        this.owner.btnBag.on(Laya.Event.CLICK,()=>{
            app.ui.show(ui.bagDialog);
        })
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