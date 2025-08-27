export const helloPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Hello Async');
        resolve(undefined);
    }, 2000);
});