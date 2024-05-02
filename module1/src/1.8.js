"use strict";
// destructuring
{
    const user = {
        id: 13,
        name: {
            firstName: "Sourave",
            halder: "halder",
        },
        contactNo: "01307038493",
        address: "Bangladesh",
    };
    const { contactNo, name: { firstName: fitN }, } = user;
    //   array destructuring
    const myFriends = ["Riaz", "Imran", "Somik", "Rana"];
    const [bestfriend, ...rest] = myFriends;
}
