"use strict";
{
    // constraints
    const addCourseToStudent = (student) => {
        const course = "NEXT Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        id: 1343,
        name: "Ms Bal Takna",
        email: "X@gmail.com",
        devType: "Next Label developer",
    });
    const student2 = addCourseToStudent({
        id: 2352,
        name: "Ms Bal Pakna",
        email: "X@gmail.com",
        hasWatch: "Apple Watch",
    });
    const student3 = addCourseToStudent({
        id: 3423,
        name: "MR: hello",
        email: "souravh093@gmail.com",
    });
    const addCompanyToCourse = (course) => {
        const company = "SOURAVE Bigger";
        return Object.assign({ company }, course);
    };
    const course1 = addCompanyToCourse({
        id: 1,
        isPaid: true,
        name: "HTML",
        status: "Running",
        megaCourse: "Hello"
    });
}
