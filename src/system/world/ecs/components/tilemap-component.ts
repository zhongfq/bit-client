import { ecs } from "../../../../core/ecs";
import { LayaExt } from "../../../../core/laya";

export class Tilemap extends ecs.Component {
    static grid2Pixel(x: number, z: number, out: LayaExt.IVector3Like) {
        // TODO
        out.x = x * 4;
        out.z = z * 4;
        out.y = 0;
        return out;
    }

    static degree2Speed(deg: number, velocity: number, out: LayaExt.IVector3Like) {
        const rad = (deg / 180) * Math.PI;
        out.x = Math.cos(rad) * velocity * 4;
        out.z = Math.sin(rad) * velocity * 4;
        out.y = 0;
        return out;
    }
}
