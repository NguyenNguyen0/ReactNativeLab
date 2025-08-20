import { Book } from "./Book";
import { User } from "./User";

export class Library {
    users: User[];
    books: Book[];

    constructor(users: User[], books: Book[]) {
        this.users = users;
        this.books = books;
    }

    addBook(book: Book): number {
        return this.books.push(book);
    }
}