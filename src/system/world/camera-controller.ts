import { LayaExt } from "../../core/laya";

const { regClass, property } = Laya;

@regClass()
export class CameraController extends Laya.Script {
    declare owner: Laya.Sprite3D;
    //declare owner : Laya.Sprite;

    protected camera!: Laya.Camera;

    protected target!: Laya.Sprite3D;

    protected tars: Laya.Sprite3D[] = [];

    private _up = new Laya.Vector3(0, 1, 0);

    private idx: number = 0;

    private _lastRotation: number = 0;
    private _rotation: number = 0;
    private _running: boolean = false;
    private _ratio: number = 0;

    onAwake(): void {
        this.camera = this.owner.getChildByName("Main Camera") as Laya.Camera;
        this.target = this.owner.getChildByName("mc01") as Laya.Sprite3D;

        this.tars.push(this.owner.getChildByName("mc01") as Laya.Sprite3D);
        this.tars.push(this.owner.getChildByName("mc02") as Laya.Sprite3D);
        this.tars.push(this.owner.getChildByName("mc03") as Laya.Sprite3D);
        this.tars.push(this.owner.getChildByName("mc04") as Laya.Sprite3D);
    }

    onUpdate(): void {
        const origin = this.camera.transform.position.clone() as Laya.Vector3;
        const direction = new Laya.Vector3(0, 0, -1);
        const mat: Laya.Matrix4x4 = new Laya.Matrix4x4();
        Laya.Matrix4x4.createRotationQuaternion(this.camera.transform.rotation, mat);
        Laya.Vector3.transformCoordinate(direction, mat, direction);
        direction.normalize();

        const t = -origin.y / direction.y;
        direction.scale(t, direction);
        origin.vadd(direction, origin);
        this.target.transform.position.vsub(origin, origin);
        origin.vadd(this.camera.transform.position, origin);
        this.camera.transform.position = origin;

        if (this._ratio < 1) {
            this._ratio += (Laya.timer.delta / 1000) * (1 / 0.2);
            this.target.transform.localRotationEulerY =
                this._lastRotation + (this._rotation - this._lastRotation) * this._ratio;
        }
    }

    onKeyDown(evt: Laya.Event): void {
        const target = this.target;
        let position = target.transform.position;
        switch (evt.keyCode) {
            case Laya.Keyboard.DOWN:
                position.z += 0.1;
                break;
            case Laya.Keyboard.UP:
                position.z -= 0.1;
                break;
            case Laya.Keyboard.LEFT:
                position.x -= 0.1;
                break;
            case Laya.Keyboard.RIGHT:
                position.x += 0.1;
                break;
        }
        target.transform.position = position;
    }

    startRun() {}

    stopRun() {
        this._running = false;
        const animator = this.target.getComponent(Laya.Animator);
        animator.crossFade("idle", 0.2);
    }

    setTargetRoation(rotation: number) {
        rotation += 360;
        rotation %= 360;
        this._rotation = rotation;
        if (!this._running) {
            this._running = true;
            this._ratio = 0;
            this._lastRotation = this.target.transform.localRotationEulerY;
            const animator = this.target.getComponent(Laya.Animator);
            animator.crossFade("move", 0.2);
        }
        if (this._ratio >= 1) {
            this.target.transform.localRotationEulerY = rotation;
        }
    }

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

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
