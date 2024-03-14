import * as ecs from "../../../../../core/ecs";
import { PveServer } from "../../pve-server";
import { SkillComponent, SkillTreeEnv } from "../components/skill-component";

export class SkillSystem extends ecs.System {
    public declare context: PveServer;

    public static readonly TICK = 0.1;

    public override onAddComponent(component: ecs.Component) {
        if (component instanceof SkillComponent) {
            this._loadSkill(component);
        }
    }

    public override update(dt: number) {
        const time = this.context.time;

        this.ecs.getComponents(SkillComponent).forEach((skill) => {
            for (const v of skill.skills) {
                if (v.running && time - v.lastUpdate > SkillSystem.TICK && v.tree && v.env) {
                    v.tree.run(v.env);
                    v.lastUpdate = time;
                    v.running = v.tree.isRunning(v.env);
                }
            }
        });
    }

    private async _loadSkill(skill: SkillComponent) {
        for (const v of skill.skills) {
            const tree = await this.context.loadAiTree(v.res);
            if (tree) {
                v.tree = tree;
                v.env = new SkillTreeEnv(this.context, v);
                v.running = false;
            }
        }
    }
}
