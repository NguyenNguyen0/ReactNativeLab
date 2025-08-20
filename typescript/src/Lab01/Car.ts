export class Car {
    brand: string;
    model: string;
    year: number;
    
    constructor(brand: string, model: string, year: number,) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    display() {
        console.log(`Car: {brand: ${this.brand}, model: ${this.model}, year: ${this.year}}`);
    }
}