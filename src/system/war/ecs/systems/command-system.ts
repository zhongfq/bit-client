import { Vec3 } from "cc";
import { app } from "../../../../app";
import { ecs } from "../../../../core/ecs";
import proto from "../../../../def/proto.js";
import { war } from "../../../../def/war";
import { GamePlayer } from "../../game-player";
import { Element, SkillType } from "../components/element";
import { Health } from "../components/health";
import { Movement, TrackType } from "../components/movement";
import { Timer } from "../components/timer";
import { Animation, AnimationName } from "../components/render";
import { Callback } from "../../../../core/dispatcher";
import { opcode } from "../../../../def/protocol";
import { Debug } from "../components/debug";

type LinkedNode = {
    next?: LinkedNode | null;
    frame: proto.war.WarFrame;
};

type LinkedList = {
    head?: LinkedNode | null;
    tail?: LinkedNode | null;
};

interface Handler {
    (cmd: proto.war.WarCmd): void;
}

export class CommandSystem extends ecs.System {
    private _commandList: LinkedList = {};
    private _handlers: { [key: number]: Handler | undefined } = {};

    constructor(readonly context: GamePlayer) {
        super();
        this.registerHandlers();
    }

    filter(entity: ecs.Entity) {
        return false;
    }

    update(dt: number) {
        const head = this._commandList.head;
        if (!head) {
            return;
        }

        const timer = this.ecs.getSingletonComponent(Timer)!;
        if (head && head.frame.frame / war.LOGIC_FPS <= timer.local) {
            this._commandList.head = head.next;
            if (!this._commandList.head) {
                this._commandList.tail = null;
            }
            this.execute(head.frame);
        }
    }

    private execute(notify: proto.war.WarFrame) {
        for (const v of notify.cmds) {
            const cmd = v as proto.war.WarCmd;
            const handler = this._handlers[cmd.cmdType];
            if (handler) {
                handler(cmd);
            } else {
                console.log(`handler not found for type: ${cmd.cmdType}`);
            }
        }
    }

    private registerHandlers() {
        const CMD = war.COMMAND;
        const register = (cmdType: number, handler: Handler) => {
            this._handlers[cmdType] = handler;
        };
        register(CMD.ADD_ENTITY, ({ addEntity: cmd }) => {
            this.addEntity(cmd as proto.war.cmd_add_entity);
        });
        register(CMD.UPDATE_ENTITY, ({ updateEntity: cmd }) => {
            this.updateEntity(cmd as proto.war.cmd_update_entity);
        });
        register(CMD.DEL_ENTITY, ({ delEntity: cmd }) => {
            this.delEntity(cmd as proto.war.cmd_del_entity);
        });
        register(CMD.FORCE_TO, ({ forceTo: cmd }) => {
            this.forceTo(cmd as proto.war.cmd_force_to);
        });
        register(CMD.MOVE_TO, ({ moveTo: cmd }) => {
            this.moveTo(cmd as proto.war.cmd_move_to);
        });
        register(CMD.MOVE_START, ({ moveStart: cmd }) => {
            this.moveStart(cmd as proto.war.cmd_move_start);
        });
        register(CMD.MOVE_STOP, ({ moveStop: cmd }) => {
            this.moveStop(cmd as proto.war.cmd_move_stop);
        });
        register(CMD.ATTACK, ({ attack: cmd }) => {
            this.attack(cmd as proto.war.cmd_attack);
        });
        register(CMD.UNDER_ATK, ({ underAtk: cmd }) => {
            this.underAtk(cmd as proto.war.cmd_under_atk);
        });
        register(CMD.ADD_BUFF, ({ addBuff: cmd }) => {
            this.addBuff(cmd as proto.war.cmd_add_buff);
        });
        register(CMD.DEL_BUFF, ({ delBuff: cmd }) => {
            this.delBuff(cmd as proto.war.cmd_del_buff);
        });

        const handle = (op: number, callback: Callback) => {
            this.context.on(app.networkd, op, callback, this);
        };
        handle(opcode.war.notify_start, this.onNotifyStart);
        handle(opcode.war.notify_cmd, this.onNotifyCmd);
        handle(opcode.war.notify_end, this.onNotifyEnd);
        handle(opcode.war.notify_debug, this.onNotifyDebug);
    }

