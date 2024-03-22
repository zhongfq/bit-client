import * as ecs from "../../../../../core/ecs";
import * as b3 from "../../../../../core/behavior3/behavior";
import { PveServer } from "../../pve-server";
import { BulletComponent, BulletTreeEnv } from "../components/bullet-compoment";
import { ElementComponent } from "../components/element-component";

export class BulletSystem extends ecs.System {
    public declare context: PveServer;

    public static readonly TICK = 0.1;

    public override onAddComponent(component: ecs.Component) {
        if (component instanceof BulletComponent) {
            this._loadBulletAi(component);
        }
    }

    public override update(dt: number) {
        const time = this.context.time;
        this.ecs.getComponents(BulletComponent).forEach((bullet) => {
            if (time - bullet.lastUpdate > BulletSystem.TICK && bullet.tree && bullet.env) {
                const status = bullet.tree.run(bullet.env);
                if (status !== b3.Status.RUNNING) {
                    this.context.removeElement(bullet.getComponent(ElementComponent)!, false);
                }
            }
        });
    }

    private async _loadBulletAi(bullet: BulletComponent) {
        const tree = await this.context.loadAiTree(bullet.btree);
        if (tree && bullet.alive && bullet.skill.env) {
            bullet.tree = tree;
            bullet.env = new BulletTreeEnv(this.context, bullet.skill.owner, bullet);
            bullet.env.setValue("__skill_targets__", bullet.skill.env.getValue("targets"));
        }
    }
}
