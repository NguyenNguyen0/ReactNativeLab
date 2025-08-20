import { Account } from "./Lab01/Account";
import { Cat, Dog } from "./Lab01/Animal";
import { BankAccount } from "./Lab01/BankAccount";
import { Bird, Fish } from "./Lab01/BirdAndFish";
import { Book } from "./Lab01/Book";
import { Box } from "./Lab01/Box";
import { Car } from "./Lab01/Car";
import { Circle } from "./Lab01/Circle";
import { Developer, Employee, Manager } from "./Lab01/Employee";
import { Library } from "./Lab01/Library";
import { Person } from "./Lab01/Person";
import { Product } from "./Lab01/Product";
import { Rectangle } from "./Lab01/Rectangle";
import { Shape } from "./Lab01/Shape";
import { Square } from "./Lab01/Square";
import { Student } from "./Lab01/Student";
import { User } from "./Lab01/User";

console.log("01. Person");
const nguyen: Person = new Person("nguyen", 12);
nguyen.display()

console.log("02. Student");
const giasi: Student = new Student("Gia Si", 12, 10);
giasi.display()

console.log("03. Student");
const mec: Car = new Car("Mecesdes", "ben", 1999);
mec.display()

console.log("04. Rectangle");
const rec: Rectangle = new Rectangle(21, 21);
console.log("Area: " + rec.getArea());
console.log("Perimeter: " + rec.getPerimeter());


console.log("05. BankAccount");
const myBankAccount: BankAccount = new BankAccount(1999);
myBankAccount.deposit(100);
myBankAccount.withdraw(21);
console.log(myBankAccount);

console.log("06. Book");
const dacNhanTam: Book = new Book("Dark Nhan Tam", "Putin", 1999);
console.log(dacNhanTam);

console.log("07. Book");
const user1: User = new User("Putin");
console.log("User name: " + user1.name);
user1.name = "Trump"
console.log("New user name: " + user1.name);

console.log("08. Product");
const products: Product[] = [new Product("laptop", 121), new Product("iphone", 11), new Product("samsung", 72), new Product("pc", 41)];
console.log('Current products: ' + products);
console.log('Product with price > 100: ' + products.filter(product => product.price > 100));

console.log("9. Account");
const account: Account = new Account("nguyen", "123");
console.log(account);

console.log("11. Animal, Cat, Dog");
const dog: Dog = new Dog("Cun", () => {console.log("Gau Gau");});
const cat: Cat = new Cat("Hoang thuong", () => {console.log("Meo meo");});
dog.bark()
cat.meow()

console.log("12. Flyable, Swimmable, Bird, Fish");
const bird: Bird = new Bird('Dai bang sa mac', () => {console.log("Bang Bang");})
const fish: Fish = new Fish('Ca kho', () => {console.log("Xeo Xeo");})
bird.fly()
fish.swim()

console.log("13. Shape, Square, Circle");
const square: Shape = new Square(12);
const circle: Shape = new Circle(32);
console.log("Square area: " + square.area());
console.log("Circle area: " + circle.area());

console.log("14. Employee, Manager, Developer");
const manager: Manager = new Manager("Nguyen", 1_000_00);
const dev: Developer = new Developer("Si", 0.1);
manager.rob();
dev.work();

console.log("15. Library");
const lib: Library = new Library(
    [new User("Nguyen"), new User("Si")],
    [new Book("Dark Nhan Tam", "Putin", 1999)]
);
console.log("Old lib books: " + lib.books);
lib.addBook(new Book("Cha giau cha ngheo", "Trump", 1999))
console.log("New lib books: " + lib.books);

console.log("16. Box");
const bookBox: Box<Book> = new Box();
bookBox.addItem(new Book("Cha giau cha ngheo", "Trump", 1999))
console.log(bookBox);
const productBox: Box<Product> = new Box();
productBox.addItem(new Product("laptop", 121))
console.log(productBox);