import { app } from "../../../app";
import { b3 } from "../../../core/behavior3/behavior";
import { ecs } from "../../../core/ecs";
import { Loader } from "../../../core/loader";
import { MathUtil } from "../../../core/utils/math-util";
import { BattleConf } from "../../../def/battle";
import { formation } from "../../../def/formation";
import { AiComponent } from "./ecs/components/ai-component";
import { MovementComponent, TransformComponent } from "./ecs/components/movement-component";
import {
    ElementComponent,
    SoldierComponent,
    TroopComponent,
} from "./ecs/components/element-component";
import { Skill, SkillComponent } from "./ecs/components/skill-component";
import { AiSystem } from "./ecs/systems/ai-system";
import { MovementSystem } from "./ecs/systems/movement-system";
import { SkillSystem } from "./ecs/systems/skill-system";
import { ElementCreator } from "./pve-defs";

export class PveServer extends b3.Context {
    private _ecs: ecs.World;

    private _loader: Loader = new Loader();
    private _sender: ICommandSender;
    private _receiver: CommandReceiver;

    private _transform3D: Laya.Transform3D = new Laya.Transform3D();

    private _aiTrees: Map<string, b3.Tree> = new Map();
    private _map: Map<number, ElementComponent> = new Map();

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

    private _calcIndex(positioin: Laya.Vector3) {
        const x = Math.abs(positioin.x * 20) << 16;
        const y = Math.abs(positioin.z * 20) << 16;
        return x | y;
    }

    findAtPosition(positioin: Laya.Vector3) {
        const idx = this._calcIndex(positioin);
        return this._map.get(idx);
    }

