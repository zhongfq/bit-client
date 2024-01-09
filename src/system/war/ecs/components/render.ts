import { Animation as CocosAnimation, Node, sp } from "cc";
import { ecs } from "../../../../core/ecs";

export const enum AnimationName {
    NONE,
    IDLE,
    RUN,
    ATTACK,
    SKILL,
    DEATH,
}

class Renderable extends ecs.Component {
    res: string | null = null;
    node: Node | null = null;
}

export class Animation extends Renderable {
    willPlay: AnimationName = AnimationName.NONE;
    name: AnimationName = AnimationName.NONE;

    head: Node | null = null;
    body: Node | null = null;
    foot: Node | null = null;

    names: Map<string, boolean> = new Map();
    skel: sp.Skeleton | null = null;
    clip: CocosAnimation | null = null;
}

export class Shadow extends Renderable {
    constructor(entity: ecs.Entity) {
        super(entity);
        // this.res = PREFAB_SHADOW;
    }
}
