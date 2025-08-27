export const simulateTask = (time: number, message?: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message || "Task done!")
        }, time);
    });
} 
