export class Logger {
    private static instance: Logger;
    message: string;

    private constructor() {
        this.message = "defalt log";
    }

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log() {
        console.log(this.message);
    }
}