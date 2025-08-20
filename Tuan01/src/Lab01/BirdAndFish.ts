export interface Flyable {
    name: string;
    fly: () => void;
}

export interface Swimmable {
    name: string;
    swim: () => void;
}

export class Bird implements Flyable {
    name: string;
    fly: () => void;

    constructor(name: string, fly: () => void) {
        this.name = name;
        this.fly = fly;
    }
}

export class Fish implements Swimmable {
    name: string;
    swim: () => void;

    constructor(name: string, swim: () => void) {
        this.name = name;
        this.swim = swim;
    }
}