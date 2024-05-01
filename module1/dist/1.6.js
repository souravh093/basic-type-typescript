"use strict";
{
    // learning function
    // Normal function
    function add(num1, num2 = 10) {
        return num1 + num2;
    }
    add(3, 5);
    // Arrow function
    const addArrow = (num1, num2) => num1 + num2;
    addArrow(6, 7);
    //  object ---> function --> method
    const poorUser = {
        name: "sourav",
        blance: 0,
        addBalance(balance) {
            return `My new Blance: ${this.blance + balance}`;
        },
    };
    const arr = [1, 6, 20];
    const newArr = arr.map((item) => item * item);
}
