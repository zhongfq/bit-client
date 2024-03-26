type ContextChecker = () => boolean;
type ExecutorResolve = (value: unknown) => void;

interface PromiseDescriptor {
    resolve: ExecutorResolve;
    contextChecker?: ContextChecker;
}

export class Loader {
    private _loadings: Map<string, PromiseDescriptor[]> = new Map();

    public async loadJson<T>(url: string, checker?: ContextChecker): Promise<T> {
        const json = await this.load<Laya.TextResource>(url, Laya.Loader.JSON, checker);
        return json.data as T;
    }

    public async loadAtlas(url: string, checker?: ContextChecker) {
        return this.load<Laya.AtlasResource>(url, Laya.Loader.ATLAS, checker);
    }

    public async loadTexture2D(url: string, checker?: ContextChecker) {
        return this.load<Laya.Texture2D>(url, Laya.Loader.TEXTURE2D, checker);
    }

    public async loadTexture(url: string, checker?: ContextChecker) {
        return this.load<Laya.Texture>(url, undefined!, checker);
    }

    public async loadPrefab(url: string, checker?: ContextChecker) {
        return this.load<Laya.Prefab>(url, Laya.Loader.HIERARCHY, checker);
    }

    /**
     * 加载资源，并且有返回一定成功。
     * @param url 加载的资源。
     * @param checker 在加载成功的情况下并且通过检查才会返回。
     * @returns
     */
    public load<T = unknown>(url: string, checker?: ContextChecker): Promise<T>;

    public load<T = unknown>(url: string, type: string, checker?: ContextChecker): Promise<T>;

    public load<T = unknown>(
        url: string,
        type?: string | ContextChecker,
        checker?: ContextChecker
    ): Promise<T> {
        const res = Laya.loader.getRes(url) as T;
        if (res) {
            return Promise.resolve(res);
        }
        return new Promise<T>((resolve) => {
            let arr = this._loadings.get(url);
            if (!arr) {
                arr = [];
                this._loadings.set(url, arr);
            }
            if (typeof type === "function") {
                checker = type;
                type = undefined;
            }
            arr.push({ resolve: resolve as ExecutorResolve, contextChecker: checker });
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