    //-------------------------------------------------------------------------
    // 处理网络消息
    //-------------------------------------------------------------------------
    private onNotifyStart(data: proto.war.notify_start) {}

    private onNotifyCmd(data: proto.war.notify_cmd) {
        if (data.warUid === this.context.warUid) {
            const frame = data.frame as proto.war.WarFrame;
            const timer = this.ecs.getSingletonComponent(Timer)!;
            const serverFrame = timer.server * war.LOGIC_FPS;
            const localFrame = timer.local * war.LOGIC_FPS;
            // 当网络状态不佳时，可能会收到落后于当前时间的包，重新校准时间，
            // 后续将开启加速，追上服务器
            if (!this._commandList.head && localFrame > frame.frame) {
                timer.local = frame.frame / war.LOGIC_FPS;
            }
            timer.server = frame.frame / war.LOGIC_FPS;

            const node: LinkedNode = { frame: frame };
            if (this._commandList.tail) {
                this._commandList.tail.next = node;
                this._commandList.tail = node;
            } else {
                this._commandList.head = node;
                this._commandList.tail = node;
            }

            // 当前未执行的命令通知 > 2 时，开启开速
            if (frame.frame > this._commandList.head!.frame.frame) {
                timer.scale = 5;
            }
        }
    }

    private onNotifyEnd(data: proto.war.notify_end) {}

    private onNotifyDebug(data: proto.war.notify_debug) {
        const debug = this.ecs.getSingletonComponent(Debug);
        if (!debug?.enable) {
            return;
        }
        debug.infoes.length = 0;
        for (const v of data.infos) {
            const info = v as proto.war.DebugInfo;
            debug.infoes.push({
                x: info.x,
                y: info.y,
                z: info.z,
                size: info.size,
                color: info.color,
            });
        }
        debug.logs = data.logs;
    }

    //-------------------------------------------------------------------------
    // 处理战斗指令
    //-------------------------------------------------------------------------
    private addEntity(cmd: proto.war.cmd_add_entity) {
        const entity = this.ecs.createEntity(cmd.eid);
        const data = app.datad.battleEntityTable.entity[cmd.entityId];

        const element = entity.addComponent(Element);
        element.etype = data.etype;
        element.rid = cmd.rid;
        element.id = cmd.entityId;

        const movement = entity.addComponent(Movement);
        movement.face = cmd.face;
        movement.position.x = cmd.x;
        movement.position.y = cmd.y;
        movement.position.z = cmd.z;
        movement.type = data.track_type ?? TrackType.NONE;

        const animation = entity.addComponent(Animation);
        animation.res = data.res;
        animation.willPlay = AnimationName.IDLE;

        // if (element.hasHealth()) {
        //     const health = entity.addComponent(Health);
        //     health.hp = cmd.hp;
        //     health.maxHp = cmd.maxHp;
        //     health.mp = 0;
        //     health.maxMp = cmd.maxMp;
        // }

        // if (element.hasShadow()) {
        //     entity.addComponent(Shadow);
        // }
    }

    private updateEntity(cmd: proto.war.Icmd_update_entity) {}

    private delEntity(cmd: proto.war.cmd_del_entity) {
        this.ecs.removeEntity(cmd.eid);
    }

    private forceTo(cmd: proto.war.cmd_force_to) {
        const entity = this.ecs.getEntity(cmd.eid);
        const movement = entity?.getComponent(Movement);
        if (movement) {
            movement.target = new Vec3(cmd.targetX, cmd.targetY, cmd.targetZ);
            const rad = Math.atan2(
                movement.target.y - movement.position.y,
                movement.target.x - movement.position.x
            );
            movement.speed.x = cmd.speed * Math.cos(rad);
            movement.speed.y = cmd.speed * Math.sin(rad);
        }
    }

