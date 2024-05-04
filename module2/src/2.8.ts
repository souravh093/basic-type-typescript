{
  // basic promise

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  }

  const getTodo = async (): Promise<Todo> => {
   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
   const data = await res.json();

   return data;
  }

  console.log(getTodo().then(data => console.log(data)))

  type Something = { something: string };
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "hello world!" };

      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  //   calling createPromise function
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    return data;
  };

  const result3 = showData();
  console.log(result3.then(data => console.log(data)));
}
