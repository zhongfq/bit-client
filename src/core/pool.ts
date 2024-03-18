import { Constructor } from "./dispatcher";

export class Pool {
    private static _poolDic: Map<string | Constructor<unknown>, unknown[]> = new Map();

    public static obtain<T>(cls: Constructor<T>): T;

    public static obtain<T>(sign: string, creator: () => T): T;

    public static obtain<T>(clsOrSign: string | Constructor<T>, creator?: () => T) {
        const pool = Pool._getPool(clsOrSign);
        let obj: T;
        if (pool.length) {
            obj = pool.pop()!;
        } else if (typeof clsOrSign === "string") {
            obj = creator!();
        } else {
            obj = new clsOrSign();
        }
        (obj as any).__IN_POOL = false;
        return obj;
    }

    public static free<T>(obj: T | T[]): void;

    public static free<T>(sign: string, obj: T): void;

    public static free<T>(objOrSign: string | T | T[], obj?: T): void {
        if (objOrSign instanceof Array) {
            const arr = objOrSign;
            for (const v of arr) {
                Pool.free(v);
            }
            arr.length = 0;
        } else if (typeof objOrSign === "string") {
            if (obj && (obj as any).__IN_POOL === false) {
                const sign = objOrSign;
                (obj as any).__IN_POOL = true;
                Pool._getPool(sign).push(obj);
            }
        } else if (objOrSign && (objOrSign as any).__IN_POOL === false) {
            obj = objOrSign;
            const pool = Pool._getPool((obj as any).constructor);
            (obj as any).__IN_POOL = true;
            pool.push(obj);
        }
    }

    public static clear<T>(clsOrSign: string | Constructor<T>, callback?: (obj: T) => void) {
        const pool = Pool._getPool(clsOrSign);
        if (callback) {
            pool.forEach(callback);
        }
        pool.length = 0;
    }

    private static _getPool<T>(clsOrSign: string | Constructor<T>): T[] {
        let pool = this._poolDic.get(clsOrSign) as T[] | undefined;
        if (!pool) {
            pool = [];
            this._poolDic.set(clsOrSign, pool);
        }
        return pool;
    }
}
