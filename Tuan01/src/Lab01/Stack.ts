export class Stack<T> {
    private stack: T[];

    constructor() {
        this.stack = [];    
    }

    push(item: T): void {
        this.stack.push(item);
    }

    pop(): void {
        this.stack.pop();
    }

    peek(): T {
        return this.stack[this.stack.length - 1];
    }

    isEmpty(): boolean {
        return this.stack.length === 0;
    }
}