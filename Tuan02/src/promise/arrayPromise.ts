export const arrayPromise = (a: number[]): Promise<number[]> => {
    return new Promise<number[]>((resolve, reject) => {
        setTimeout(() => {
            resolve(a.filter(e => e % 2 === 0));
        }, 1000);
    });
}