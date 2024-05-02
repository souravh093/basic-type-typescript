"use strict";
{
    // type assertion
    let anything;
    anything = "Hello world!";
    anything = 22;
    anything;
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertNumber = parseFloat(value) * 1000;
            return `the converted value is ${convertNumber}`;
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm("552");
    console.log(result1, result2);
}
