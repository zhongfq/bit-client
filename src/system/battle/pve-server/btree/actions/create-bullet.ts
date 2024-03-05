import { b3 } from "../../../../../core/behavior3/behavior";
import { RoleComponent, RoleTreeEnv } from "../../ecs/components/role-component";

export class CreateBullet extends b3.Process {
    override run(node: b3.Node, env: RoleTreeEnv, target?: RoleComponent[] | RoleComponent) {
        return b3.Status.SUCCESS;
    }

    override get descriptor() {
        return {
            name: "CreateBullet",
            type: "Action",
            desc: "创建子弹",
            args: [
                { name: "entity_id", type: "int", desc: "子弹实体id" },
                { name: "h", type: "int?", desc: "子弹高度" },
                { name: "src_x", type: "int?", desc: "起点x坐标(相对释放者)" },
                { name: "src_y", type: "int?", desc: "起点y坐标(相对释放者)" },
                { name: "dst_x", type: "int?", desc: "终点x坐标(相对释放者)" },
                { name: "dst_y", type: "int?", desc: "终点y坐标(相对释放者)" },
                { name: "follow", type: "boolean?", desc: "是否跟随目标" },
                { name: "speed", type: "int?", desc: "飞行速度" },
                { name: "update_ms", type: "int?", desc: "更新频率(毫秒)" },
                { name: "update_btree", type: "string?", desc: "更新行为" },
                { name: "reach_btree", type: "string?", desc: "到达终点行为" },
            ],
            input: ["目标单位", "终点坐标"],
            doc: `
            ## 终点的优先级
            + 跟随目标
            + 输入变量【终点坐标】
            + 参数【终点坐(相对释放者)】
            ![](https://c-ssl.dtstatic.com/uploads/item/201509/01/20150901143403_jdkS5.thumb.1000_0.gif)
            `,
        };
    }
}
