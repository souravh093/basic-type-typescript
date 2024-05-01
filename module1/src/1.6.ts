{
  // learning function

  // Normal function
  function add(num1: number, num2: number = 10): number {
    return num1 + num2;
  }

  add(3, 5);

  // Arrow function
  const addArrow = (num1: number, num2: number): number => num1 + num2;

  addArrow(6, 7);

  //  object ---> function --> method
  const poorUser = {
    name: "sourav",
    blance: 0,
    addBalance(balance: number): string {
      return `My new Blance: ${this.blance + balance}`;
    },
  };

  const arr: number[] = [1, 6, 20];

  const newArr: number[] = arr.map((item: number): number => item * item);
}
