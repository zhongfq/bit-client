import { ecs } from "../../../../../core/ecs";

export class JoystickComponent implements ecs.SingletonComponent {
    initX: number = 0;
    initY: number = 0;
    initHeight: number = 0;

    degree: number = Number.MAX_VALUE;

    pressStart: Laya.Point | null = null;

    // eslint-disable-next-line @typescript-eslint/no-shadow
    constructor(readonly ecs: ecs.World) {}
}
