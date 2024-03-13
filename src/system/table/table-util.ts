type KeyPairs<T> = {
    [K in keyof T]?: T[K];
};

export class TableUtil {
    public static getRefAll() {}

    private static _isMatch<T>(value: T, filter: KeyPairs<T>) {
        for (const key in filter) {
            if (value[key] !== filter[key]) {
                return false;
            }
        }
        return true;
    }

    public static getRow<T>(source: T[], filter: KeyPairs<T>): T | undefined;

    public static getRow<T>(
        source: { [k: number | string]: T },
        filter: KeyPairs<T>
    ): T | undefined;

    /**
     * 获取表格中的一行
     * @param source
     * @param filter
     * @returns
     */
    public static getRow<T>(
        source: T[] | { [k: number | string]: T },
        filter: KeyPairs<T>
    ): T | undefined {
        if (source instanceof Array) {
            return source.find((value) => TableUtil._isMatch(value, filter));
        } else {
            const a = Object.values(source);
            return a.find((value) => TableUtil._isMatch(value, filter));
        }
    }

    public static getRows<T>(source: T[], filter: KeyPairs<T>): T[];

    public static getRows<T>(source: { [k: number | string]: T }, filter: KeyPairs<T>): T[];

    /**
     * 获取表格中的多行
     * @param source
     * @param filter
     * @returns
     */
    public static getRows<T>(source: T[] | { [k: number | string]: T }, filter: KeyPairs<T>): T[] {
        if (source instanceof Array) {
            return source.filter((value) => TableUtil._isMatch(value, filter));
        } else {
            const a = Object.values(source);
            return a.filter((value) => TableUtil._isMatch(value, filter));
        }
    }
}
