export interface Vehicle {
    name: string;
    model: string;
    year: number;
    moving: () => void;
}

export class Car implements Vehicle {
    name: string;
    model: string;
    year: number;

    constructor(name: string, model: string, year: number) {
        this.name = name;
        this.model = model;
        this.year = year;
    }

    moving() {
        console.log("Running...");
    }
}

export class Bike implements Vehicle {
    name: string;
    model: string;
    year: number;

    constructor(name: string, model: string, year: number) {
        this.name = name;
        this.model = model;
        this.year = year;
    }

    moving() {
        console.log("Bling Bling...");
    }
}