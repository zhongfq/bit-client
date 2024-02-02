const TO_DEGREE = 180 / Math.PI;

export class MathUtil {
    static equal(n1: number, n2: number, precision: number) {
        const value = n1 - n2;
        return !(value > precision || value < -precision);
    }

    static sub(n1: number, n2: number, precision: number) {
        const value = n1 - n2;
        return value > precision || value < -precision ? value : 0;
    }

    static toDegree(rad: number) {
        return rad * TO_DEGREE;
    }

    static toRadian(degree: number) {
        return degree / TO_DEGREE;
    }
}
