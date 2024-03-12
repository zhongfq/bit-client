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
import { ElementCreator, UpdateHp } from "./pve-defs";
import { ElementAnimation } from "../pve/ecs/components/troop-component";

const _tmpVelocity = new Laya.Vector3();

export class PveServer extends b3.Context {
    private _ecs: ecs.World;

    private _loader: Loader = new Loader();
    private _sender: ICommandSender;

    private _transform3D: Laya.Transform3D = new Laya.Transform3D();

    private _aiTrees: Map<string, b3.Tree> = new Map();
    private _stanceMap: Map<number, ElementComponent> = new Map();
    private _elements: Map<string, ElementComponent> = new Map();

    constructor(sender: ICommandSender) {
        super();

        this._sender = sender;

        this._ecs = new ecs.World();
        this._ecs.addSystem(new AiSystem(this));
        this._ecs.addSystem(new MovementSystem(this));
        this._ecs.addSystem(new SkillSystem(this));
    }

    get ecs() {
        return this._ecs;
    }

    isFreeStance(element: ElementComponent, position: Laya.Vector3) {
        for (const target of this._stanceMap.values()) {
            if (target.aid === element.aid && target !== element) {
                const distance = Laya.Vector3.distance(target.transform.position, position);
                if (distance < 0.3) {
                    return false;
                }
            }
        }
        return true;
    }

    isTroopFighting(element: ElementComponent) {
        for (const target of this._stanceMap.values()) {
            if (target.aid === element.aid) {
                return true;
            }
        }
        return false;
    }

    clearStance(element: ElementComponent) {
        this._stanceMap.delete(element.eid);
    }

