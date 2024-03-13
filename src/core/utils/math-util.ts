const TO_DEGREE = 180 / Math.PI;

export class MathUtil {
    public static equal(n1: number, n2: number, precision: number) {
        const value = n1 - n2;
        return !(value > precision || value < -precision);
    }

    public static sub(n1: number, n2: number, precision: number) {
        const value = n1 - n2;
        return value > precision || value < -precision ? value : 0;
    }

    public static toDegree(rad: number) {
        return rad * TO_DEGREE;
    }

    public static toRadian(degree: number) {
        return degree / TO_DEGREE;
    }

    public static randomInt(min: number, max: number) {
        return min + Math.round(Math.random() * (max - min));
    }
}
