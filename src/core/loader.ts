interface PromiseDescriptor {
    resolve: (value: unknown) => void;
    contextChecker?: () => boolean;
}

export class Loader {
    private _loadings: Map<string, PromiseDescriptor[]> = new Map();

    public async loadJson<T>(path: string) {
        const json = await Laya.loader.load(path, Laya.Loader.JSON);
        if (json) {
            return json.data as T;
        } else {
            return json;
        }
    }

    public async loadPrefab(url: string, contextChecker?: () => boolean): Promise<Laya.Prefab> {
        return this._load(url, Laya.Loader.HIERARCHY, contextChecker) as Promise<Laya.Prefab>;
    }

    private _load(url: string, type: string, contextChecker?: () => boolean): Promise<unknown> {
        const res = Laya.loader.getRes(url);
        if (res) {
            return Promise.resolve(res);
        }
        return new Promise((resolve) => {
            let arr = this._loadings.get(url);
            if (!arr) {
                arr = [];
                this._loadings.set(url, arr);
            }
            arr.push({ resolve, contextChecker });
            if (arr.length == 1) {
                Laya.loader.load(url, type).then((value) => {
                    if (!value) {
                        // TODO: 显示弹窗提醒用户，并且进行3次尝试
                        console.error(`load error: ${url}`);
                    } else {
                        for (const descriptor of arr!) {
                            if (!descriptor.contextChecker || descriptor.contextChecker()) {
                                descriptor.resolve(value);
                            } else {
                                console.warn(`context check failure: ${url}`);
                            }
                        }
                        this._loadings.delete(url);
                    }
                });
            }
        });
    }
}
