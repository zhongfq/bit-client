import { ecs } from "../../../../../core/ecs";
import { IVector3Like } from "../../../../../core/laya";
import { BattleEntityRow, SoldierRow } from "../../../../../def/table";
import { MovementComponent, TransformComponent } from "./movement-component";
import { SkillComponent } from "./skill-component";

export class ElementComponent extends ecs.Component {
    data!: BattleEntityRow;

    maxHp: number = 0;
    hp: number = 0;

    // 在表格中的定义
    tid: number = 0;

    // 阵营
    aid: number = 0;

    // 用于目标按距离排序
    tmpDistance: number = 0;

    // 出生点
    spawnpoint: Laya.Vector3 = new Laya.Vector3();

    // 按出点生成的关键信息
    key: string = "";

    // 缓存组件方便快速访问？
    private _movement?: MovementComponent;
    private _transform?: TransformComponent;
    private _skill?: SkillComponent;
    private _troop?: TroopComponent;
    private _soldier?: SoldierComponent;

    get movement() {
        return (this._movement ||= this.getComponent(MovementComponent)!);
    }

    get transform() {
        return (this._transform ||= this.getComponent(TransformComponent)!);
    }

    get skill() {
        return (this._skill ||= this.getComponent(SkillComponent));
    }

    get troop() {
        return (this._troop ||= this.getComponent(TroopComponent));
    }

    get soldier() {
        return (this._soldier ||= this.getComponent(SoldierComponent));
    }
}

export class SoldierComponent extends ecs.Component {
    data!: SoldierRow;
    hero!: ElementComponent;
    index: number = 0;
    offset!: IVector3Like;

    private _element?: ElementComponent;

    get element() {
        return (this._element ||= this.getComponent(ElementComponent)!);
    }
}

export class TroopComponent extends ecs.Component {
    formation!: Readonly<IVector3Like>[];
    soldiers: SoldierComponent[] = [];

    private _element?: ElementComponent;

    get element() {
        return (this._element ||= this.getComponent(ElementComponent)!);
    }
}
