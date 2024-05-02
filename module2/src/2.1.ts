{
  // type assertion
  let anything: any;

  anything = "Hello world!";
  anything = 22;

  anything as number;

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertNumber = parseFloat(value) * 1000;
      return `the converted value is ${convertNumber}`;
    } else if (typeof value === "number") {
      return value * 1000;
    }
  };


  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("552") as string;

  console.log(result1, result2)
}
