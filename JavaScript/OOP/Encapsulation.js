function BankAccount(owner, balance) {
    let _balance = balance;

    this.owner = owner;

    this.deposit = function(amount) {
        _balance += amount;
        console.log(`Deposited ${amount}. New balance: ${_balance}`);
    };

    this.getBalance = function() {
        return _balance
    };
};

const acc = new BankAccount("Alice", 1000);
acc.deposit(500); // Deposited 500. New balance: 1500
console.log(acc.getBalance()); //1500
console.log(acc._balance); //encapsulation Undefined (hidden)

// This mimics private fields like in Java or C#.