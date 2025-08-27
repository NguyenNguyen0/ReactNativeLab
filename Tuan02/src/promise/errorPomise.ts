export const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Error Promise"));
    }, 1000);
});