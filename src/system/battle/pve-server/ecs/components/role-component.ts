import { b3 } from "../../../../../core/behavior3/behavior";
import { ecs } from "../../../../../core/ecs";
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
    private _movement: MovementComponent | null = null;
    private _transform: TransformComponent | null = null;
    private _skill: LauncherComponent | null = null;

    get movement() {
        return (this._movement ||= this.getComponent(MovementComponent)!);
    }

    get transform() {
        return (this._transform ||= this.getComponent(TransformComponent)!);
    }

    get launcher() {
        return (this._skill ||= this.getComponent(LauncherComponent)!);
    }
}
