import { app } from "../../../app";
import { b3 } from "../../../core/behavior3/behavior";
import { ecs } from "../../../core/ecs";
import { Loader } from "../../../core/loader";
import { MathUtil } from "../../../core/utils/math-util";
import { BattleConf } from "../../../def/battle";
import { formation } from "../../../def/formation";
import { AiComponent } from "./ecs/components/ai-component";
import { MovementComponent, TransformComponent } from "./ecs/components/movement-component";
import { RoleComponent, SoldierComponent, TroopComponent } from "./ecs/components/role-component";
import { Skill, SkillComponent } from "./ecs/components/skill-component";
import { TreeComponent } from "./ecs/components/tree-component";
import { AiSystem } from "./ecs/systems/ai-system";
import { MovementSystem } from "./ecs/systems/movement-system";
import { SkillSystem } from "./ecs/systems/skill-system";
import { RoleCreator, TreeCreator } from "./pve-defs";

export class PveServer extends b3.Context {
    private _ecs: ecs.World;

    private _loader: Loader = new Loader();
    private _sender: ICommandSender;
    private _receiver: CommandReceiver;

    private _transform3D: Laya.Transform3D = new Laya.Transform3D();

    private _aiTrees: Map<string, b3.Tree> = new Map();

    constructor(sender: ICommandSender) {
        super();

        this._sender = sender;
        this._receiver = new CommandReceiver(this);

        this._ecs = new ecs.World();
        this._ecs.addSystem(new AiSystem(this));
        this._ecs.addSystem(new MovementSystem(this));
        this._ecs.addSystem(new SkillSystem(this));
    }

    get receiver() {
        return this._receiver;
    }

    get ecs() {
        return this._ecs;
    }

    update(delta: number) {
        this.time += delta;
        this._ecs.update(delta);
        this._drawDebug();
    }

    async loadAiTree(res: string) {
        let tree = this._aiTrees.get(res);
        if (!tree) {
            const data = (await this._loader.loadJson(res)) as b3.TreeData;
            // 重新获取，有可能同时加载，前面一个已经完成了
            tree = this._aiTrees.get(res);
            if (!tree && data) {
                tree = new b3.Tree(data.name, data, this);
                this._aiTrees.set(res, tree);
            }
        }

        return tree;
    }

    private _drawDebug() {
        this._ecs.getComponents(TransformComponent).forEach((value) => {
            this._sender.drawDebug(value.position.x, value.position.z, 5);
        });
    }

    findTargets(role: RoleComponent, etype: number, x: number, y: number, w: number, h: number) {}

    calcSoldierPosition(hero: RoleComponent, solider: SoldierComponent, out: Laya.Vector3) {
        const t3d = this._transform3D;
        t3d.localPosition = hero.transform.position;
        t3d.localRotationEulerY = -hero.transform.rotation;
        out.cloneFrom(solider.offset);
        t3d.localToGlobal(out, out);
    }

    //-------------------------------------------------------------------------
    //------------------------------ICommandReceiver---------------------------
    //-------------------------------------------------------------------------
    start() {
        // 创建主角
        const entity = this._ecs.createEntity();

        const role = entity.addComponent(RoleComponent);
        role.tid = 101;
        role.hp = 200;
        role.maxHp = 200;

        const transform = entity.addComponent(TransformComponent);
        transform.position.x = 6;
        transform.position.z = 6;

        entity.addComponent(MovementComponent);
        entity.addComponent(TroopComponent);

        const skill = entity.addComponent(SkillComponent);
        const table = app.service.table;
        const heroRow = table.hero[role.tid];
        if (heroRow.skill1) {
            skill.skills.push(new Skill(table.skill[heroRow.skill1], role));
        }
        if (heroRow.skill2) {
            skill.skills.push(new Skill(table.skill[heroRow.skill2], role));
        }
        if (heroRow.skill3) {
            skill.skills.push(new Skill(table.skill[heroRow.skill3], role));
        }
        if (heroRow.skill4) {
            skill.skills.push(new Skill(table.skill[heroRow.skill4], role));
        }

        this._sender.createRole({
            eid: role.eid,
            etype: BattleConf.ENTITY_TYPE.HERO,
            tid: role.tid,
            hp: role.hp,
            maxHp: role.maxHp,
            positioin: transform.position,
        });
        this._sender.focus(role.eid);

        this._loadSoliders(role);
    }

