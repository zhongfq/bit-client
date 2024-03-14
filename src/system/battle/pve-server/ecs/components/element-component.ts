import { ecs } from "../../../../../core/ecs";
import { IVector3Like } from "../../../../../core/laya";
import { BattleEntityRow, SoldierRow } from "../../../../../def/table";
import { MovementComponent, TransformComponent } from "./movement-component";
import { SkillComponent } from "./skill-component";

export class ElementComponent extends ecs.Component {
    public data!: BattleEntityRow;

    public maxHp: number = 0;
    public hp: number = 0;

    // 在表格中的定义
    public tid: number = 0;

    // 阵营
    public aid: number = 0;

    // 用于目标按距离排序
    public tmpDistance: number = 0;

    // 出生点
    public spawnpoint: Laya.Vector3 = new Laya.Vector3();

    // 按出点生成的关键信息
    public key: string = "";

    // 缓存组件方便快速访问？
    private _movement?: MovementComponent;
    private _transform?: TransformComponent;
    private _skill?: SkillComponent;
    private _troop?: TroopComponent;
    private _soldier?: SoldierComponent;
    private _truck?: TruckComponent;

    public get movement() {
        return (this._movement ||= this.getComponent(MovementComponent)!);
    }

    public get transform() {
        return (this._transform ||= this.getComponent(TransformComponent)!);
    }

    public get skill() {
        return (this._skill ||= this.getComponent(SkillComponent));
    }

    public get troop() {
        return (this._troop ||= this.getComponent(TroopComponent));
    }

    public get soldier() {
        return (this._soldier ||= this.getComponent(SoldierComponent));
    }

    public get truck() {
        return (this._truck ||= this.getComponent(TruckComponent));
    }
}

export class FollowerComponent extends ecs.Component {
    public hero!: ElementComponent;
    public index: number = 0;
    public offset!: IVector3Like;

    private _element?: ElementComponent;

    public get element() {
        return (this._element ||= this.getComponent(ElementComponent)!);
    }
}

export class SoldierComponent extends FollowerComponent {
    public data!: SoldierRow;
}

export class TruckComponent extends FollowerComponent {
    public data = undefined; // TODO：资源车不需要读配置表，暂时留空
}

export class TroopComponent extends ecs.Component {
    public formation!: Readonly<IVector3Like>[];
    public soldiers: SoldierComponent[] = [];
    public trucks: TruckComponent[] = [];

    private _element?: ElementComponent;

    public get element() {
        return (this._element ||= this.getComponent(ElementComponent)!);
    }
}
