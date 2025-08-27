export const simulateTaskAsync = async (time: number) => {
    setTimeout(() => {
        console.log(`Task done async after: ${time} ms`);
    }, time);
}