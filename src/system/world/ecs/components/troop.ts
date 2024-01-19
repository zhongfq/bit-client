import { ecs } from "../../../../core/ecs";
import { world } from "../../../../def/world";

export class Owner extends ecs.Component {
    rid: number = 0;
    name: string = "";
}

export enum TroopType {
    PLAYER,
    SOLDIER,
}

export class TroopMember extends ecs.Component {
    standIdx!: number;
}

export class Troop extends ecs.Component {
    members: Map<number, TroopMember> = new Map();
}
