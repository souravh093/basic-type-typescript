{
  // type assertion
  let anything: any;

  anything = "Hello world!";
  anything = 22;

  anything as number;

  const kgToGm = (value: number | string): number | string | undefined => {
    if (typeof value === "string") {
      const converted = parseFloat(value) * 1000;
      return `this is my converted type result ${converted}`;
    } else if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(5000) as number;
  const result2 = kgToGm("5000") as string;

  console.log(result1, result2);

  console.log(result1, result2);

  type CustomError = {
    message: string;
  };

  try {
    
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
