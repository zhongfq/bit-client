const { regClass } = Laya;

@regClass()
export class RotateRevertComponent extends Laya.Script {
    public declare owner: Laya.Sprite3D;

    private _transform!: Laya.Transform3D;
    private _parentTransform!: Laya.Transform3D;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    public override onAwake(): void {
        this._transform = this.owner.transform;

        const parent = this.owner.parent as Laya.Sprite3D;
        this._parentTransform = parent?.transform;
    }

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    public override onUpdate(): void {
        if (!this._transform || !this._parentTransform) {
            return;
        }
        this._transform.localRotationEulerY = -this._parentTransform.localRotationEulerY;
    }
}
