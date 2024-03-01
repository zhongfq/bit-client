import { ecs } from "../../../../../core/ecs";

export class JoystickComponent extends ecs.SingletonComponent {
    initX: number = 0;
    initY: number = 0;

    degree: number = 0;

    running: boolean = false;
    pressStart: Laya.Point | null = null;
}
