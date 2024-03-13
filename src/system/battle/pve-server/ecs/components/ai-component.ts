import { b3 } from "../../../../../core/behavior3/behavior";
import { ecs } from "../../../../../core/ecs";
import { PveServer } from "../../pve-server";
import { ElementComponent } from "./element-component";

export class AiTreeEnv extends b3.TreeEnv {
    public declare context: PveServer;
    public owner: ElementComponent;

    public constructor(context: PveServer, owner: ElementComponent) {
        super(context);

        this.owner = owner;
    }
}

export class AiComponent extends ecs.Component {
    public active: boolean = true;
    public lastUpdate: number = 0;
    public res: string = "";
    public tick: number = 0;
    public tree: b3.Tree | null = null;
    public env: AiTreeEnv | null = null;
}
