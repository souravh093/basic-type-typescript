{
  // mapped type

  const arrayOfNumbers: number[] = [52, 132, 191];

  // const arrayOfString: string[] = ["52", "132", "191"]

  const arrOfStrings: string[] = arrayOfNumbers.map(
    (number) => number.toString()
  );

  console.log(arrOfStrings);


  type AreaNumber = {
    height: number;
    width: number;
  }

//   type AreaString = {
//     height: string;
//     width: string;
//   }

type Something = {
    [key in keyof AreaNumber] : string;
}

type AreaString<T> = {
    [key in keyof T ] : T[key]
}


const area1: AreaString<{
    height: number;
    width: string;
}> = {
    height: 23,
    width: "num",
}


//   
}
