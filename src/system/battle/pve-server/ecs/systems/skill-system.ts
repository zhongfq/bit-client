import { ecs } from "../../../../../core/ecs";
import { PveServer } from "../../pve-server";
import { LauncherComponent, SkillEnv } from "../components/skill-component";

export class SkillSystem extends ecs.System {
    constructor(readonly context: PveServer) {
        super();
    }

    override onAddComponent(component: ecs.Component): void {
        if (component instanceof LauncherComponent) {
            this._loadSkill(component);
        }
    }

    override update(dt: number): void {}

    private async _loadSkill(skill: LauncherComponent) {}
}
