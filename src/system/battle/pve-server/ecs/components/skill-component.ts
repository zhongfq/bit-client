import { b3 } from "../../../../../core/behavior3/behavior";
import { ecs } from "../../../../../core/ecs";
import { SkillRow } from "../../../../../def/table";
import { PveServer } from "../../pve-server";

export class SkillEnv extends b3.TreeEnv {
    declare context: PveServer;
    owner!: Skill;
}

export class Skill {
    data: SkillRow;
    res: string;
    tree: b3.Tree | null = null;
    env: SkillEnv | null = null;

    running: boolean = false;

    constructor(data: SkillRow) {
        this.data = data;
        this.res = `resources/data/btree/${data.lanuch_btree}.json`;
    }
}

export class SkillComponent extends ecs.Component {
    skills: Skill[] = [];
}