    private _loadSoliders(hero: RoleComponent) {
        hero.troop!.formation = formation;
        hero.troop!.formation.forEach((value, idx) => {
            const entity = this._ecs.createEntity();

            const role = entity.addComponent(RoleComponent);
            role.tid = idx >= 4 ? 40004 : 40002;
            role.hp = 200;
            role.maxHp = 200;

            const table = app.service.table;
            const soldierRow = table.soldier[role.tid];

            const soldier = entity.addComponent(SoldierComponent);
            soldier.index = idx;
            soldier.offset = value;
            soldier.hero = hero;
            soldier.data = soldierRow;
            hero.troop!.soldiers.push(soldier);

            const skill = entity.addComponent(SkillComponent);
            if (soldierRow.skill1) {
                skill.skills.push(new Skill(table.skill[soldierRow.skill1], role));
            }
            if (soldierRow.skill2) {
                skill.skills.push(new Skill(table.skill[soldierRow.skill2], role));
            }

            const transform = entity.addComponent(TransformComponent);
            transform.position.x = value.x + hero.transform.position.x;
            transform.position.z = value.z + hero.transform.position.z;

            const entityRow = table.battleEntity.entity[soldierRow.battle_entity];
            const ai = entity.addComponent(AiComponent);
            ai.res = `resources/data/btree/${entityRow.pve_ai}.json`;

            entity.addComponent(MovementComponent);

            this._sender.createRole({
                eid: role.eid,
                etype: BattleConf.ENTITY_TYPE.SOLDIER,
                tid: role.tid,
                hp: role.hp,
                maxHp: role.maxHp,
                positioin: transform.position,
            });
        });
    }

    moveStart(role: RoleComponent, speed: Laya.Vector3) {
        role.movement.speed.cloneFrom(speed);
        role.transform.rotation = MathUtil.toDegree(Math.atan2(speed.z, speed.x));
        this._sender.moveStart(role.eid, speed);
    }

    moveStop(role: RoleComponent) {
        const movement = role.movement;
        movement.speed.x = 0;
        movement.speed.y = 0;
        movement.speed.z = 0;
        this._sender.moveStop(role.eid);
    }

    playAnim(role: RoleComponent, anim: string) {
        this._sender.playAnim(role.eid, anim);
    }

    //-------------------------------------------------------------------------
    //------------------------------ICommandSender-----------------------------
    //-------------------------------------------------------------------------
    chopTree(role: RoleComponent, wood: TreeComponent) {}

    launchSkill(role: RoleComponent, target?: RoleComponent) {}

    createWood() {}
}

export interface ICommandSender {
    focus(eid: number): void;
    createRole(data: RoleCreator): void;
    createTree(data: TreeCreator): void;

    chopTree(eid: number, target: number): void;
    moveStart(eid: number, speed: Laya.Vector3): void;
    moveStop(eid: number): void;

    playAnim(eid: number, anim: string): void;

    drawDebug(x: number, z: number, radius: number): void;
}

class CommandReceiver {
    private static _tmpSpeed: Laya.Vector3 = new Laya.Vector3();

    constructor(readonly server: PveServer) {}

    moveStart(eid: number, degree: number) {
        const role = this.server.ecs.getComponent(eid, RoleComponent);
        if (!role) {
            console.warn(`not found role: ${eid}`);
            return;
        }

        const rad = MathUtil.toRadian(degree);
        const movement = role.movement;
        const speed = CommandReceiver._tmpSpeed;
        speed.x = movement.velocity * Math.cos(rad);
        speed.z = movement.velocity * Math.sin(rad);
        this.server.moveStart(role, speed);
    }

    moveStop(eid: number) {
        const role = this.server.ecs.getComponent(eid, RoleComponent);
        if (!role) {
            console.warn(`not found role: ${eid}`);
            return;
        }
        this.server.moveStop(role);
    }
}
