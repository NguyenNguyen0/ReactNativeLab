export class Book {
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    toString(): string {
        return `{title: ${this.title}, author: ${this.author}, year: ${this.year}}`;
    }
}