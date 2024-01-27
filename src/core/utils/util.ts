import { Reward } from "../../def/table.js";
import proto from "../../def/proto.js";
export class Util {
    //Map转换数组
    static toArray<T>(map: Map<any, any>): T[] {
        let ret: Array<T> = [];
        for (let [_, v] of map) {
            ret.push(v);
        }
        return ret;
    }
    //配置表奖励转换proto道具接口
    static toBagItemArray(rewards: Reward[]): proto.bag.IItem[] {
        let itemArray: proto.bag.IItem[] = [];
        for (let data of rewards) {
            itemArray.push(Util.toBagItem(data));
        }
        return itemArray;
    }
    static toBagItem(reward: Reward): proto.bag.IItem {
        let item: proto.bag.IItem = new proto.bag.Item();
        item.id = reward.id;
        item.num = reward.count;
        return item;
    }
}
