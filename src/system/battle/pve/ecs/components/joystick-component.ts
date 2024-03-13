import { ecs } from "../../../../../core/ecs";

export class JoystickComponent implements ecs.SingletonComponent {
    public initX: number = 0;
    public initY: number = 0;
    public initHeight: number = 0;

    public degree: number = Number.MAX_VALUE;

    pressStart: Laya.Point | null = null;

    // eslint-disable-next-line @typescript-eslint/no-shadow
    constructor(readonly ecs: ecs.World) {}
}
