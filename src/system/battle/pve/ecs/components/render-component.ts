import { ecs } from "../../../../../core/ecs";
import {
    HeadInfoData,
    HeadInfoUI,
    HeadInfoStyle,
} from "../../../../../ui-runtime/prefab/battle/HeadInfoUI";

export class Renderable3D extends ecs.Component {
    res: string = "";
    view?: Laya.Sprite3D | null;
}

export class Renderable2D extends ecs.Component {
    res: string = "";
    view?: Laya.Sprite | null;
}

export class AnimationComponent extends Renderable3D {
    // 当前播放的动画
    name: string = "idle";
    // 循环播放
    loop: boolean = true;
    // 非循环动画完成后的动画
    normal: string = "idle";

    animator?: Laya.Animator | null;
}

export class ShadowComponent extends Renderable3D {}

export class HeadInfoComponent extends Renderable2D {
    declare view: HeadInfoUI | null;
    data: HeadInfoData = {
        hp: 0,
        maxHp: 1,
        mp: 100,
        maxMp: 100,
        style: HeadInfoStyle.OUR,
        offset: 0,
    };
}
