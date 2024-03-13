import { ecs } from "../../../../../core/ecs";
import { PvpContext } from "../../pvp-context";
import { CameraComponent } from "../components/camera-component";
import { AnimationComponent } from "../components/render-component";

export class CameraSystem extends ecs.System {
    private _ray: Laya.Ray = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3());
    private _rayMat: Laya.Matrix4x4 = new Laya.Matrix4x4();

    public constructor(public readonly context: PvpContext) {
        super();
    }

    public update(dt: number): void {
        const camera = this.ecs.getSingletonComponent(CameraComponent)!;

        const cameraTransform = this.context.camera.transform;
        const ray = this._ray;
        const rayMat = this._rayMat;
        cameraTransform.position.cloneTo(ray.origin);
        ray.direction.set(0, 0, -1);
        Laya.Matrix4x4.createRotationQuaternion(cameraTransform.rotation, rayMat);
        Laya.Vector3.transformCoordinate(ray.direction, rayMat, ray.direction);
        ray.direction.normalize();

        // 光从相机原点出发到地面所需时间
        const t = -ray.origin.y / ray.direction.y;
        ray.direction.scale(t, ray.direction);
        ray.origin.vadd(ray.direction, ray.origin);
        camera.focus.vsub(ray.origin, ray.origin);
        ray.origin.y = 0;
        ray.origin.vadd(cameraTransform.position, ray.origin);
        cameraTransform.position = ray.origin;

        // if (this._ratio < 1) {
        //     this._ratio += (Laya.timer.delta / 1000) * (1 / 0.2);
        //     this.target.transform.localRotationEulerY =
        //         this._lastRotation + (this._rotation - this._lastRotation) * this._ratio;
        // }
    }
}
