"use strict";
{
    // learning function
    // Normal function
    function add(num1, num2 = 10) {
        return num1 + num2;
    }
    add(3, 5);
    // Arrow function
    const addArrow = (num1, num2 = 212) => (num1 + num2).toString();
    addArrow(6, 7);
    console.log(addArrow(6, 7));
    //  object ---> function --> method
    const poorUser = {
        name: "sourav",
        balance: 5,
        addBalance(balance) {
            return `My new Balance: ${this.balance + balance}`;
        },
    };
    const result1 = poorUser.addBalance(52);
    console.log(result1);
    const arr = [1, 6, 20];
    const newArr = arr.map((item) => item * item);
    console.log(newArr);
}
