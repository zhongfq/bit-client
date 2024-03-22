type ContextChecker = () => boolean;

interface PromiseDescriptor {
    resolve: (value: unknown) => void;
    contextChecker?: ContextChecker;
}

export class Loader {
    private _loadings: Map<string, PromiseDescriptor[]> = new Map();

    /**
     * 同 loadPrefab
     * @param url
     * @param checker
     * @returns
     */
    public async loadJson<T>(url: string, checker?: ContextChecker): Promise<T> {
        const json = (await this._load(url, Laya.Loader.JSON, checker)) as Laya.TextResource;
        return json.data as T;
    }

    public async loadAtlas(url: string, checker?: ContextChecker) {
        return this._load(url, Laya.Loader.ATLAS, checker) as Promise<Laya.AtlasResource>;
    }

    public async loadTexture2D(url: string, checker?: ContextChecker) {
        return this._load(url, Laya.Loader.TEXTURE2D, checker) as Promise<Laya.Texture2D>;
    }

    /**
     * 加载预制体，并且有返回一定成功。
     * @param url 加载的资源。
     * @param checker 在加载成功的情况下并且通过检查才会返回。
     * @returns
     */
    public async loadPrefab(url: string, checker?: ContextChecker) {
        return this._load(url, Laya.Loader.HIERARCHY, checker) as Promise<Laya.Prefab>;
    }

    private _load(url: string, type: string, checker?: ContextChecker): Promise<unknown> {
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
            arr.push({ resolve, contextChecker: checker });
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
