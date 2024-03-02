import { app } from "../../../app";
import { b3 } from "../../../core/behavior3/behavior";
import { builtinNodes } from "../../../core/behavior3/nodes/builtin-nodes";
import { ecs } from "../../../core/ecs";
import { Loader } from "../../../core/loader";
import { MathUtil } from "../../../core/utils/math-util";
import { BattleConf } from "../../../def/battle";
import { formation } from "../../../def/formation";
import { NormalAttack } from "./btree/actions/normal-attack";
import { Wait } from "./btree/actions/wait";
import { AiComponent } from "./ecs/components/ai-component";
import { MovementComponent, TransformComponent } from "./ecs/components/movement-component";
import { RoleComponent, HeroComponent, SoldierComponent } from "./ecs/components/role-component";
import { TreeComponent } from "./ecs/components/tree-component";
import { AiSystem } from "./ecs/systems/ai-system";
import { MovementSystem } from "./ecs/systems/movement-system";
import { SkillSystem } from "./ecs/systems/skill-system";
import { RoleCreator, TreeCreator } from "./pve-defs";

export class PveServer extends b3.Context implements ICommandReceiver {
    private _loader: Loader = new Loader();
    private _ecs: ecs.World;
    private _sender: ICommandSender;

    private _aiTrees: Map<string, b3.Tree> = new Map();

    constructor(sender: ICommandSender) {
        super();

        this._initBehavior3();

        this._sender = sender;

        this._ecs = new ecs.World();
        this._ecs.addSystem(new AiSystem(this));
        this._ecs.addSystem(new MovementSystem(this));
        this._ecs.addSystem(new SkillSystem(this));
    }

    private _initBehavior3() {
        this.registerProcess(...builtinNodes);
        this.registerProcess(Wait);
        this.registerProcess(NormalAttack);
    }

    update(delta: number) {
        this.time += delta;
        this._ecs.update(delta);
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

    findTargets(role: RoleComponent, etype: number, x: number, y: number, w: number, h: number) {}

    //-------------------------------------------------------------------------
    //------------------------------ICommandReceiver---------------------------
    //-------------------------------------------------------------------------
    start() {
        console.error("TODO: start");

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
        entity.addComponent(HeroComponent);

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

    private _loadSoliders(leader: RoleComponent) {
        leader.hero!.formation = formation;
        leader.hero!.formation.forEach((value, idx) => {
            const entity = this._ecs.createEntity();

            const role = entity.addComponent(RoleComponent);
            role.tid = idx >= 6 ? 40004 : 40002;
            role.hp = 200;
            role.maxHp = 200;

            const solider = entity.addComponent(SoldierComponent);
            solider.index = idx;
            solider.offset = value;
            leader.hero!.soldiers.push(solider);

            const transform = entity.addComponent(TransformComponent);
            transform.position.x = value.x + leader.transform.position.x;
            transform.position.z = value.z + leader.transform.position.z;

            const table = app.service.table;
            const soldierRow = table.soldier[role.tid];
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

    moveStart(eid: number, degree: number) {
        const role = this._ecs.getComponent(eid, RoleComponent);
        if (!role) {
            console.warn(`not found role: ${eid}`);
            return;
        }
        this._calcSpeed(role, degree);
        this._sender.moveStart(role.eid, degree, role.movement.velocity);
    }

    moveChange(eid: number, degree: number) {
        const role = this._ecs.getComponent(eid, RoleComponent);
        if (!role) {
            console.warn(`not found role: ${eid}`);
            return;
        }
        this._calcSpeed(role, degree);
        this._sender.moveChange(role.eid, degree, role.movement.velocity);
    }

    moveStop(eid: number) {
        const role = this._ecs.getComponent(eid, RoleComponent);
        if (!role) {
            console.warn(`not found role: ${eid}`);
            return;
        }
        const movement = role.movement;
        movement.speed.x = 0;
        movement.speed.y = 0;
        movement.speed.z = 0;
        this._sender.moveStop(role.eid);
    }

    private _calcSpeed(role: RoleComponent, degree: number) {
        const rad = MathUtil.toRadian(degree);
        const movement = role.movement;
        movement.speed.x = movement.velocity * Math.cos(rad);
        movement.speed.z = movement.velocity * Math.sin(rad);
    }

    //-------------------------------------------------------------------------
    //------------------------------ICommandSender-----------------------------
    //-------------------------------------------------------------------------
    chopTree(role: RoleComponent, wood: TreeComponent) {}

    launchSkill(role: RoleComponent, target?: RoleComponent) {}

    createWood() {}
}

export interface ICommandReceiver {
    moveStart(eid: number, degree: number): void;
    moveChange(eid: number, degree: number): void;
    moveStop(eid: number): void;
}

export interface ICommandSender {
    focus(eid: number): void;
    createRole(data: RoleCreator): void;
    createTree(data: TreeCreator): void;

    chopTree(eid: number, target: number): void;
    moveStart(eid: number, degree: number, velocity: number): void;
    moveChange(eid: number, degree: number, velocity: number): void;
    moveStop(eid: number): void;
}
