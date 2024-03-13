import { Reward } from "../../def/table.js";
import proto from "../../def/proto.js";
export class Util {
    //Map转换数组
    public static toArray<T>(map: Map<any, any>): T[] {
        const ret: Array<T> = [];
        for (const [_, v] of map) {
            ret.push(v);
        }
        return ret;
    }

    //配置表奖励转换proto道具接口
    public static toBagItemArray(rewards: Reward[]): proto.bag.IItem[] {
        const itemArray: proto.bag.IItem[] = [];
        for (const data of rewards) {
            itemArray.push(Util.toBagItem(data));
        }
        return itemArray;
    }

    public static toBagItem(reward: Reward): proto.bag.IItem {
        const item: proto.bag.IItem = new proto.bag.Item();
        item.id = reward.id;
        item.num = reward.count;
        return item;
    }
}
