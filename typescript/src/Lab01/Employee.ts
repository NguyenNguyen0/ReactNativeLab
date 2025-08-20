export class Employee {
    name: string;
    salary: number;
    position: string;

    constructor(name: string, salary: number, position: string) {
        this.name = name;
        this.salary = salary;
        this.position = position;
    }
}

export class Manager extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary, "Manager");
    }

    rob() {
        console.log(`${this.name} is robbing employees!`);
    }
}


export class Developer extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary, "Developer");
    }

    work() {
        console.log(`${this.name} is working with his life!`);
    }
}
