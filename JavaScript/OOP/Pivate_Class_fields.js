class BankAccount {
    #balance; //modern private properties with #

    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance = amount;
    }

    getBalance() {
        return this.#balance;
    };
};

const acc = new BankAccount("Bob", 2000);

acc.deposit(500);
console.log(acc.getBalance());
