"use strict";
{
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "Sourave Halder",
        age: 26,
        address: "Barishal",
    };
    const car = {
        model: "Honda",
        year: 200,
    };
    const result1 = getPropertyValue(user, "name");
    const result2 = getPropertyValue(car, "year");
    const person1 = "car";
    const person2 = "ship";
    user["age"]; // 26
}
