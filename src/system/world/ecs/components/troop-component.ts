import { ecs } from "../../../../core/ecs";
import { world } from "../../../../def/world";

export class OwnerComponent extends ecs.Component {
    rid: number = 0;
    name: string = "";
}

export enum TroopType {
    PLAYER,
    SOLDIER,
}

export class MemberComponent extends ecs.Component {
    standIdx!: number;
}

export class TroopComponent extends ecs.Component {
    members: Map<number, MemberComponent> = new Map();
}
