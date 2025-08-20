export class MathUtil {
    constructor() {}

    public static add(...number: number[]): number {
        return number.reduce((acc, num) => acc + num, 0);
    }

    public static subtract(a: number, b: number): number {
        return a - b;
    }

    public static multiply(...number: number[]): number {
        return number.reduce((acc, num) => acc * num, 1);
    }

    public static divide(a: number, b: number): number {
        return a / b;
    }
}