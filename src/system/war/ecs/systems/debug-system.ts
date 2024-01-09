import { Button, EditBox, Graphics, Label, Node, math } from "cc";
import { app } from "../../../../app";
import { ecs } from "../../../../core/ecs";
import proto from "../../../../def/proto.js";
import { war } from "../../../../def/war";
import { GamePlayer } from "../../game-player";
import { Debug } from "../components/debug";
import { Movement } from "../components/movement";
import { Timer } from "../components/timer";

export class DebugSystem extends ecs.System {
    private _debugGraphics: Graphics;
    private _gridGraphics: Graphics;
    private _debugLabel: Label;

    constructor(readonly context: GamePlayer) {
        super();

        this._debugGraphics = context.battlefield.debug.getComponent(Graphics)!;
        this._gridGraphics = context.battlefield.grid.getComponent(Graphics)!;

        this._debugLabel = context.find("info").getComponent(Label)!;

        // move to game player?
        context.find("debugSwitcher").on(Button.EventType.CLICK, () => {
            const debug = this.ecs.getSingletonComponent(Debug);
            if (debug) {
                debug.enable = !debug.enable;
            }
        });

        context.find("consoleSwitcher").on(Button.EventType.CLICK, () => {
            // this._console.active = !this._console.active;
        });

        // context.find("console/send").on(Button.EventType.CLICK, () => {
        //     const cmd = this._console.getComponentInChildren(EditBox)!;
        //     app.networkd.send(proto.user.c2s_gm.create({ cmd: cmd.string }));
        // });

        // this._console = context.find("console");
        // this._console.active = false;
    }

    update(dt: number) {
        this._debugGraphics.clear();
        this._gridGraphics.clear();

        const debug = this.ecs.getSingletonComponent(Debug);
        if (!debug?.enable) {
            return;
        }

        // 绘制网格
        const height = Math.ceil(war.SIZE.HEIGHT / 100) * 100;
        const width = Math.ceil(war.SIZE.WIDTH / 100) * 100;
        this._gridGraphics.lineWidth = 4;
        this._gridGraphics.strokeColor = new math.Color(0xff, 0, 0);
        for (let i = 0; i <= width; i += 100) {
            const x = i;
            this._gridGraphics.moveTo(x, 0);
            this._gridGraphics.lineTo(x, height);
        }
        for (let i = 0; i <= height; i += 100) {
            this._gridGraphics.moveTo(0, i);
            this._gridGraphics.lineTo(width, i);
        }
        this._gridGraphics.stroke();

        // 绘制服务器对象位置
        debug.infoes.forEach((value) => {
            this._debugGraphics.fillColor = new math.Color(
                (value.color >> 16) & 0xff,
                (value.color >> 8) & 0xff,
                value.color & 0xff
            );
            this._debugGraphics.circle(value.x, value.y + value.z, value.size);
            this._debugGraphics.fill();
        });

        // 绘制本地模拟位置
        this.ecs.getComponents(Movement).forEach((value) => {
            this._debugGraphics.fillColor = new math.Color(0xff, 0xff, 0xff);
            this._debugGraphics.rect(
                value.position.x - 5,
                value.position.y + value.position.z - 5,
                10,
                10
            );
            this._debugGraphics.fill();

            const track = value.track;
            if (track?.cp && track.p1) {
                const p0 = track.p0;
                const p2 = track.p2;
                const p1 = track.cp;
                this._debugGraphics.fillColor = math.Color.GREEN;
                this._debugGraphics.circle(p0.x, p0.y, 10);
                this._debugGraphics.circle(p2.x, p2.y, 10);
                this._debugGraphics.circle(track.p1.x, track.p1.y, 10);
                this._debugGraphics.circle(p1.x, p1.y, 7);
                this._debugGraphics.fill();
                this._debugGraphics.strokeColor = math.Color.GREEN;
                this._debugGraphics.lineWidth = 4;

                for (let t = 0; t < 1; t += 0.1) {
                    const t1 = (1 - t) * (1 - t);
                    const t2 = 2 * t * (1 - t);
                    const t3 = t * t;
                    if (t == 0) {
                        this._debugGraphics.moveTo(p0.x, p0.y);
                    } else {
                        this._debugGraphics.lineTo(
                            t1 * p0.x + t2 * p1.x + t3 * p2.x,
                            t1 * p0.y + t2 * p1.y + t3 * p2.y
                        );
                    }
                }
                this._debugGraphics.stroke();
            }
        });

        if (debug.logs.length) {
            for (const msg of debug.logs) {
                console.log("server log:", msg);
            }
            debug.logs.length = 0;
        }

        // 绘制时间信息
        const timer = this.ecs.getSingletonComponent(Timer)!;
        const lt = timer.local.toFixed(2);
        const st = timer.server.toFixed(2);
        this._debugLabel.string = `Time: L=${lt} S=${st} TS=${timer.scale}`;
    }
}
