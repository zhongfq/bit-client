import * as ecs from "../../../../../core/ecs";
import { PveServer } from "../../pve-server";
import { LauncherComponent, SkillTreeEnv } from "../components/skill-component";

export class SkillSystem extends ecs.System {
    public declare context: PveServer;

    public static readonly TICK = 0.1;

    public override onAddComponent(component: ecs.Component) {
        if (component instanceof LauncherComponent) {
            this._loadSkill(component);
        }
    }

    public override update(dt: number) {
        const time = this.context.time;

        this.ecs.getComponents(LauncherComponent).forEach((launcher) => {
            for (const v of launcher.skills) {
                if (v.running && time - v.lastUpdate > SkillSystem.TICK && v.tree && v.env) {
                    v.tree.run(v.env);
                    v.lastUpdate = time;
                    v.running = v.tree.isRunning(v.env);
                }
            }
        });
    }

    private async _loadSkill(launcher: LauncherComponent) {
        for (const v of launcher.skills) {
            const tree = await this.context.loadAiTree(v.res);
            if (tree) {
                v.tree = tree;
                v.env = new SkillTreeEnv(this.context, v);
                v.running = false;
            }
        }
    }
}
