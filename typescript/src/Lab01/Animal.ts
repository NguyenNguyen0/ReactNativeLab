export interface IAnimal {
    name: string;
    sound: () => void;
}

export class Animal implements IAnimal {
    name: string;
    sound: () => void;

    constructor(name: string, sound: () => void) {
        this.name = name;
        this.sound = sound;
    }
}

export class Cat extends Animal {
    constructor(name: string, sound: () => void) {
        super(name, sound);
    }

    meow() {
        this.sound();
    }
}

export class Dog extends Animal {
    constructor(name: string, sound: () => void) {
        super(name, sound);
    }

    bark() {
        this.sound()
    }
}