    update(delta: number) {
        this.time += delta;
        this._ecs.update(delta);

        // 更新位置索引
        this.ecs.getComponents(TransformComponent).forEach((transform) => {
            const idx = this._calcIndex(transform.position);
            const map = this._map;
            if (idx !== transform.index) {
                map.delete(transform.index);
                map.set(idx, transform.getComponent(ElementComponent)!);
            }
        });

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

    find(filter: (element: ElementComponent) => boolean) {
        let arr: ElementComponent[] | null = null;
        for (const v of this.ecs.getComponents(ElementComponent).values()) {
            if (filter(v)) {
                arr ||= [];
                arr.push(v);
            }
        }
        return arr;
    }

    calcSoldierPosition(hero: ElementComponent, solider: SoldierComponent, out: Laya.Vector3) {
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
        entity.etype = BattleConf.ENTITY_TYPE.HERO;

        const element = entity.addComponent(ElementComponent);
        element.tid = 101;
        element.hp = 200;
        element.maxHp = 200;
        element.aid = 1;

        const transform = entity.addComponent(TransformComponent);
        transform.position.x = 6;
        transform.position.z = 6;

        entity.addComponent(MovementComponent);
        entity.addComponent(TroopComponent);

        const table = app.service.table;
        const heroRow = table.hero[element.tid];
        element.data = table.battleEntity.entity[heroRow.battle_entity];

        const skill = entity.addComponent(SkillComponent);
        if (heroRow.skill1) {
            skill.skills.push(new Skill(table.skill[heroRow.skill1], element));
        }
        if (heroRow.skill2) {
            skill.skills.push(new Skill(table.skill[heroRow.skill2], element));
        }
        if (heroRow.skill3) {
            skill.skills.push(new Skill(table.skill[heroRow.skill3], element));
        }
        if (heroRow.skill4) {
            skill.skills.push(new Skill(table.skill[heroRow.skill4], element));
        }

        this._sender.createElement({
            eid: element.eid,
            etype: element.entity.etype,
            tid: element.tid,
            hp: element.hp,
            maxHp: element.maxHp,
            positioin: transform.position,
        });
        this._sender.focus(element.eid);

        this._loadSoliders(element);

        this._createMonsters();
    }

    private _loadSoliders(hero: ElementComponent) {
        hero.troop!.formation = formation;
        hero.troop!.formation.forEach((value, idx) => {
            const entity = this._ecs.createEntity();

            const element = entity.addComponent(ElementComponent);
            element.tid = idx >= 4 ? 40004 : 40002;
            element.hp = 200;
            element.maxHp = 200;
            element.aid = 1;
            entity.etype = BattleConf.ENTITY_TYPE.SOLDIER;

            const table = app.service.table;
            const soldierRow = table.soldier[element.tid];

            element.data = table.battleEntity.entity[soldierRow.battle_entity];

            const soldier = entity.addComponent(SoldierComponent);
            soldier.index = idx;
            soldier.offset = value;
            soldier.hero = hero;
            soldier.data = soldierRow;
            hero.troop!.soldiers.push(soldier);

            const skill = entity.addComponent(SkillComponent);
            if (soldierRow.skill1) {
                skill.skills.push(new Skill(table.skill[soldierRow.skill1], element));
            }
            if (soldierRow.skill2) {
                skill.skills.push(new Skill(table.skill[soldierRow.skill2], element));
            }

            const transform = entity.addComponent(TransformComponent);
            transform.position.x = value.x + hero.transform.position.x;
            transform.position.z = value.z + hero.transform.position.z;

            const entityRow = table.battleEntity.entity[soldierRow.battle_entity];
            const ai = entity.addComponent(AiComponent);
            ai.res = `resources/data/btree/${entityRow.pve_ai}.json`;

            entity.addComponent(MovementComponent);

            this._sender.createElement({
                eid: element.eid,
                etype: element.entity.etype,
                tid: element.tid,
                hp: element.hp,
                maxHp: element.maxHp,
                positioin: transform.position,
            });
        });
    }

    private _createMonsters() {
        const arr = [new Laya.Vector3(10, 0, 12)];
        for (const p of arr) {
            const entity = this._ecs.createEntity();

            const element = entity.addComponent(ElementComponent);
            element.tid = 40002;
            element.hp = 200;
            element.maxHp = 200;
            element.aid = 2;
            entity.etype = BattleConf.ENTITY_TYPE.HERO;

            const table = app.service.table;
            const heroRow = table.hero[element.tid];

            element.data = table.battleEntity.entity[heroRow.battle_entity];

            const skill = entity.addComponent(SkillComponent);
            if (heroRow.skill1) {
                skill.skills.push(new Skill(table.skill[heroRow.skill1], element));
            }
            if (heroRow.skill2) {
                skill.skills.push(new Skill(table.skill[heroRow.skill2], element));
            }

            const transform = entity.addComponent(TransformComponent);
            transform.position.x = p.x;
            transform.position.z = p.z;

            const entityRow = table.battleEntity.entity[heroRow.battle_entity];
            const ai = entity.addComponent(AiComponent);
            ai.res = `resources/data/btree/${entityRow.pve_ai}.json`;

            entity.addComponent(MovementComponent);

            this._sender.createElement({
                eid: element.eid,
                etype: element.entity.etype,
                tid: element.tid,
                hp: element.hp,
                maxHp: element.maxHp,
                positioin: transform.position,
            });
        }
    }

    moveStart(element: ElementComponent, speed: Laya.Vector3) {
        element.movement.speed.cloneFrom(speed);
        element.transform.rotation = MathUtil.toDegree(Math.atan2(speed.z, speed.x));
        this._sender.moveStart(element.eid, speed);
    }

    moveStop(element: ElementComponent) {
        const movement = element.movement;
        movement.speed.x = 0;
        movement.speed.y = 0;
        movement.speed.z = 0;
        this._sender.moveStop(element.eid);
    }

    playAnim(element: ElementComponent, anim: string) {
        this._sender.playAnim(element.eid, anim);
    }

    //-------------------------------------------------------------------------
    //------------------------------ICommandSender-----------------------------
    //-------------------------------------------------------------------------
    chopTree(element: ElementComponent, wood: ElementComponent) {}

    launchSkill(element: ElementComponent, target?: ElementComponent) {}

    createWood() {}
}

export interface ICommandSender {
    focus(eid: number): void;
    createElement(data: ElementCreator): void;
    createTree(data: ElementCreator): void;

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
        const element = this.server.ecs.getComponent(eid, ElementComponent);
        if (!element) {
            console.warn(`not found element: ${eid}`);
            return;
        }

        const rad = MathUtil.toRadian(degree);
        const movement = element.movement;
        const speed = CommandReceiver._tmpSpeed;
        speed.x = movement.velocity * Math.cos(rad);
        speed.z = movement.velocity * Math.sin(rad);
        this.server.moveStart(element, speed);
    }

    moveStop(eid: number) {
        const element = this.server.ecs.getComponent(eid, ElementComponent);
        if (!element) {
            console.warn(`not found element: ${eid}`);
            return;
        }
        this.server.moveStop(element);
    }
}
