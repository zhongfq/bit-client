import { ecs } from "../../../../core/ecs";

export class BattleComponent extends ecs.Component {
    battleUid!: number;
    fighterEids: number[] = [];
    startTime!: number;
}
