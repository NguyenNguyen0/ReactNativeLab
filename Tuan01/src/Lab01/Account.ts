export class Account {
    public owner: string;
    private readonly id: string;

    constructor(owner: string, id: string) {
        this.owner = owner;
        this.id = id;
    }
}