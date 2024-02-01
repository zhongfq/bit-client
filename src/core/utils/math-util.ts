export class MathUtil {
    static equal(n1: number, n2: number, precision: number) {
        const value = n1 - n2;
        return !(value > precision || value < -precision);
    }

    static sub(n1: number, n2: number, precision: number) {
        const value = n1 - n2;
        return value > precision || value < -precision ? value : 0;
    }
}
