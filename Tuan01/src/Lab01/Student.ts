import { Person } from "./Person";

export class Student extends Person {
    grade: number;

    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }
    
    display(): void {
        console.log(`${this.name} is ${this.age} year old. And have ${this.grade} grade!`);
    }
}