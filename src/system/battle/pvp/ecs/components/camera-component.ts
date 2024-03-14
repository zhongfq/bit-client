import * as ecs from "../../../../../core/ecs";

export class CameraComponent implements ecs.SingletonComponent {
    public focus: Laya.Vector3 = new Laya.Vector3();

    // eslint-disable-next-line @typescript-eslint/no-shadow
    public constructor(public readonly ecs: ecs.World) {}
}
