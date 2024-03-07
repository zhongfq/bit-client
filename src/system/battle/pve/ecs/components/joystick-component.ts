import { ecs } from "../../../../../core/ecs";

export class JoystickComponent extends ecs.SingletonComponent {
    initX: number = 0;
    initY: number = 0;
    initHeight: number = 0;

    degree: number = Number.MAX_VALUE;

    pressStart: Laya.Point | null = null;
}
