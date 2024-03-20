import * as b3 from "../../../../../core/behavior3/behavior";
import * as ecs from "../../../../../core/ecs";
import { SkillRow } from "../../../../../def/table";
import { PveServer } from "../../pve-server";
import { AiTreeEnv } from "./ai-component";
import { ElementComponent } from "./element-component";

export class SkillTreeEnv extends AiTreeEnv {
    public declare context: PveServer;
    public skill: Skill;

    public constructor(context: PveServer, owner: ElementComponent, skill: Skill) {
        super(context, owner);
        this.owner = owner;
        this.skill = skill;
    }
}

export class Skill {
    public lastUpdate: number = 0;
    public lastLaunch: number = 0;
    public data: SkillRow;
    public btree: string;
    public tree: b3.Tree | null = null;
    public env: SkillTreeEnv | null = null;
    public owner: ElementComponent;
    public running: boolean = false;

    public constructor(data: SkillRow, owner: ElementComponent) {
        this.data = data;
        this.btree = `resources/data/btree/${data.lanuch_btree}.json`;
        this.owner = owner;
    }
}

export class LauncherComponent extends ecs.Component {
    public skills: Skill[] = [];
}
