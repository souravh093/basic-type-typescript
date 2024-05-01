{
  // nullable type / unknown type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching...");
    } else {
      console.log("Three is nothing to search");
    }
  };

  searchName(null);

  //   unknown type
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 100) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^1`);
    }

    if (typeof value === "string") {
      const valueInNumber = value.split(" ");
      const [result, unit] = valueInNumber;
      const convertedSpeed = (parseInt(result) * 100) / 3600;

      console.log(`The speed is ${convertedSpeed} ms^1`);
    } else {
      console.log("Wrong input");
    }
  };

  getSpeedInMeterPerSecond(true);

//   never type 
const throwError = (msg: string): never => {
    throw new Error(msg);
}

throwError("Arrow find")


}
