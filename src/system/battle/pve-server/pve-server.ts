import { app } from "../../../app";
import * as b3 from "../../../core/behavior3/behavior";
import * as ecs from "../../../core/ecs";
import { Loader } from "../../../core/loader";
import { MathUtil } from "../../../core/utils/math-util";
import { BattleConf } from "../../../def/battle";
import { formation } from "../../../def/formation";
import { ElementAnimation } from "../pve/ecs/components/element-component";
import { AiComponent } from "./ecs/components/ai-component";
import { BulletComponent } from "./ecs/components/bullet-compoment";
import { CacheComponent, CacheEntry } from "./ecs/components/cache-component";
import {
    ElementComponent,
    FollowerComponent,
    SoldierComponent,
    TroopComponent,
    TruckComponent,
} from "./ecs/components/element-component";
import { MovementComponent, TransformComponent } from "./ecs/components/movement-component";
import { LauncherComponent, Skill } from "./ecs/components/skill-component";
import { AiSystem } from "./ecs/systems/ai-system";
import { BulletSystem } from "./ecs/systems/bullet-system";
import { CacheSystem } from "./ecs/systems/cache-system";
import { EventSystem } from "./ecs/systems/event-system";
import { MovementSystem } from "./ecs/systems/movement-system";
import { SkillSystem } from "./ecs/systems/skill-system";
import { ElementCreator, PveDef, UpdateHp, UpdateTruck } from "./pve-defs";

const _tmpVelocity = new Laya.Vector3();
const SOLDIER_COUNT = 12;

const tmpT3d: Laya.Transform3D = new Laya.Transform3D();

export class PveServer extends b3.Context {
    private _ecs: ecs.World;
    private _eidCount: number = 0;

    private _loader: Loader = new Loader();
    private _sender: ICommandSender;

    private _aiTrees: Map<string, b3.Tree> = new Map();
    private _stanceMap: Map<number, ElementComponent> = new Map();
    private _elements: Map<string, ElementComponent> = new Map();

    public constructor(sender: ICommandSender) {
        super();

        this._sender = sender;

        this._ecs = new ecs.World(this);
        this._ecs.addSingletonComponent(CacheComponent);
        this._ecs.addSystem(AiSystem);
        this._ecs.addSystem(MovementSystem);
        this._ecs.addSystem(EventSystem);
        this._ecs.addSystem(SkillSystem);
        this._ecs.addSystem(BulletSystem);
        this._ecs.addSystem(CacheSystem);
    }

    public destroy() {
        this._ecs.destroy();
    }

    public get ecs() {
        return this._ecs;
    }

    private _obtainEid() {
        return ++this._eidCount;
    }

