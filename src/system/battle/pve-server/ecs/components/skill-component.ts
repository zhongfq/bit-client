import { b3 } from "../../../../../core/behavior3/behavior";
import { ecs } from "../../../../../core/ecs";
import { SkillRow } from "../../../../../def/table";
import { PveServer } from "../../pve-server";
import { ElementComponent } from "./element-component";

export class SkillTreeEnv extends b3.TreeEnv {
    declare context: PveServer;
    skill: Skill;

    constructor(context: PveServer, skill: Skill) {
        super(context);
        this.skill = skill;
    }
}

export class Skill {
    lastUpdate: number = 0;
    data: SkillRow;
    res: string;
    tree: b3.Tree | null = null;
    env: SkillTreeEnv | null = null;
    owner: ElementComponent;
    running: boolean = false;

    constructor(data: SkillRow, owner: ElementComponent) {
        this.data = data;
        this.res = `resources/data/btree/${data.lanuch_btree}.json`;
        this.owner = owner;
    }
}

export class SkillComponent extends ecs.Component {
    skills: Skill[] = [];
}
