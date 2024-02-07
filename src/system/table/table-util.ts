type KeyPairs<T> = {
    [K in keyof T]?: T[K];
};

export class TableUtil {
    static getRefAll() {}

    static isMatch<T>(value: T, filter: KeyPairs<T>) {
        for (const key in filter) {
            if (value[key] !== filter[key]) {
                return false;
            }
        }
        return true;
    }

    static getRef<T>(source: T[], filter: KeyPairs<T>): T | undefined;

    static getRef<T>(source: { [k: number | string]: T }, filter: KeyPairs<T>): T | undefined;

    static getRef<T>(
        source: T[] | { [k: number | string]: T },
        filter: KeyPairs<T>
    ): T | undefined {
        if (source instanceof Array) {
            return source.find((value) => TableUtil.isMatch(value, filter));
        } else {
            const a = Object.values(source);
            return a.find((value) => TableUtil.isMatch(value, filter));
        }
    }

    static getArrayRef<T>(source: T[], filter: KeyPairs<T>): T[];

    static getArrayRef<T>(source: { [k: number | string]: T }, filter: KeyPairs<T>): T[];

    static getArrayRef<T>(source: T[] | { [k: number | string]: T }, filter: KeyPairs<T>): T[] {
        if (source instanceof Array) {
            return source.filter((value) => TableUtil.isMatch(value, filter));
        } else {
            const a = Object.values(source);
            return a.filter((value) => TableUtil.isMatch(value, filter));
        }
    }
}