    public isFreeStance(element: ElementComponent, position: Laya.Vector3) {
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

    public isTroopFighting(element: ElementComponent) {
        for (const target of this._stanceMap.values()) {
            if (target.aid === element.aid) {
                return true;
            }
        }
        return false;
    }

    public clearStance(element: ElementComponent) {
        this._stanceMap.delete(element.eid);
    }

    public setStance(element: ElementComponent) {
        this._stanceMap.set(element.eid, element);
    }

    public update(delta: number) {
        this.time += delta;
        this._ecs.update(delta);

        this._drawDebug();
    }

    public async loadAiTree(res: string) {
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

    public find(filter: (element: ElementComponent) => boolean) {
        let arr: ElementComponent[] | null = null;
        for (const v of this.ecs.getComponents(ElementComponent).values()) {
            if (filter(v)) {
                arr ||= [];
                arr.push(v);
            }
        }
        return arr;
    }

    public calcFollowerPosition(
        hero: ElementComponent,
        follower: FollowerComponent,
        out: Laya.Vector3
    ) {
        tmpT3d.localPosition = hero.transform.position;
        tmpT3d.localRotationEulerY = -hero.transform.rotation;
        out.cloneFrom(follower.offset);
        tmpT3d.localToGlobal(out, out);
    }

    //-------------------------------------------------------------------------
    //------------------------------ICommandReceiver---------------------------
    //-------------------------------------------------------------------------
    private _initSkill(owner: ElementComponent, launcher: LauncherComponent, skillId?: number) {
        if (skillId) {
            launcher.skills.push(new Skill(app.service.table.skill[skillId], owner));
        }
    }

    public start() {
        // 创建主角
        const entity = this._ecs.createEntity(this._obtainEid());
        entity.etype = BattleConf.ENTITY_TYPE.HERO;

        const element = entity.addComponent(ElementComponent);
        element.tid = 101;
        element.hp = 400;
        element.maxHp = 400;
        element.aid = 1;

        const transform = entity.addComponent(TransformComponent);
        transform.position.x = 21;
        transform.position.z = 43;

        entity.addComponent(MovementComponent);
        entity.addComponent(TroopComponent);

        const table = app.service.table;
        const heroRow = table.hero[element.tid];
        element.data = table.battleEntity[heroRow.battle_entity];

        const ai = entity.addComponent(AiComponent);
        ai.btree = `resources/data/btree/${element.data.pve_ai}.json`;
        ai.active = false;

        const launcher = entity.addComponent(LauncherComponent);
        this._initSkill(element, launcher, heroRow.skill0);
        this._initSkill(element, launcher, heroRow.skill1);
        this._initSkill(element, launcher, heroRow.skill2);
        this._initSkill(element, launcher, heroRow.skill3);

        this._sender.createElement({
            eid: element.eid,
            etype: element.entity.etype,
            aid: element.aid,
            entityId: element.data.id,
            tableId: element.tid,
            hp: element.hp,
            maxHp: element.maxHp,
            position: transform.position,
            animation: true,
        });
        this._sender.focus(element.eid);

        this._loadSoliders(element);
        this._loadTrucks(element);
    }

    private _loadSoliders(hero: ElementComponent) {
        hero.troop!.formation = formation;
        hero.troop!.formation.forEach((value, idx) => {
            if (idx >= SOLDIER_COUNT) {
                return;
            }
            const entity = this._ecs.createEntity(this._obtainEid());
            entity.etype = BattleConf.ENTITY_TYPE.SOLDIER;

            const element = entity.addComponent(ElementComponent);
            element.tid = idx >= 4 ? 40704 : 40702;
            element.hp = 200;
            element.maxHp = 200;
            element.aid = 1;

            const table = app.service.table;
            const soldierRow = table.soldier.soldier[element.tid];
            element.data = table.battleEntity[soldierRow.battle_entity];

            const soldier = entity.addComponent(SoldierComponent);
            soldier.index = idx;
            soldier.offset = value;
            soldier.hero = hero;
            soldier.data = soldierRow;
            hero.troop!.soldiers.push(soldier);

            const launcher = entity.addComponent(LauncherComponent);
            this._initSkill(element, launcher, soldierRow.skill0);
            this._initSkill(element, launcher, soldierRow.skill1);

            const transform = entity.addComponent(TransformComponent);
            transform.position.x = value.x + hero.transform.position.x;
            transform.position.z = value.z + hero.transform.position.z;

            const ai = entity.addComponent(AiComponent);
            ai.btree = `resources/data/btree/${element.data.pve_ai}.json`;

            entity.addComponent(MovementComponent);

            this._sender.createElement({
                eid: element.eid,
                etype: element.entity.etype,
                aid: element.aid,
                entityId: element.data.id,
                tableId: element.tid,
                hp: element.hp,
                maxHp: element.maxHp,
                position: transform.position,
                animation: true,
            });
        });
    }

    private _loadTrucks(hero: ElementComponent) {
        hero.troop!.formation = formation;
        hero.troop!.formation.forEach((value, idx) => {
            if (idx < SOLDIER_COUNT) {
                return;
            }
            const entity = this._ecs.createEntity(this._obtainEid());
            entity.etype = BattleConf.ENTITY_TYPE.TRUCK;

            const element = entity.addComponent(ElementComponent);
            element.aid = 1;
            element.data = app.service.table.battleEntity[80001];

            const truck = entity.addComponent(TruckComponent);
            truck.index = idx;
            truck.offset = value;
            truck.hero = hero;
            truck.collectCnt = 0;

            if (idx == SOLDIER_COUNT) {
                truck.collectType = BattleConf.ENTITY_TYPE.WOOD;
            } else if (idx == SOLDIER_COUNT + 1) {
                truck.collectType = BattleConf.ENTITY_TYPE.FOOD;
            } else {
                truck.collectType = BattleConf.ENTITY_TYPE.STONE;
            }
            hero.troop!.trucks.set(truck.collectType, truck);

            const transform = entity.addComponent(TransformComponent);
            transform.position.x = value.x + hero.transform.position.x;
            transform.position.z = value.z + hero.transform.position.z;

            const ai = entity.addComponent(AiComponent);
            ai.btree = `resources/data/btree/${element.data.pve_ai}.json`;

            entity.addComponent(MovementComponent);

            this._sender.createElement({
                eid: element.eid,
                etype: element.entity.etype,
                aid: element.aid,
                entityId: element.data.id,
                tableId: element.tid,
                hp: element.hp,
                maxHp: element.maxHp,
                position: transform.position,
                animation: true,
                collectType: truck.collectType,
            });
        });
    }

    public removeElement(element: ElementComponent, outVision: boolean) {
        this._elements.delete(element.key);
        this.ecs.removeEntity(element.eid);
        this._sender.removeElement(element.eid);

        if (outVision && element.hp < element.maxHp) {
            const cache = this.ecs.getSingletonComponent(CacheComponent)!;
            const cacheEntry = cache.create(element);
            cacheEntry.outVision = true;
        }
    }

    public rushStart(element: ElementComponent): void {
        this._sender.rushStart(element.eid);
    }

    public moveStart(element: ElementComponent, velocity: Laya.Vector3, target?: Laya.Vector3) {
        element.movement.target = target;
        element.movement.velocity.cloneFrom(velocity);
        element.transform.rotation = MathUtil.toDegree(Math.atan2(velocity.z, velocity.x));
        this._sender.moveStart(element.eid, velocity);
    }

    public moveStop(element: ElementComponent) {
        const movement = element.movement;
        movement.velocity.x = 0;
        movement.velocity.y = 0;
        movement.velocity.z = 0;
        this._sender.moveStop(element.eid, element.transform.position);
    }

    public launchBullet(skill: Skill, bulletEntity: number, targets: ElementComponent[]) {
        const entity = this._ecs.createEntity(this._obtainEid());
        entity.etype = BattleConf.ENTITY_TYPE.BULLET;

        const element = entity.addComponent(ElementComponent);
        element.data = app.service.table.battleEntity[bulletEntity];
        element.tid = skill.data.id;

        const transform = entity.addComponent(TransformComponent);
        transform.position.cloneFrom(skill.owner.transform.position);

        entity.addComponent(MovementComponent);

        const bullet = entity.addComponent(BulletComponent);
        bullet.skill = skill;
        if (element.data.pve_ai) {
            bullet.btree = `resources/data/btree/${element.data.pve_ai}.json`;
        }
        this._sender.createElement({
            eid: element.eid,
            etype: element.entity.etype,
            aid: element.aid,
            entityId: element.data.id,
            tableId: element.tid,
            position: targets[0].transform.position,
            animation: true,
        });
    }

    public towardTo(element: ElementComponent, target: ElementComponent) {
        this._sender.towardTo(element.eid, target.eid);
    }

    public playAnim(element: ElementComponent, anim: string) {
        this._sender.playAnim(element.eid, anim);
    }

    public hurt(skill: Skill, enemy: ElementComponent, ratio: number = 1) {
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
            enemy.removeComponent(AiComponent);
            this.playAnim(enemy, ElementAnimation.DIE);
            this.ecs.delay(2, enemy.eid, () => {
                this.removeElement(enemy, false);
            });
            const cache = this.ecs.getSingletonComponent(CacheComponent)!;
            const cacheEntry = cache.create(enemy);
            // TODO：复活时间读配置表
            cacheEntry.reliveTime = this.time + 60;
        }
    }

    public collect(element: ElementComponent, target: ElementComponent) {
        if (target.hp <= 0) {
            return;
        }
        this._sender.playAnim(element.eid, ElementAnimation.CHOP);

        const subHp = PveDef.COLLECT_PER_HP;
        target.hp = Math.max(0, target.hp - subHp);

        this._sender.updateHp(target.eid, {
            hp: target.hp,
            maxHp: target.maxHp,
            subHp: subHp,
        });

        let trucks;
        if (element.data.etype == BattleConf.ENTITY_TYPE.HERO) {
            trucks = element.troop?.trucks;
        } else if (element.data.etype == BattleConf.ENTITY_TYPE.SOLDIER) {
            trucks = element.soldier?.hero?.troop?.trucks;
        }
        const truck = trucks?.get(target.data.etype);
        if (truck) {
            if (truck.collectCnt >= PveDef.COLLECT_MAX_CNT) {
                const lastTime = truck.lastTipsTime;
                if (!lastTime || this.time - lastTime > 10) {
                    switch (truck.collectType) {
                        case BattleConf.ENTITY_TYPE.WOOD:
                            app.ui.toast("木头资源车已满，无法继续获得木头");
                            break;
                        case BattleConf.ENTITY_TYPE.FOOD:
                            app.ui.toast("粮食资源车已满，无法继续获得粮食");
                            break;
                        case BattleConf.ENTITY_TYPE.STONE:
                            app.ui.toast("石材资源车已满，无法继续获得石材");
                            break;
                    }
                    truck.lastTipsTime = this.time;
                }
            } else {
                truck.collectCnt++;
                this._sender.updateTruck(truck.eid, {
                    collecter: element.eid,
                    collection: target.eid,
                    collectCnt: truck.collectCnt,
                });
            }
        }

        if (target.hp <= 0) {
            const table = app.service.table;
            const buildingRow = table.battleBuilding[target.tid];
            const cache = this.ecs.getSingletonComponent(CacheComponent)!;
            const cacheEntry = cache.create(target);
            cacheEntry.reliveTime = this.time + buildingRow.fresh_time;
        }
    }

    public relive(entry: CacheEntry) {
        const etype = entry.data.etype;
        const ETYPE = BattleConf.ENTITY_TYPE;

        if (etype == ETYPE.WOOD || etype == ETYPE.FOOD || etype == ETYPE.STONE) {
            const element = this._elements.get(entry.data.key);
            if (element) {
                element.hp = entry.data.hp;
                element.maxHp = entry.data.maxHp;
                this._sender.updateHp(element.eid, {
                    hp: element.hp,
                    maxHp: element.maxHp,
                    subHp: 0,
                });
            }
        } else if (etype == ETYPE.HERO) {
            // TODO: MONSTER_HERO?
            this.addMonster(entry.data.tid, entry.data.spawnpoint);
        } else {
            console.warn(`unsupport relive:`, entry.data.key, entry.data.etype);
        }
    }

    private _toElementKey(tid: number, position: Laya.Vector3) {
        return tid.toFixed(0) + "_" + position.x.toFixed(2) + "_" + position.z.toFixed(2);
    }

    //-------------------------------------------------------------------------
    // 接收前端指令
    //-------------------------------------------------------------------------
    public joystickStart(eid: number, degree: number) {
        const element = this.ecs.getComponent(eid, ElementComponent);
        if (!element) {
            console.warn(`not found element: ${eid}`);
            return;
        }

        const ai = element.getComponent(AiComponent)!;
        if (ai.active) {
            if (ai.tree && ai.env) {
                ai.tree.interrupt(ai.env);
            }
            ai.active = false;
        }

        const rad = MathUtil.toRadian(degree);
        const movement = element.movement;
        _tmpVelocity.x = movement.speed * Math.cos(rad);
        _tmpVelocity.z = movement.speed * Math.sin(rad);
        this.moveStart(element, _tmpVelocity);
    }

    public click(x: number, z: number) {
        this.ecs.getComponents(ElementComponent).forEach((element) => {
            const ai = element.getComponent(AiComponent);
            const p1 = new Laya.Vector3(x, 0, z);
            const p2 = element.transform.position;
            if (Laya.Vector3.distance(p1, p2) < 0.2 && ai && ai.env) {
                ai.env.debug = !ai.env.debug;
            }
        });
    }

    public joystickStop(eid: number) {
        const element = this.ecs.getComponent(eid, ElementComponent);
        if (!element) {
            console.warn(`not found element: ${eid}`);
            return;
        }
        const ai = element.getComponent(AiComponent)!;
        ai.active = true;
        this.moveStop(element);
    }

    public addMonster(tid: number, position: Laya.Vector3) {
        const key = this._toElementKey(tid, position);
        if (this._elements.has(key)) {
            return;
        }

        const cache = this.ecs.getSingletonComponent(CacheComponent)!;
        const cacheEntry = cache.get(key);
        if (cacheEntry && cacheEntry.reliveTime > this.time) {
            cacheEntry.outVision = false;
            return;
        } else {
            cache.delete(key);
        }

        const entity = this._ecs.createEntity(this._obtainEid());
        entity.etype = BattleConf.ENTITY_TYPE.HERO;

        const element = entity.addComponent(ElementComponent);
        element.tid = tid;
        element.hp = cacheEntry?.data.hp ?? 200;
        element.maxHp = cacheEntry?.data.maxHp ?? 200;
        element.aid = 2;
        element.key = key;
        element.spawnpoint.cloneFrom(position);
        this._elements.set(key, element);

        const table = app.service.table;
        const monsterRow = table.monster[element.tid];

        element.data = table.battleEntity[monsterRow.battle_entity];

        const launcher = entity.addComponent(LauncherComponent);
        this._initSkill(element, launcher, monsterRow.skill0);
        this._initSkill(element, launcher, monsterRow.skill1);
        this._initSkill(element, launcher, monsterRow.skill2);
        this._initSkill(element, launcher, monsterRow.skill3);

        const transform = entity.addComponent(TransformComponent);
        transform.position.x = position.x;
        transform.position.z = position.z;

        const ai = entity.addComponent(AiComponent);
        ai.btree = `resources/data/btree/${element.data.pve_ai}.json`;

        entity.addComponent(MovementComponent);

        this._sender.createElement({
            eid: element.eid,
            etype: element.entity.etype,
            aid: element.aid,
            entityId: element.data.id,
            tableId: element.tid,
            hp: element.hp,
            maxHp: element.maxHp,
            position: transform.position,
            animation: true,
        });
    }

    public removeMonster(tid: number, position: Laya.Vector3) {
        const key = this._toElementKey(tid, position);
        const element = this._elements.get(key);
        if (element) {
            this.removeElement(element, true);
        }
    }

    public addBuilding(tid: number, position: Laya.Vector3) {
        const key = this._toElementKey(tid, position);
        if (this._elements.has(key)) {
            return;
        }

        const cache = this.ecs.getSingletonComponent(CacheComponent)!;
        const cacheEntry = cache.get(key);
        if (cacheEntry && cacheEntry.reliveTime > this.time) {
            cacheEntry.outVision = false;
            return;
        } else {
            cache.delete(key);
        }

        const table = app.service.table;
        const buildingRow = table.battleBuilding[tid];
        const entityRow = table.battleEntity[buildingRow.battle_entity];

        const entity = this._ecs.createEntity(this._obtainEid());
        entity.etype = entityRow.etype;

        const element = entity.addComponent(ElementComponent);
        element.tid = tid;
        element.hp = cacheEntry?.data.hp ?? buildingRow.max_hp;
        element.maxHp = cacheEntry?.data.maxHp ?? buildingRow.max_hp;
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
            aid: element.aid,
            entityId: element.data.id,
            tableId: element.tid,
            hp: element.hp,
            maxHp: element.maxHp,
            position: transform.position,
        });
    }

    public removeBuilding(tid: number, position: Laya.Vector3) {
        const key = this._toElementKey(tid, position);
        const element = this._elements.get(key);
        if (element) {
            this.removeElement(element, true);
        }
    }

    public addCollection(tid: number, position: Laya.Vector3) {
        const key = this._toElementKey(tid, position);
        if (this._elements.has(key)) {
            return;
        }

        const cache = this.ecs.getSingletonComponent(CacheComponent)!;
        const cacheEntry = cache.get(key);
        if (cacheEntry) {
            cacheEntry.outVision = false;
        }

        const table = app.service.table;
        const buildingRow = table.battleBuilding[tid];
        const entityRow = table.battleEntity[buildingRow.battle_entity];

        const entity = this._ecs.createEntity(this._obtainEid());
        entity.etype = entityRow.etype;

        const element = entity.addComponent(ElementComponent);
        element.tid = tid;
        element.hp = cacheEntry?.data.hp ?? buildingRow.max_hp;
        element.maxHp = cacheEntry?.data.maxHp ?? buildingRow.max_hp;
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
            aid: element.aid,
            entityId: element.data.id,
            tableId: element.tid,
            hp: element.hp,
            maxHp: element.maxHp,
            position: transform.position,
        });
    }

    public removeCollection(tid: number, position: Laya.Vector3) {
        const key = this._toElementKey(tid, position);
        const element = this._elements.get(key);
        if (element) {
            this.removeElement(element, true);
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
    updateTruck(eid: number, info: UpdateTruck): void;

    towardTo(eid: number, target: number): void;

    playAnim(eid: number, anim: string): void;

    drawDebug(x: number, z: number, radius: number, color: number): void;
}