    private moveTo(cmd: proto.war.cmd_move_to) {
        const entity = this.ecs.getEntity(cmd.eid);
        const movement = entity?.getComponent(Movement);

        if (movement) {
            movement.target = new Vec3(cmd.targetX, cmd.targetY, cmd.targetZ);

            if (movement.isCurvedTrack()) {
                const distance = movement.position.clone().subtract(movement.target);
                movement.track = {
                    time: 0,
                    duration: distance.length() / cmd.speed,
                    p0: movement.position.clone(),
                    p2: movement.target.clone(),
                };
            } else {
                const rad = Math.atan2(
                    movement.target.y - movement.position.y,
                    movement.target.x - movement.position.x
                );
                movement.speed.x = cmd.speed * Math.cos(rad);
                movement.speed.y = cmd.speed * Math.sin(rad);
                movement.face = movement.speed.x > 0 ? 1 : -1;
            }
            const animation = entity?.getComponent(Animation);
            if (animation) {
                animation.willPlay = AnimationName.RUN;
            }
        }
    }

    private moveStart(cmd: proto.war.cmd_move_start) {
        const entity = this.ecs.getEntity(cmd.eid);
        const movement = entity?.getComponent(Movement);
        if (movement) {
            const rad = (cmd.dir * Math.PI) / 180;
            movement.speed.x = cmd.speed * Math.cos(rad);
            movement.speed.y = cmd.speed * Math.sin(rad);
            movement.face = movement.speed.x > 0 ? 1 : -1;
            movement.target = null;

            const animation = entity?.getComponent(Animation);
            if (animation) {
                animation.willPlay = AnimationName.RUN;
            }
        }
    }

    private moveStop(cmd: proto.war.cmd_move_stop) {
        const entity = this.ecs.getEntity(cmd.eid);
        const movement = entity?.getComponent(Movement);
        if (movement) {
            movement.position.x = cmd.x;
            movement.position.y = cmd.y;
            movement.position.z = cmd.z;
            movement.speed.x = 0;
            movement.speed.y = 0;
            movement.face = cmd.face;
            movement.target = null;

            const animation = entity?.getComponent(Animation);
            if (animation) {
                animation.willPlay = AnimationName.IDLE;
            }
        }
    }

    private attack(cmd: proto.war.cmd_attack) {
        const entity = this.ecs.getEntity(cmd.eid);
        const animation = entity?.getComponent(Animation);
        if (animation) {
            const skillProp = app.datad.skillTable[cmd.skillId];
            if (skillProp.type === SkillType.ATTACK) {
                animation.willPlay = AnimationName.ATTACK;
            } else if (skillProp.type === SkillType.SKILL) {
                animation.willPlay = AnimationName.ATTACK;
            }
        }
    }

    private underAtk(cmd: proto.war.cmd_under_atk) {
        const entity = this.ecs.getEntity(cmd.eid);

        const health = entity?.getComponent(Health);
        if (health) {
            health.hp = Math.max(0, health.hp - cmd.subHp);
            health.mp = cmd.curMp;
            health.dodge = cmd.dodge;
            health.critical = cmd.critical;
            health.subHp.push(cmd.subHp);
        }
    }

    private addBuff(cmd: proto.war.cmd_add_buff) {
        // const entity = this.ecs.getEntity(cmd.eid);
        // const data = this.context.getBuff(cmd.id);
        // const buff = entity?.addComponent(Buff.classes[data.type]);
        // if (buff) {
        //     buff.id = cmd.id;
        //     buff.stack = cmd.stack;
        //     buff.expired = cmd.expired / war.LOGIC_FPS;
        // }
    }

    private delBuff(cmd: proto.war.cmd_del_buff) {
        // const entity = this.ecs.getEntity(cmd.eid);
        // const data = this.context.getBuff(cmd.id);
        // if (!data) {
        //     console.log(data);
        // }
        // entity?.removeComponent(Buff.classes[data.type]);
    }
}
