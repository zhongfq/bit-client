import { world } from "./def/world";

const { regClass, property } = Laya;

@regClass()
export class Main extends Laya.Script {
    onStart() {
        const arr: Laya.Prefab[] = [];
        const obj = arr.find((value) => value.referenceCount == 0);
        console.log(world, 2);
    }
}
