import { ecs } from "../../../../core/ecs";
import { Buff } from "../components/buff";
import { GamePlayer } from "../../game-player";

export class BuffSystem extends ecs.System {
    constructor(readonly context: GamePlayer) {
        super();
    }

    onAddComponent(buff: ecs.Component): void {
        if (buff instanceof Buff) {
            // assert(!buff.node);
            // const data = this.context.getBuff(buff.id);
            // buff.node = this.context.instantiate(data.res);
            // const anim = buff.entity.getComponent(Animation);
            // if (buff.position == BuffPosition.BODY) {
            //     anim?.body?.addChild(buff.node);
            // } else if (buff.position == BuffPosition.HEAD) {
            //     anim?.head?.addChild(buff.node);
            // } else if (buff.position == BuffPosition.FOOT) {
            //     anim?.foot?.addChild(buff.node);
            // }
        }
    }

    onRemoveComponent(buff: ecs.Component): void {
        if (buff instanceof Buff) {
            buff.node?.destroy();
            buff.node = null;
        }
    }

    update(dt: number): void {}
}
