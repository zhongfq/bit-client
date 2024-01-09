import { ecs } from "../../../../core/ecs";

export const enum ElementType {
    NONE = 0,
    KING = 1,
    HERO = 2,
    SOLDIER = 3,
    BULLET = 4,
}

export const enum SkillType {
    ATTACK = 0,
    SKILL = 1,
    TALENT = 2,
}

export class Element extends ecs.Component {
    etype: ElementType = ElementType.NONE;
    rid: number = 0;
    id: number = 0;

    hasShadow() {
        return (
            this.etype == ElementType.KING ||
            this.etype == ElementType.HERO ||
            this.etype == ElementType.SOLDIER
        );
    }

    hasHealth() {
        return (
            this.etype == ElementType.KING ||
            this.etype == ElementType.HERO ||
            this.etype == ElementType.SOLDIER
        );
    }

    isKingOrHero() {
        return this.etype === ElementType.KING || this.etype === ElementType.HERO;
    }
}
