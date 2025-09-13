using System;

class BankAccount
{
 private decimal balance;
 private string Onwer { get; set;}

 public BankAccount(string onwer, decimal initial)
 {
    Onwer = onwer;
    balance = initial;
 }

 public void Deposit(decimal amount) => balance += amount;
 public void Withdraw(decimal amount) => balance += amount;
 public decimal GetBalance() => balance;

}


