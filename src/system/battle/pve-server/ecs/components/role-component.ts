import { b3 } from "../../../../../core/behavior3/behavior";
import { ecs } from "../../../../../core/ecs";
import { IVector3Like } from "../../../../../core/laya";
import { PveServer } from "../../pve-server";
import { MovementComponent, TransformComponent } from "./movement-component";
import { LauncherComponent } from "./skill-component";

export class RoleEnv extends b3.Env {
    declare context: PveServer;
    owner!: RoleComponent;
}

export class RoleComponent extends ecs.Component {
    maxHp: number = 0;
    hp: number = 0;

    // 在表格中的定义
    tid: number = 0;

    // 缓存组件方便快速访问？
    private _movement?: MovementComponent;
    private _transform?: TransformComponent;
    private _skill?: LauncherComponent;
    private _hero?: HeroComponent;

    get movement() {
        return (this._movement ||= this.getComponent(MovementComponent)!);
    }

    get transform() {
        return (this._transform ||= this.getComponent(TransformComponent)!);
    }

    get launcher() {
        return (this._skill ||= this.getComponent(LauncherComponent)!);
    }

    get hero() {
        return (this._hero ||= this.getComponent(HeroComponent));
    }
}

export class SoldierComponent extends ecs.Component {
    leader!: RoleComponent;
    index: number = 0;
    offset!: IVector3Like;

    private _role?: RoleComponent;

    get role() {
        return (this._role ||= this.getComponent(RoleComponent)!);
    }
}

export class HeroComponent extends ecs.Component {
    formation!: Readonly<IVector3Like>[];
    soldiers: SoldierComponent[] = [];
}
