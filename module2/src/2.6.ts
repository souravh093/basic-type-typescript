{
  // constraints
  const addCourseToStudent = <
    T extends { name: string; id: number; email: string }
  >(
    student: T
  ) => {
    const course = "NEXT Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
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

  const addCompanyToCourse = <
    T extends {
      id: number;
      isPaid: boolean;
      name: string;
      status: string;
    }
  >(
    course: T
  ) => {
    const company = "SOURAVE Bigger";

    return {
      company,
      ...course,
    };
  };

  const course1 = addCompanyToCourse<{
    id: number;
    isPaid: boolean;
    name: string;
    status: string;
    megaCourse: string
  }>({
    id: 1,
    isPaid: true,
    name: "HTML",
    status: "Running",
    megaCourse: "Hello"
  });
}
