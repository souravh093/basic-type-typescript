"use strict";
var _a, _b;
{
    // ternary operator || Optional chaining || nullish colescing operator
    const age = 20;
    //   if (age > 18) {
    //     console.log("Adult");
    //   } else {
    //     console.log("Not Adult");
    //   }
    const isAdult = age >= 18 ? "Adult Age" : "No Adult";
    console.log({ isAdult });
    //   nullish coalescing operator
    // null / undefined --->> decision making
    const isAuthenticated = "";
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result }, { result2 });
    const user = {
        name: "Sourav Halder",
        address: {
            city: "Barishal",
            road: "Charkwaya, 823",
            presentAddress: "Barishal, charkwaya, barishal",
        },
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No permanentAddress";
    console.log({ permanentAddress });
}