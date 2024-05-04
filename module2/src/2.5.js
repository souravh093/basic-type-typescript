"use strict";
{
    // function with generics
    const createArray = (params) => {
        return [params];
    };
    const createArrayWithGeneric = (params) => {
        return [params];
    };
    const resGeneric = createArrayWithGeneric("Bangladesh");
    const resGenericObj = createArrayWithGeneric({
        id: 2522,
        name: "hello",
    });
    const createArrayWithTuple = (params1, params2) => {
        return [params1, params2];
    };
    const resGeneric2 = createArrayWithTuple("Bangladesh", 5232);
    const resGenericObj2 = createArrayWithTuple({
        id: 2522,
        name: "hello",
    }, {
        id: 2343,
        name: "hallo",
    });
    console.log(resGenericObj2);
    const res1 = createArray("Bangladesh");
    const addCourseToStudent = (student) => {
        const course = "NEXT Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        name: "Ms Bal Takna",
        email: "X@gmail.com",
        devType: "Next Label developer",
    });
    const student2 = addCourseToStudent({
        name: "Ms Bal Pakna",
        email: "X@gmail.com",
        hasWatch: "Apple Watch",
    });
    console.log(student1, student2);
}
