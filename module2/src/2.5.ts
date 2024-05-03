{
  // function with generics

  const createArray = (params: string): string[] => {
    return [params];
  };

  const createArrayWithGeneric = <T>(params: T): T[] => {
    return [params];
  };

  const resGeneric = createArrayWithGeneric<string>("Bangladesh");
  interface FunctionGeneric {
    name: string;
    id: number;
  }
  const resGenericObj = createArrayWithGeneric<FunctionGeneric>({
    id: 2522,
    name: "hello",
  });

  const createArrayWithTuple = <T, Q>(params1: T, params2: Q): [T, Q] => {
    return [params1, params2];
  };

  const resGeneric2 = createArrayWithTuple<string, number>("Bangladesh", 5232);
  interface FunctionGeneric {
    name: string;
    id: number;
  }
  interface FunctionGeneric2 {
    name: string;
    id: number;
  }
  const resGenericObj2 = createArrayWithTuple<
    FunctionGeneric,
    FunctionGeneric2
  >(
    {
      id: 2522,
      name: "hello",
    },
    {
      id: 2343,
      name: "hallo",
    }
  );

  console.log(resGenericObj2);

  const res1 = createArray("Bangladesh");

  const addCourseToStudent = <T>(student: T) => {
    const course = "NEXT Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    name: string;
    email: string;
    devType: string;
  }>({
    name: "Ms Bal Takna",
    email: "X@gmail.com",
    devType: "Next Label developer",
  });

  const student2 = addCourseToStudent<{
    name: string;
    email: string;
    hasWatch: string;
  }>({
    name: "Ms Bal Pakna",
    email: "X@gmail.com",
    hasWatch: "Apple Watch",
  });

    console.log(student1, student2);
}
