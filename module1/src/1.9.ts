{
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNumber?: string;
    address: string;
  };

  // Type Alias
  const student1: Student = {
    name: "Sourave Halder",
    age: 29,
    gender: "Male",
    contactNumber: "019342390432",
    address: "Hello barishal",
  };

  const student2: Student = {
    name: "Riaz Khan",
    age: 28,
    gender: "male",
    address: "Dhaka Bangladesh",
  };

  type UserName = string;
  type IsMarried = boolean;

  const userName: UserName = "Sourave Halder";
  const isMarried: IsMarried = true;

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
