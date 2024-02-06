import { ecs } from "../../../../core/ecs";
import { IVector3Like } from "../../../../core/laya";

export class Tilemap extends ecs.Component {
    static readonly RATE = 1;

    static grid2Pixel(x: number, z: number, out: IVector3Like) {
        // TODO
        out.x = x * Tilemap.RATE;
        out.z = z * Tilemap.RATE;
        out.y = 0;
        return out;
    }

    static degree2Speed(deg: number, velocity: number, out: IVector3Like) {
        const rad = (deg / 180) * Math.PI;
        out.x = Math.cos(rad) * velocity * Tilemap.RATE;
        out.z = Math.sin(rad) * velocity * Tilemap.RATE;
        out.y = 0;
        return out;
    }
}
