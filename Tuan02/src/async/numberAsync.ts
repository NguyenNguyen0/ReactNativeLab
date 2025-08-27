export const numberAsync = async (number: number) => {
    setTimeout(() => {}, 1000);
    return number * 3;
}