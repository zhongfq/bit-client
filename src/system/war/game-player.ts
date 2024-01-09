import { Node } from "cc";
import { app } from "../../app";
import { Component } from "../../core/component";
import { ecs } from "../../core/ecs";
import { Mediator } from "../../core/ui-mediator";
import proto from "../../def/proto.js";
import { errcode, opcode } from "../../def/protocol";
import { Debug } from "./ecs/components/debug";
import { Gamepad } from "./ecs/components/gamepad";
import { Timer } from "./ecs/components/timer";
import { BuffSystem } from "./ecs/systems/buff-system";
import { CommandSystem } from "./ecs/systems/command-system";
import { DebugSystem } from "./ecs/systems/debug-system";
import { GamepadSystem } from "./ecs/systems/gampad-system";
import { MovementSystem } from "./ecs/systems/movement-system";
import { RenderSystem } from "./ecs/systems/render-system";
import { TimerSystem } from "./ecs/systems/timer-system";

export const PREFAB_BATTLE_HP = "prefab/battle/ui/hp";
export const PREFAB_BATTLE_SUBHP = "prefab/battle/ui/subhp";

export class GamePlayer extends Mediator {
    private static TOLERANCE = 0;

    battlefield: Battlefield = null!;

    private _ecs!: ecs.World;
    private _warUid: number = 0;

    protected onLoad() {
        this.battlefield = this.node.addComponent(Battlefield);

        app.networkd.ignoreLog(opcode.war.notify_debug);

        this._ecs = new ecs.World();
        this._ecs.addSingletonComponent(Timer);
        this._ecs.addSingletonComponent(Debug);
        this._ecs.addSingletonComponent(Gamepad);
        this._ecs.addSystem(new GamepadSystem(this));
        this._ecs.addSystem(new TimerSystem(this));
        this._ecs.addSystem(new CommandSystem(this));
        this._ecs.addSystem(new MovementSystem(this));
        this._ecs.addSystem(new RenderSystem(this));
        this._ecs.addSystem(new BuffSystem(this));
        this._ecs.addSystem(new DebugSystem(this));
    }

    async startGame(warUid: number) {
        this._warUid = warUid;

        // TODO: 移除之前的数据

        const war = await app.ward.load(warUid);
        if (war.err !== errcode.OK) {
            app.ui.toast(`加载战斗数据出错：${war.err}`);
            // TODO: 移除战斗界面？
            return;
        }

        // load assets
        const paths: string[] = [];
        // for (const k in app.entity) {
        //     const item = this._entityTable.entity[k];
        //     paths.push(item.res);
        // }
        // for (const k in this._buffTable.buff) {
        //     const item = this._buffTable.buff[k];
        //     paths.push(item.res);
        // }
        await this.loadAssets(paths);
        console.log("load assets complete");

        // send ready
        const ready = await app.ward.ready(warUid);
        if (ready.err !== errcode.OK) {
            app.ui.toast(`战斗准备出错，错误码：${ready.err}`);
            // TODO: 移除战斗界面？
            return;
        }
    }

    protected update(delta: number): void {
        const timerSystem = this._ecs.getSystem(TimerSystem)!;
        timerSystem.advance(delta);
        const timer = this._ecs.getSingletonComponent(Timer)!;
        timer.steps.forEach((step) => this._ecs.update(step));
        timer.steps.length = 0;
    }

    get warUid() {
        return this._warUid;
    }
}

class Battlefield extends Component {
    shadow!: Node; // 阴影
    ground!: Node; // 角色、技能
    hp!: Node; // 角色血条
    label!: Node; // 扣血显示、文字显示
    debug!: Node; // 绘制位置
    grid!: Node; // 绘制网格

    protected onLoad(): void {
        this.shadow = this.find("content/elements/shadow");
        this.ground = this.find("content/elements/ground");
        this.hp = this.find("content/elements/hp");
        this.label = this.find("content/elements/label");
        this.debug = this.find("content/elements/debug");
        this.grid = this.find("content/elements/grid");
    }
}
