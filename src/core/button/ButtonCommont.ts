const { regClass, property } = Laya;

@regClass()
export class ButtonCommont extends Laya.Script {
    public declare owner: Laya.Button;

    @property(Number)
    public sclaeX: number = 0.8;
    @property(Number)
    public sclaeY: number = 0.8;
    public curScaleX!: number;
    public curScaleY!: number;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    public override onAwake(): void {
        this.curScaleX = this.owner.scaleX;
        this.curScaleY = this.owner.scaleY;
        this.owner.on(Laya.Event.MOUSE_DOWN, () => {
            Laya.Tween.to(this.owner, { scaleX: 0.8, scaleY: 0.8 }, 30);
            this.owner.once(Laya.Event.MOUSE_OUT, () => {
                Laya.Tween.to(this.owner, { scaleX: this.curScaleX, scaleY: this.curScaleY }, 30);
                this.owner.offAll(Laya.Event.MOUSE_UP);
            });
            this.owner.once(Laya.Event.MOUSE_UP, () => {
                this.owner.offAll(Laya.Event.MOUSE_OUT);
                Laya.Tween.to(this.owner, { scaleX: this.curScaleX, scaleY: this.curScaleY }, 30);
            });
        });
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
