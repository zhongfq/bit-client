import { Node, ProgressBar } from "cc";
import { ecs } from "../../../../core/ecs";

export class Health extends ecs.Component {
    maxHp: number = 0;
    hp: number = 0;
    maxMp: number = 0;
    mp: number = 0;
    subHp: Array<number> = [];
    dodge: boolean = false;
    critical: boolean = false;

    node: Node | null = null;
    pb1: ProgressBar | null = null;
    pb2: ProgressBar | null = null;
}
