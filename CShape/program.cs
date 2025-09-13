// See https://aka.ms/new-console-template for more information

using System;

class Program
{
    static void Main()
    {
        BankAccount acc = new BankAccount("Alice", 1000);
        acc.Deposit(500);
        acc.Withdraw(200);
        Console.WriteLine("Balance: " + acc.GetBalance());
    }
}


