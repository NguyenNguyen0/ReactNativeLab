export const numberPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
})