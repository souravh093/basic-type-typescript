{
  // generic type

  type GenericArray<T> = Array<T>;

  //   const rollNUmbers: number[] = [53, 21, 92];
  const rollNUmbers: GenericArray<number> = [53, 21, 92];
  //   const mentors: string[] = ["parsian", "mr: x", "mr y", "mr z"];
  const mentors: GenericArray<string> = ["parsian", "mr: x", "mr y", "mr z"];
  //   const bollArray: boolean[] = [true, false, true, true];
  const bollArray: GenericArray<boolean> = [true, false, true, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Sourave Halder",
      age: 23,
    },
    {
      name: "Jankar Vai",
      age: 29,
    },
  ];

  const add = (x: number, y: number) => x + y;
  add(10, 20);

  //   generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const Man: GenericTuple<string, string> = ["Sourave halder", "Samina Wife"];
  const age: GenericTuple<number, number> = [5, 5];
  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    342233,
    { name: "Sourave", email: "souravh093@gmail.com" },
  ];

  console.log(userWithId[1].email);
}
