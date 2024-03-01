import { b3 } from "../../../core/behavior3/behavior";
import { builtinNodes } from "../../../core/behavior3/nodes/builtin-nodes";
import { ecs } from "../../../core/ecs";
import { Loader } from "../../../core/loader";
import { RoleComponent } from "./ecs/components/role-component";
import { WoodComponent } from "./ecs/components/wood-component";

export class PveServer extends b3.Context {
    private _loader: Loader = new Loader();
    private _ecs: ecs.World;

    private _aiTrees: Map<string, b3.Tree> = new Map();

    constructor() {
        super();

        this._initBehavior3();

        this._ecs = new ecs.World();
    }

    private _initBehavior3() {
        this.registerProcess(...builtinNodes);
    }

    update(delta: number) {
        this.time += delta;
        this._ecs.update(delta);
    }

    async loadAiTree(res: string) {
        let tree = this._aiTrees.get(res);
        if (!tree) {
            const data = (await this._loader.loadJson(res)) as b3.TreeData;
            // 重新获取，有可能同时加载，前面一个已经完成了
            tree = this._aiTrees.get(res);
            if (!tree && data) {
                tree = new b3.Tree(data.name, data, this);
                this._aiTrees.set(res, tree);
            }
        }

        return tree;
    }

    findTargets(role: RoleComponent, etype: number, x: number, y: number, w: number, h: number) {}

    //-------------------------------------------------------------------------
    //------------------------------接收命令-----------------------------------
    //-------------------------------------------------------------------------
    moveStart(id: number, degree: number) {}

    moveStop(id: number) {}

    //-------------------------------------------------------------------------
    //------------------------------发送命令-----------------------------------
    //-------------------------------------------------------------------------
    chopTree(role: RoleComponent, wood: WoodComponent) {}

    launchSkill(role: RoleComponent, target?: RoleComponent) {}

    createRole() {}

    createWood() {}
}
