{
    // interface
    type User1 = {
      name: string;
      age: number;
    };
  
    interface User2 {
      name: string;
      age: number;
    }
  
    type UserWithRoll1 = User1 & { role: string };
  
    interface UserWithRoll2 extends User2 {
      role: string;
    }
  
    const user1: UserWithRoll2 = {
      name: "sourav",
      age: 24,
      role: "manager",
    };
  
    console.log(user1);
  
    type Roll1 = number[];
    interface Roll2 {
      [index: number]: number;
    }
  
    const rollNumber1: Roll1 = [5, 92, 1];
    const rollNumber2: Roll2 = [20, 55, 1];
  
    type Add = (num1: number, num2: number) => number;
    interface Add2 {
      (num1: number, num2: number): number;
    }
  
    const add: Add2 = (num1, num2) => num1 + num2;
  }