{
  // access modifiers

  class BankAccount {
    constructor(
      readonly id: number,
      public name: string,
      protected _balance: number // private not accessible for the child class then we need to use the protected method  
    ) {}

    addDeposit(amount: number) {
        this._balance += amount
        return amount
    }

    getBalance() {
        return this._balance
    }
  }


  const poorManAccount = new BankAccount(110, "Mr: Poor", 20);

  const deposit = poorManAccount.addDeposit(100)
  const balance = poorManAccount.getBalance();

  console.log(balance)
  console.log(deposit)
}
