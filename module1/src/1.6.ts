{
  // learning function

  // Normal function
  function add(num1: number, num2: number = 10): number {
    return num1 + num2;
  }

  add(3, 5);

  // Arrow function
  const addArrow = (num1: number, num2: number = 212): string => (num1 + num2).toString();

  addArrow(6, 7);
  console.log(addArrow(6, 7))

  //  object ---> function --> method
  const poorUser = {
    name: "sourav",
    balance: 5,
    addBalance(balance: number): string {
      return `My new Balance: ${this.balance + balance}`;
    },
  };

  const result1 = poorUser.addBalance(52);
  console.log(result1)

  const arr: number[] = [1, 6, 20];

  const newArr: number[] = arr.map((item: number): number => item * item);
  console.log(newArr)
}