    setStance(element: ElementComponent) {
        this._stanceMap.set(element.eid, element);
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
            const ai = value.getComponent(AiComponent);
            if (ai && ai.env?.debug) {
                this._sender.drawDebug(value.position.x, value.position.z, 5, 0x00ff00);
            } else {
                this._sender.drawDebug(value.position.x, value.position.z, 5, 0xff0000);
            }
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
        element.data = table.battleEntity[heroRow.battle_entity];

        const entityRow = table.battleEntity[heroRow.battle_entity];
        const ai = entity.addComponent(AiComponent);
        ai.res = `resources/data/btree/${entityRow.pve_ai}.json`;
        ai.active = false;

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
            entityId: element.data.id,
            tableId: element.tid,
            hp: element.hp,
            maxHp: element.maxHp,
            position: transform.position,
            animation: true,
        });
        this._sender.focus(element.eid);

        this._loadSoliders(element);
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

            element.data = table.battleEntity[soldierRow.battle_entity];

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

            const entityRow = table.battleEntity[soldierRow.battle_entity];
            const ai = entity.addComponent(AiComponent);
            ai.res = `resources/data/btree/${entityRow.pve_ai}.json`;

            entity.addComponent(MovementComponent);

            this._sender.createElement({
                eid: element.eid,
                etype: element.entity.etype,
                entityId: element.data.id,
                tableId: element.tid,
                hp: element.hp,
                maxHp: element.maxHp,
                position: transform.position,
                animation: true,
            });
        });
    }

    removeElement(element: ElementComponent) {
        this._elements.delete(element.key);
        this.ecs.removeEntity(element.eid);
        this._sender.removeElement(element.eid);
    }

    rushStart(element: ElementComponent): void {
        this._sender.rushStart(element.eid);
    }

    moveStart(element: ElementComponent, velocity: Laya.Vector3, target?: Laya.Vector3) {
        element.movement.target = target;
        element.movement.velocity.cloneFrom(velocity);
        element.transform.rotation = MathUtil.toDegree(Math.atan2(velocity.z, velocity.x));
        this._sender.moveStart(element.eid, velocity);
    }

    moveStop(element: ElementComponent) {
        const movement = element.movement;
        movement.velocity.x = 0;
        movement.velocity.y = 0;
        movement.velocity.z = 0;
        this._sender.moveStop(element.eid, element.transform.position);
    }

    towardTo(element: ElementComponent, target: ElementComponent) {
        this._sender.towardTo(element.eid, target.eid);
    }

    playAnim(element: ElementComponent, anim: string) {
        this._sender.playAnim(element.eid, anim);
    }

    private _calcHurt(skill: Skill, enemy: ElementComponent, ratio: number) {
        if (enemy.hp <= 0) {
            return;
        }

        const isCrit = Math.ceil(Math.random() * 10000) % 5 === 0;
        const subHp = isCrit ? 25 : 10;
        enemy.hp -= 10;
        if (enemy.hp < 0) {
            enemy.hp = 0;
        }
        this._sender.updateHp(enemy.eid, {
            hp: enemy.hp,
            maxHp: enemy.maxHp,
            subHp: subHp,
            isCrit: isCrit,
        });
        if (enemy.hp <= 0) {
            this.removeElement(enemy);
        }
    }

    hurt(skill: Skill, enemy: ElementComponent | ElementComponent[], ratio: number = 1) {
        if (enemy instanceof Array) {
            for (const v of enemy) {
                this._calcHurt(skill, v, ratio);
            }
        } else {
            this._calcHurt(skill, enemy, ratio);
        }
    }

    collect(element: ElementComponent, target: ElementComponent) {
        this._sender.playAnim(element.eid, ElementAnimation.CHOP);

        const subHp = 10;
        target.hp -= subHp;
        if (target.hp < 0) {
            target.hp = 0;
        }
        this._sender.updateHp(target.eid, {
            hp: target.hp,
            maxHp: target.maxHp,
            subHp: subHp,
        });
        if (target.hp <= 0) {
            this.removeElement(target); // TODO: 临时代码
        }
    }

    private _toElementKey(tid: number, position: Laya.Vector3) {
        return tid.toFixed(0) + "_" + position.x.toFixed(2) + "_" + position.z.toFixed(2);
    }

    //-------------------------------------------------------------------------
    // 接收前端指令
    //-------------------------------------------------------------------------
    joystickStart(eid: number, degree: number) {
        const element = this.ecs.getComponent(eid, ElementComponent);
        if (!element) {
            console.warn(`not found element: ${eid}`);
            return;
        }

        const ai = element.getComponent(AiComponent)!;
        if (ai.tree && ai.env) {
            ai.tree.interrupt(ai.env);
        }
        ai.active = false;

        const rad = MathUtil.toRadian(degree);
        const movement = element.movement;
        _tmpVelocity.x = movement.speed * Math.cos(rad);
        _tmpVelocity.z = movement.speed * Math.sin(rad);
        this.moveStart(element, _tmpVelocity);
    }

    click(x: number, z: number) {
        this.ecs.getComponents(ElementComponent).forEach((element) => {
            const ai = element.getComponent(AiComponent);
            const p1 = new Laya.Vector3(x, 0, z);
            const p2 = element.transform.position;
            if (Laya.Vector3.distance(p1, p2) < 0.2 && ai && ai.env) {
                ai.env.debug = !ai.env.debug;
            }
        });
    }

    joystickStop(eid: number) {
        const element = this.ecs.getComponent(eid, ElementComponent);
        if (!element) {
            console.warn(`not found element: ${eid}`);
            return;
        }
        const ai = element.getComponent(AiComponent)!;
        // ai.active = true;
        this.moveStop(element);
    }

    addMonster(tid: number, position: Laya.Vector3) {
        const key = this._toElementKey(tid, position);
        if (this._elements.has(key)) {
            return;
        }

        const entity = this._ecs.createEntity();
        const element = entity.addComponent(ElementComponent);
        element.tid = tid;
        element.hp = 200;
        element.maxHp = 200;
        element.aid = 2;
        element.key = key;
        element.spawnpoint.cloneFrom(position);
        entity.etype = BattleConf.ENTITY_TYPE.HERO;

        this._elements.set(key, element);

        const table = app.service.table;
        const heroRow = table.hero[element.tid];

        element.data = table.battleEntity[heroRow.battle_entity];

        const skill = entity.addComponent(SkillComponent);
        if (heroRow.skill1) {
            skill.skills.push(new Skill(table.skill[heroRow.skill1], element));
        }
        if (heroRow.skill2) {
            skill.skills.push(new Skill(table.skill[heroRow.skill2], element));
        }

        const transform = entity.addComponent(TransformComponent);
        transform.position.x = position.x;
        transform.position.z = position.z;

        const entityRow = table.battleEntity[heroRow.battle_entity];
        const ai = entity.addComponent(AiComponent);
        ai.res = `resources/data/btree/${entityRow.pve_ai}.json`;

        entity.addComponent(MovementComponent);

        this._sender.createElement({
            eid: element.eid,
            etype: element.entity.etype,
            entityId: element.data.id,
            tableId: element.tid,
            hp: element.hp,
            maxHp: element.maxHp,
            position: transform.position,
            animation: true,
        });
    }

    removeMonster(tid: number, position: Laya.Vector3) {
        const key = this._toElementKey(tid, position);
        const monster = this._elements.get(key);
        if (monster) {
            this.removeElement(monster);
        }
    }

    addBuilding(tid: number, position: Laya.Vector3) {
        const key = this._toElementKey(tid, position);
        if (this._elements.has(key)) {
            return;
        }

        const table = app.service.table;
        const buildingRow = table.battleBuilding[tid];
        const entityRow = table.battleEntity[buildingRow.battle_entity];

        const entity = this._ecs.createEntity();
        entity.etype = entityRow.etype;

        const element = entity.addComponent(ElementComponent);
        element.tid = tid;
        element.hp = buildingRow.max_hp; // TODO: 使用当前的血量
        element.maxHp = buildingRow.max_hp;
        element.aid = 1; // TODO: 区分敌我方城建
        element.key = key;
        element.spawnpoint.cloneFrom(position);
        element.data = entityRow;

        this._elements.set(key, element);

        const transform = entity.addComponent(TransformComponent);
        transform.position.x = position.x;
        transform.position.z = position.z;

        this._sender.createElement({
            eid: element.eid,
            etype: element.entity.etype,
            entityId: element.data.id,
            tableId: element.tid,
            hp: element.hp,
            maxHp: element.maxHp,
            position: transform.position,
        });
    }

    removeBuilding(tid: number, position: Laya.Vector3) {
        const key = this._toElementKey(tid, position);
        const element = this._elements.get(key);
        if (element) {
            this.removeElement(element);
        }
    }

    addCollection(tid: number, position: Laya.Vector3) {
        const key = this._toElementKey(tid, position);
        if (this._elements.has(key)) {
            return;
        }

        const table = app.service.table;
        const buildingRow = table.battleBuilding[tid];
        const entityRow = table.battleEntity[buildingRow.battle_entity];

        const entity = this._ecs.createEntity();
        entity.etype = entityRow.etype;

        const element = entity.addComponent(ElementComponent);
        element.tid = tid;
        element.hp = buildingRow.max_hp; // TODO: 使用当前的血量
        element.maxHp = buildingRow.max_hp;
        element.aid = 2;
        element.key = key;
        element.spawnpoint.cloneFrom(position);
        element.data = entityRow;

        this._elements.set(key, element);

        const transform = entity.addComponent(TransformComponent);
        transform.position.x = position.x;
        transform.position.z = position.z;

        this._sender.createElement({
            eid: element.eid,
            etype: element.entity.etype,
            entityId: element.data.id,
            tableId: element.tid,
            hp: element.hp,
            maxHp: element.maxHp,
            position: transform.position,
        });
    }

    removeCollection(tid: number, position: Laya.Vector3) {
        const key = this._toElementKey(tid, position);
        const element = this._elements.get(key);
        if (element) {
            this.removeElement(element);
        }
    }
}

export interface ICommandSender {
    focus(eid: number): void;
    createElement(data: ElementCreator): void;
    removeElement(eid: number): void;

    rushStart(eid: number): void;
    moveStart(eid: number, velocity: Laya.Vector3): void;
    moveStop(eid: number, position: Laya.Vector3): void;

    updateHp(eid: number, info: UpdateHp): void;

    towardTo(eid: number, target: number): void;

    playAnim(eid: number, anim: string): void;

    drawDebug(x: number, z: number, radius: number, color: number): void;
}
