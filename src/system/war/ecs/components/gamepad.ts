import { ecs } from "../../../../core/ecs";

export class Card extends ecs.Component {
    // ui!: UiCard;
    icon!: string;
    name!: string;
}

export class Gamepad extends ecs.SingletonComponent {
    // uicards: UiCard[] = [];
}
