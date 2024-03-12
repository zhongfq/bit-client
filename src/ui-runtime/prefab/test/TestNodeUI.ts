const { regClass } = Laya;
import { app } from "../../../app";
import { Tween } from "../../../core/laya";
import { TestNodeUIBase } from "./TestNodeUI.generated";

@regClass()
export class TestNodeUI extends TestNodeUIBase {
    points: number[] = [];

    override set_dataSource(data: any) {
        super.set_dataSource(data);
        this.Label.text = data;
    }

    override onAwake(): void {
        // this.points = Laya.Bezier.I.getBezierPoints([50, 1000, 218, 513, 550, 1000], 5, 2);
        // const b = 1;
        // this.Sprite_1.graphics.drawCurves(10, 58, [0, 1000, 250, 50, 500, 1000], "#ff0000", 3);
        // 0:
        // 50
        // 1:
        // 1000
        // 2:
        // 124.00000000000003
        // 3:
        // 840.0000000000001
        // 4:
        // 206
        // 5:
        // 760
        // 6:
        // 296.00000000000006
        // 7:
        // 760
        // 8:
        // 394.00000000000006
        // 9:
        // 840
        // 10:
        // 500
        // 11:
        // 1000
    }

    private calculateDistance(p1: Laya.Point, p2: Laya.Point): number {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    }

    private _twenn(num: number) {
        // const a = Laya.Bezier.I.getBezierPoints([50, 1000, 250, 230, 550, 1000]);
        const a = this.calculateDistance(
            new Laya.Point(this.points[num - 2], this.points[num - 1]),
            new Laya.Point(this.points[num], this.points[num + 1])
        );
        // console.log(a);
        console.log(this.points[num - 2], this.points[num - 1]);
        console.log(this.points[num], this.points[num + 1]);

        Laya.Tween.to(
            this,
            { x: this.points[num], y: this.points[num + 1] },
            a / 1,
            null,
            Laya.Handler.create(this, () => {
                if (num + 2 >= this.points.length) {
                    return;
                } else {
                    this._twenn(num + 2);
                }
            })
        );
        // 使用Tween动画实现贝塞尔曲线运动
        // Laya.Tween.to(
        //     sprite,
        //     { x: controlPoints[2].x, y: controlPoints[2].y },
        //     1000,
        //     Laya.Ease.linearNone,
        //     Laya.Handler.create(this, function () {
        //         // 动画完成后的回调
        //     }),
        //     0,
        //     true
        // );
    }
}
