"use strict";
{
    // type assertion
    let anything;
    anything = "Hello world!";
    anything = 22;
    anything;
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const converted = parseFloat(value) * 1000;
            return `this is my converted type result ${converted}`;
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(5000);
    const result2 = kgToGm("5000");
    console.log(result1, result2);
    console.log(result1, result2);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
