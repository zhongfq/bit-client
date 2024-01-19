import { ecs } from "../../../../core/ecs";
import { LayaExt } from "../../../../core/laya";

export class Tilemap extends ecs.Component {
    static grid2Pixel<T extends LayaExt.IVector3Like>(grid: LayaExt.IVector3Like, out: T) {
        const x = grid.x;
        const y = grid.y;
        const z = grid.z;

        // TODO
        out.x *= 10;
        out.z *= 10;

        return out;
    }
}
