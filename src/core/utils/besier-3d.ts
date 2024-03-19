import { Callback } from "../dispatcher";

/**
 * 计算3D贝塞尔曲线的工具类。
 */
export class Bezier3D {
    /**
     * 工具类单例
     */
    public static I: Bezier3D = new Bezier3D();

    private _controlPoints: Laya.Vector3[] = [
        new Laya.Vector3(),
        new Laya.Vector3(),
        new Laya.Vector3(),
    ];

    private _calFun: Callback = this.getPoint2;

    private _switchPoint(x: number, y: number, z: number): void {
        const tPoint: Laya.Vector3 = this._controlPoints.shift()!;
        tPoint.set(x, y, z);
        this._controlPoints.push(tPoint);
    }

    /**
     * 计算二次贝塞尔点。
     */
    public getPoint2(t: number, rst: any[]): void {
        //二次贝塞尔曲线公式
        const p1: Laya.Vector3 = this._controlPoints[0];
        const p2: Laya.Vector3 = this._controlPoints[1];
        const p3: Laya.Vector3 = this._controlPoints[2];
        const lineX: number =
            Math.pow(1 - t, 2) * p1.x + 2 * t * (1 - t) * p2.x + Math.pow(t, 2) * p3.x;
        const lineY: number =
            Math.pow(1 - t, 2) * p1.y + 2 * t * (1 - t) * p2.y + Math.pow(t, 2) * p3.y;
        const lineZ: number =
            Math.pow(1 - t, 2) * p1.z + 2 * t * (1 - t) * p2.z + Math.pow(t, 2) * p3.z;
        rst.push(lineX, lineY, lineZ);
    }

    /**
     * 计算三次贝塞尔点
     */
    public getPoint3(t: number, rst: any[]): void {
        //三次贝塞尔曲线公式
        const p1: Laya.Vector3 = this._controlPoints[0];
        const p2: Laya.Vector3 = this._controlPoints[1];
        const p3: Laya.Vector3 = this._controlPoints[2];
        const p4: Laya.Vector3 = this._controlPoints[3];
        const lineX: number =
            Math.pow(1 - t, 3) * p1.x +
            3 * p2.x * t * (1 - t) * (1 - t) +
            3 * p3.x * t * t * (1 - t) +
            p4.x * Math.pow(t, 3);
        const lineY: number =
            Math.pow(1 - t, 3) * p1.y +
            3 * p2.y * t * (1 - t) * (1 - t) +
            3 * p3.y * t * t * (1 - t) +
            p4.y * Math.pow(t, 3);
        const lineZ: number =
            Math.pow(1 - t, 3) * p1.z +
            3 * p2.z * t * (1 - t) * (1 - t) +
            3 * p3.z * t * t * (1 - t) +
            p4.z * Math.pow(t, 3);
        rst.push(lineX, lineY, lineZ);
    }

    /**
     * 计算贝塞尔点序列
     */
    public insertPoints(count: number, rst: any[]): void {
        let i: number;
        count = count > 0 ? count : 5;
        const dLen: number = 1 / count;
        for (i = 0; i <= 1; i += dLen) {
            this._calFun(i, rst);
        }
    }

    /**
     * 获取贝塞尔曲线上的点。
     * @param pList 控制点[x0,y0,z0,x1,y1,z1...]
     * @param inSertCount 每次曲线的插值数量
     */
    public getBezierPoints(pList: any[], inSertCount: number = 5, count: number = 2): any[] {
        let i: number;
        const len: number = pList.length;
        if (len < (count + 1) * 3) return [];
        const rst: any[] = [];
        switch (count) {
            case 2:
                this._calFun = this.getPoint2;
                break;
            case 3:
                this._calFun = this.getPoint3;
                break;
            default:
                return [];
        }
        while (this._controlPoints.length <= count) {
            this._controlPoints.push(new Laya.Vector3());
        }
        for (i = 0; i < count * 3; i += 3) {
            this._switchPoint(pList[i], pList[i + 1], pList[i + 2]);
        }
        for (i = count * 3; i < len; i += 3) {
            this._switchPoint(pList[i], pList[i + 1], pList[i + 2]);
            if ((i / 3) % count == 0) this.insertPoints(inSertCount, rst);
        }
        return rst;
    }
}
