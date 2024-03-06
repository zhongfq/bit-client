import { b3 } from "../../../../../core/behavior3/behavior";
import { ecs } from "../../../../../core/ecs";
import { PveServer } from "../../pve-server";
import { ElementComponent } from "./element-component";

export class AiTreeEnv extends b3.TreeEnv {
    declare context: PveServer;
    owner: ElementComponent;

    constructor(context: PveServer, owner: ElementComponent) {
        super(context);

        this.owner = owner;
    }
}

export class AiComponent extends ecs.Component {
    res: string = "";
    tree: b3.Tree | null = null;
    env: AiTreeEnv | null = null;
}
