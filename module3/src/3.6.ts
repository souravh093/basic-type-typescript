{
  // access getter and setter

  class BankAccount {
    constructor(
      readonly id: number,
      public name: string,
      protected _balance: number // private not accessible for the child class then we need to use the protected method
    ) {}

    // setter
    set deposit(amount: number) {
      this._balance += amount;
    }

    //   addDeposit(amount: number) {
    //       this._balance += amount
    //       return amount
    //   }

    // getter
    get Balance() {
      return this._balance;
    }

    //   getBalance() {
    //       return this._balance
    //   }
  }

  const poorManAccount = new BankAccount(110, "Mr: Poor", 70);

  // const deposit = poorManAccount.addDeposit(100)  // call the function
  // const balance = poorManAccount.getBalance();    // call the function

  const myBalance = poorManAccount.Balance;
  const myDeposit = (poorManAccount.deposit = 50);
  console.log(myDeposit);
  console.log(myBalance);
}
