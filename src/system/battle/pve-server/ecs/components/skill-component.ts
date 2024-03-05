import { b3 } from "../../../../../core/behavior3/behavior";
import { ecs } from "../../../../../core/ecs";

export class SkillEnv extends b3.TreeEnv {
    owner!: Skill;

    constructor(context: b3.Context) {
        super(context);
    }
}

export class Skill {
    res: string = "";
    tree: b3.Tree | null = null;
    env: SkillEnv | null = null;

    running: boolean = false;
}

export class LauncherComponent extends ecs.Component {
    skills: Map<number, Skill> = new Map();
}
