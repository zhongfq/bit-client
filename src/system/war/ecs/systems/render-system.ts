import { Animation as CocosAnimation, Label, ProgressBar, easing, math, sp, tween } from "cc";
import { ecs } from "../../../../core/ecs";
import { GamePlayer, PREFAB_BATTLE_HP, PREFAB_BATTLE_SUBHP } from "../../game-player";
import { Animation, AnimationName, Shadow } from "../components/render";
import { Element } from "../components/element";
import { Health } from "../components/health";
import { Movement } from "../components/movement";
import { Timer } from "../components/timer";
import { Prefab } from "cc";

export class RenderSystem extends ecs.System {
    constructor(readonly context: GamePlayer) {
        super();
    }

    onAddComponent(component: ecs.Component): void {
        if (component instanceof Animation) {
            this.loadAnimation(component);
        } else if (component instanceof Health) {
            const health = component;
            health.node = this.context.instantiate(PREFAB_BATTLE_HP);
            health.pb1 = health.node.getComponent(ProgressBar);
            health.pb2 = health.node.getComponentInChildren(ProgressBar);
            this.context.battlefield.hp.addChild(health.node);

            const element = health.entity.getComponent(Element);
            if (!element?.isKingOrHero()) {
                health.node.active = false;
            }
        }
    }

    onRemoveComponent(component: ecs.Component): void {
        if (component instanceof Animation) {
            component.node?.destroy();
            component.node = null;
            component.skel = null;
            component.clip = null;
        } else if (component instanceof Health) {
            const health = component;
            health.node?.destroy();
            health.node = null;
            health.pb1 = null;
            health.pb2 = null;
        }
    }

    update(dt: number): void {
        this.ecs.getComponents(Animation).forEach((anim) => {
            this.updatePosition(anim);
            if (anim.willPlay && anim.willPlay !== anim.name) {
                if (anim.skel) {
                    this.playSkel(anim);
                } else if (anim.clip) {
                    this.playClip(anim);
                }
            }
        });
        this.ecs.getComponents(Health).forEach((health) => {
            this.flySubHp(health);
        });
    }

    private updatePosition(anim: Animation) {
        const movement = anim.entity.getComponent(Movement)!;
        if (anim.node) {
            anim.node.setPosition(movement.position.x, movement.position.y + movement.position.z);

            const scale = anim.node.scale;
            if (movement.shouldUpdateRotaion()) {
                const angle = math.toDegree(Math.atan2(movement.speed.y, movement.speed.x));
                anim.node.setRotationFromEuler(0, 0, angle);
            } else if (scale.x * movement.face < 0) {
                anim.node.setScale(movement.face, 1);
            }
        }

        const health = anim.entity.getComponent(Health);
        if (health?.node && anim?.node && anim.head) {
            const np = anim.node.getPosition();
            const head = anim.head.getPosition();
            health.node.setPosition(np.x + head.x, np.y + head.y);
        }

        const shadow = anim.entity.getComponent(Shadow);
        if (shadow?.node && anim.node) {
            shadow.node.setPosition(anim.node.position);
        }
    }

    private playClip(anim: Animation) {
        const clip = anim.clip!;
        const EventType = CocosAnimation.EventType;
        const willPlay = anim.willPlay!;
        const movement = anim.getComponent(Movement);
        let loop = true;
        let name = "idle";
        anim.willPlay = AnimationName.NONE;
        clip.off(EventType.FINISHED);
        switch (willPlay) {
            case AnimationName.IDLE:
                name = "idle";
                break;
            case AnimationName.RUN:
                name = "run";
                break;
            case AnimationName.DEATH:
                loop = false;
                name = "death";
                break;
            case AnimationName.ATTACK:
                loop = false;
                name = "attack";
                break;
            case AnimationName.SKILL:
                loop = false;
                name = "skill";
                break;
        }
        if (!loop) {
            clip.once(EventType.FINISHED, () => {
                if (willPlay !== AnimationName.DEATH) {
                    if (movement?.speed.x || movement?.speed.y) {
                        anim.willPlay = AnimationName.RUN;
                    } else {
                        anim.willPlay = AnimationName.IDLE;
                    }
                }
            });
        }
        clip.play(name);
    }

    private playSkel(anim: Animation) {
        const skel = anim.skel!;
        const movement = anim.getComponent(Movement);
        const willPlay = anim.willPlay!;
        let loop = true;
        let name = "idle";
        anim.willPlay = AnimationName.NONE;
        skel.setCompleteListener(null!);
        switch (willPlay) {
            case AnimationName.IDLE:
                name = "idle";
                break;
            case AnimationName.RUN:
                name = "run";
                break;
            case AnimationName.DEATH:
                name = "death";
                loop = false;
                break;
            case AnimationName.ATTACK:
                name = "attack";
                loop = false;
                break;
        }
        if (!loop) {
            skel.setCompleteListener(() => {
                skel.setCompleteListener(null!);
                if (willPlay !== AnimationName.DEATH) {
                    if (movement?.speed.x || movement?.speed.y) {
                        anim.willPlay = AnimationName.RUN;
                    } else {
                        anim.willPlay = AnimationName.IDLE;
                    }
                }
            });
        }
        skel.setAnimation(0, name, loop);
    }

    private flySubHp(health: Health) {
        if (health.node && health.pb1 && health.pb2 && health.subHp.length > 0) {
            const node = health.node;
            const element = health.entity.getComponent(Element)!;
            if (!element.isKingOrHero()) {
                health.node.active = true;
            }
            const rate = health.hp / health.maxHp;
            health.pb1.progress = rate;
            tween(health.pb2)
                .to(0.6, { progress: rate }, { easing: easing.sineOut })
                .delay(0.3)
                .call(() => {
                    if (!element.isKingOrHero()) {
                        node.active = false;
                    }
                })
                .start();
            health.subHp.forEach((value) => {
                const subhp = this.context.instantiate(PREFAB_BATTLE_SUBHP);
                const label = subhp.getComponentInChildren(Label)!;
                label.string = `-${value}`;
                subhp.setPosition(node.position);
                this.context.battlefield.label.addChild(subhp);
                tween(subhp).delay(0.6).destroySelf().start();
            });
            health.subHp.length = 0;
        }
    }

    private async loadAnimation(anim: Animation) {
        if (anim.res) {
            await this.context.loadAsset(anim.res, Prefab);
            const movement = anim.getComponent(Movement);
            if (movement) {
                anim.node = this.context.instantiate(anim.res);
                anim.node.setPosition(movement.position.x, movement.position.y);
                anim.skel = anim.node.getComponentInChildren(sp.Skeleton);
                anim.clip = anim.node.getComponentInChildren(CocosAnimation);

                if (anim.clip) {
                    anim.clip.clips.forEach((value) => {
                        if (value) {
                            anim.names.set(value?.name, true);
                        }
                    });
                }

                if (anim.skel) {
                    anim.skel.skeletonData?.getRuntimeData()?.animations.forEach((value) => {
                        anim.names.set(value.name, true);
                    });
                }

                this.context.battlefield.ground.addChild(anim.node);
            }
        }
    }

    private async loadShadow(shadow: Shadow) {
        if (shadow.res) {
            await this.context.loadAsset(shadow.res, Prefab);
            const movement = shadow.getComponent(Movement);
            if (movement) {
                shadow.node = this.context.instantiate(shadow.res);
                this.context.battlefield.shadow.addChild(shadow.node);
            }
        }
    }
}
