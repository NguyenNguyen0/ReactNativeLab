export const randomPromise = new Promise<number>((resolve, reject) => {
    const num = Math.floor(Math.random() * 10);
    if (num % 2 === 0) {
        resolve(num) 
    } else {
        reject(new Error(`Error thrown number: ${num}`));
    }
});