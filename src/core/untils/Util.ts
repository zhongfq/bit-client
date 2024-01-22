export class Util {
    static toArray<T>(map: Map<any, any>): T[] {
        let ret: Array<T> = [];
        for (let [_, v] of map) {
            ret.push(v);
        }
        return ret;
    }
}
