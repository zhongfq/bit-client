import { Constructor, Node } from "cc";
import { ecs } from "../../../../core/ecs";

export const enum BuffType {
    ATTR = "ATTR",
    WATER = "WATER",
    FIRE = "FIRE",
    BLOOD = "BLOOD",
    DIZZINESS = "DIZZINESS",
    LOCK_FEED = "LOCK_FEED",
    SILENCE = "SILENCE",
    DISARM = "DISARM",
    CONFUSION = "CONFUSION",
    SLEEP = "SLEEP",
    SLOW_MOVE = "SLOW_MOVE",
    SLOW_ATTACK = "SLOW_ATTACK",
    CTL_FREE = "CTL_FREE",
    INVINCIBLE = "INVINCIBLE",
}

export const enum BuffPosition {
    FOOT,
    BODY,
    HEAD,
}

export class Buff extends ecs.Component {
    static classes: { [k: string]: Constructor<Buff> } = {};

    node: Node | null = null;
    position: BuffPosition = BuffPosition.HEAD;

    id: number = 0;
    stack: number = 0;
    expired: number = 0;
}

export class AttrBuff extends Buff {}
export class WaterBuff extends Buff {}
export class FireBuff extends Buff {}
export class BloodBuff extends Buff {
    constructor(entity: ecs.Entity) {
        super(entity);
        this.position = BuffPosition.BODY;
    }
}
export class DizzinessBuff extends Buff {}
export class LockFeedBuff extends Buff {}
export class SilenceBuff extends Buff {}
export class DisarmBuff extends Buff {}
export class ConfusionBuff extends Buff {}
export class SleepBuff extends Buff {}
export class SlowMoveBuff extends Buff {}
export class SlowAttackBuff extends Buff {}
export class CtlFreeBuff extends Buff {}
export class InvincibleBuff extends Buff {}

Buff.classes[BuffType.ATTR] = AttrBuff;
Buff.classes[BuffType.WATER] = WaterBuff;
Buff.classes[BuffType.FIRE] = FireBuff;
Buff.classes[BuffType.BLOOD] = BloodBuff;
Buff.classes[BuffType.DIZZINESS] = DizzinessBuff;
Buff.classes[BuffType.LOCK_FEED] = LockFeedBuff;
Buff.classes[BuffType.SILENCE] = SilenceBuff;
Buff.classes[BuffType.DISARM] = DisarmBuff;
Buff.classes[BuffType.CONFUSION] = ConfusionBuff;
Buff.classes[BuffType.SLEEP] = SleepBuff;
Buff.classes[BuffType.SLOW_MOVE] = SlowMoveBuff;
Buff.classes[BuffType.SLOW_ATTACK] = SlowAttackBuff;
Buff.classes[BuffType.CTL_FREE] = CtlFreeBuff;
Buff.classes[BuffType.INVINCIBLE] = InvincibleBuff;
