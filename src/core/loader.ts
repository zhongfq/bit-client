export class Loader {
    public async loadJson<T>(path: string) {
        const json = await Laya.loader.load(path, Laya.Loader.JSON);
        if (json) {
            return json.data as T;
        } else {
            return json;
        }
    }
}
