import * as b3 from "../../../../../core/behavior3/behavior";
import * as ecs from "../../../../../core/ecs";
import { SkillRow } from "../../../../../def/table";
import { PveServer } from "../../pve-server";
import { ElementComponent } from "./element-component";

export class SkillTreeEnv extends b3.TreeEnv {
    public declare context: PveServer;
    public skill: Skill;

    public constructor(context: PveServer, skill: Skill) {
        super(context);
        this.skill = skill;
    }
}

export class Skill {
    public lastUpdate: number = 0;
    public data: SkillRow;
    public res: string;
    public tree: b3.Tree | null = null;
    public env: SkillTreeEnv | null = null;
    public owner: ElementComponent;
    public running: boolean = false;

    public constructor(data: SkillRow, owner: ElementComponent) {
        this.data = data;
        this.res = `resources/data/btree/${data.lanuch_btree}.json`;
        this.owner = owner;
    }
}

export class LauncherComponent extends ecs.Component {
    public skills: Skill[] = [];
}
