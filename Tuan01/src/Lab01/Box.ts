export class Box<T> {
    store: T[];
    constructor() {
        this.store = [];
    }

    addItem(item: T) {
        this.store.push(item);
    }
}