import { ecs } from "../../../../../core/ecs";
import { PveServer } from "../../pve-server";
import { SkillComponent } from "../components/skill-component";

export class SkillSystem extends ecs.System {
    constructor(readonly context: PveServer) {
        super();
    }

    override onAddComponent(component: ecs.Component): void {
        if (component instanceof SkillComponent) {
            this._loadSkill(component);
        }
    }

    override update(dt: number): void {}

    private async _loadSkill(skill: SkillComponent) {}
}
