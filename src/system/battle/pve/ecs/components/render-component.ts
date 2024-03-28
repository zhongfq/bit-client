import * as ecs from "../../../../../core/ecs";
import {
    HeadInfoData,
    HeadInfoUI,
    HeadInfoStyle,
} from "../../../../../ui-runtime/prefab/battle/pve/HeadInfoUI";

export class Renderable3D extends ecs.Component {
    public res: string = "";
    public view?: Laya.Sprite3D | null;
}

export class Renderable2D extends ecs.Component {
    public res: string = "";
    public view?: Laya.Sprite | null;
}

interface AnimationState {
    name: string;
    clip: string;
}

export class AnimationComponent extends Renderable3D {
    // 当前播放的动画
    public current: AnimationState = { name: "idle", clip: "idle" };
    // 非循环动画完成后的动画
    public default: AnimationState = { name: "idle", clip: "idle" };
    // 循环播放
    public loop: boolean = true;
    // 冲锋状态
    public rushing: boolean = false;

    public animator?: Laya.Animator | null;
}

export class ShadowComponent extends Renderable3D {}

export class BoardComponent extends Renderable3D {}

export class HeadInfoComponent extends Renderable2D {
    public declare view: HeadInfoUI | null;
    public data: HeadInfoData = {
        hp: 0,
        maxHp: 1,
        mp: 100,
        maxMp: 100,
        style: HeadInfoStyle.OUR,
        offset: 0,
    };
}
