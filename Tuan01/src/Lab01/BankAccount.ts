export class BankAccount {
    balance: number
    
    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number) {
        if (amount <= 0) {
            console.log(`Invalid money amount: ${amount}$`);
            return;
        }

        this.balance = this.balance + amount;
    }

    withdraw(amount: number) {
        if (amount <= 0) {
            console.log(`Invalid money amount: ${amount}$`);
            return;
        }
        
        if (amount > this.balance) {
            console.log(`Not have enough blance in account: ${this.balance}`);
            return;
        }

        this.balance = this.balance - amount;
    }
}