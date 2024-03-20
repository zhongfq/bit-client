import * as b3 from "../../../../../core/behavior3/behavior";
import * as ecs from "../../../../../core/ecs";
import { PveServer } from "../../pve-server";
import { AiTreeEnv } from "./ai-component";
import { ElementComponent } from "./element-component";
import { Skill } from "./skill-component";

export class BulletTreeEnv extends AiTreeEnv {
    public declare context: PveServer;
    public bullet: BulletComponent;

    public constructor(context: PveServer, owner: ElementComponent, bullet: BulletComponent) {
        super(context, owner);
        this.owner = owner;
        this.bullet = bullet;
    }
}

export class BulletComponent extends ecs.Component {
    public skill!: Skill;
    public lastUpdate: number = 0;
    public btree!: string;
    public tree: b3.Tree | null = null;
    public env: BulletTreeEnv | null = null;
}
