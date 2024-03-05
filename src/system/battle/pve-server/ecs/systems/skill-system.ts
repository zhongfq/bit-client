import { ecs } from "../../../../../core/ecs";
import { PveServer } from "../../pve-server";
import { SkillComponent, SkillTreeEnv } from "../components/skill-component";

export class SkillSystem extends ecs.System {
    constructor(readonly context: PveServer) {
        super();
    }

    override onAddComponent(component: ecs.Component) {
        if (component instanceof SkillComponent) {
            this._loadSkill(component);
        }
    }

    override update(dt: number) {
        this.ecs.getComponents(SkillComponent).forEach((skill) => {
            for (const v of skill.skills) {
                if (v.running && v.tree && v.env) {
                    v.tree.run(v.env);
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
